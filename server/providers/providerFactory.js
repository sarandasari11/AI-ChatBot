import { geminiGenerate } from "./geminiProvider.js";

export const getProvider = (providerName) => {
  switch (providerName) {
    case "gemini":
      return geminiGenerate;
    // Later you can add:
    // case "openai": return openAIGenerate;
    // case "dialogflow": return dialogflowGenerate;
    default:
      throw new Error("Invalid provider selected");
  }
};
