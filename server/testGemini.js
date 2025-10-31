// testGemini.js is for testing the Gemini API integration independently.
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

async function testGemini() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Use the current supported model name
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent("Hello! Say Hi in one line.");
    console.log("✅ Gemini Response:\n", result.response.text());
  } catch (err) {
    console.error("❌ Gemini API Error:\n", err);
  }
}

testGemini();
