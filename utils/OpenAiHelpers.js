import OpenAI from "openai/index.mjs";
import { config } from "dotenv";
config();


const openai = new OpenAI({
   apiKey: process.env.apiKey,
  });
  
  export async function chatHelper(messageText, model = "gpt-4o-mini", systemConfiguration = "You are a helpful assistant.", messageHistory = []) {
    const userMessage = { role: "user", content: messageText };
  
    const completion = await openai.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemConfiguration },
        ...messageHistory,
        userMessage,
      ],
    });
  
    const assistantMessage = { role: "assistant", content: completion.choices[0].message.content };
  
    messageHistory.push(userMessage);
    messageHistory.push(assistantMessage);
  
    return assistantMessage;
  }
  