// This service handles communication with the Gemini API

import axios from "axios";

export async function sendMessageToGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    // Safely extract response text
    return (
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ No valid response from Gemini."
    );
  } catch (error) {
    console.error("❌ Gemini API Error:", error.message);
    return "⚠️ Error communicating with Gemini API.";
  }
}
