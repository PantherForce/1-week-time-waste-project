const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY; // Ensure this is set up correctly in your environment

interface GPTRequest {
  model: string;
  messages: { role: string; content: string }[];
  max_tokens: number;
}

interface GPTResponse {
  choices: { message: { content: string } }[];
}

export const fetchCityFactFromGPT = async (city: string): Promise<string> => {
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const requestPayload: GPTRequest = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Tell me an interesting fact about ${city} in India. I need this in 3 lines.`,
      },
    ],
    max_tokens: 100,
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
    console.error("Error fetching city fact:", error);
    return "An error occurred while fetching the city fact";
  }
};
