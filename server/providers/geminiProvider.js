// This is the Gemini Provider using Google Generative AI SDK

import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

// Debug log for verification
console.log("Gemini API Key:", process.env.GEMINI_API_KEY ? "✅ Loaded" : "❌ Missing");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ Generic function that sends a prompt to Gemini
export const geminiGenerate = async (prompt, context = []) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // You can switch to 1.5-flash if needed

    // Combine conversation context (optional)
    const fullPrompt = context.length
      ? context.map((msg) => `${msg.role}: ${msg.content}`).join("\n") + `\nuser: ${prompt}`
      : prompt;

    const result = await model.generateContent(fullPrompt);
    const response = result.response.text();

    return {
      text: response,
      tokens: response.split(" ").length,
      provider: "gemini",
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get response from Gemini API");
  }
};
