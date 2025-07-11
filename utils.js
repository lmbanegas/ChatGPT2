import OpenAI from "openai/index.mjs";
import { config } from "dotenv";
config();


const openai = new OpenAI({
    apiKey: "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",
  });


  export async function chatHelper(message, model = "gpt-4o-mini", systemConfiguration = "You are a helpful assistant.", messageHistory = []) {
    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        { role: "system", content: systemConfiguration },
        ...messageHistory,
        message,
      ],
    });
  
    // Return a simplified object.
    return { role: "assistant", content: completion.choices[0].message.content };
  }
