const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY; // Use environment variable for security

interface GPTRequest {
  model: string;
  messages: { role: string; content: string }[];
  max_tokens: number;
}

interface GPTResponse {
  choices: { message: { content: string } }[];
}

interface UserPreferences {
  destinationType: string;
  culturalSites: boolean;
  prefersBeaches: boolean;
  specificActivities: string;
  visitTime: string;
}

const createPrompt = (preferences: UserPreferences): string => {
  return `
      Based on the following preferences, provide detailed recommendations for the top five best places to visit in India:
  
      1. Preferred Type of Destination: ${preferences.destinationType}
      2. Interested in Cultural Sites: ${
        preferences.culturalSites ? "Yes" : "No"
      }
      3. Prefer Beaches: ${preferences.prefersBeaches ? "Yes" : "No"}
      4. Specific Activities: ${preferences.specificActivities}
      5. Time of Year to Visit: ${preferences.visitTime}
      
      For each recommendation, include:
     A brief description of the destination
      Key highlights or attractions
      Ideal time to visit
      Any relevant tips for travelers
  
      Ensure that the recommendations align closely with the preferences provided and offer useful information for making a decision and i need data in proper format.
    `;
};

export const fetchDestinationFromGPT = async (
  preferences: UserPreferences
): Promise<string> => {
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const requestPayload: GPTRequest = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: createPrompt(preferences) }],
    max_tokens: 300,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(requestPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.error?.message || "Unknown error occurred";
      throw new Error(`API request failed: ${errorMessage}`);
    }

    const data: GPTResponse = await response.json();
    const result =
      data.choices[0]?.message?.content || "No response from GPT-3.5 Turbo";
    return result;
  } catch (error) {
    console.error("Error fetching destination:", error);
    return "An error occurred while fetching the destination";
  }
};
