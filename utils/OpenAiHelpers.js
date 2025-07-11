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
