import OpenAI from "openai/index.mjs";
import { config } from "dotenv";
config();


const openai = new OpenAI({
    apiKey: process.env.apiKey,
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
