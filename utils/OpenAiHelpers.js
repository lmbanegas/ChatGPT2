import OpenAI from "openai/index.mjs";
import { config } from "dotenv";
config();


const openai = new OpenAI({
    apiKey: process.env.apiKey,
  });



export async function chatHelper(message, model = "gpt-4o-mini", systemConfiguration = "You are a helpful assistant.", messageHistory = []) {
        messageHistory.push({ role: "user", content: message });

    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        { role: "system", content: systemConfiguration },
        ...messageHistory,
        message,
      ],

    });
    messageHistory.push({role: "assistant", content: completion.choices[0].message.content});
    // Return a simplified object.
    console.log(messageHistory);
    return { role: "assistant", content: completion.choices[0].message.content };
  }


