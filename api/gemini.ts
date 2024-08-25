// api/gemini.ts
export const fetchDestinationFromGemini = async (query: string) => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  const response = await fetch(
    `https://api.gemini.com/destination?query=${query}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch destination");
  }

  const data = await response.json();
  return data.destination;
};
