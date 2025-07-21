import OpenAI from "openai/index.mjs";
import { config } from "dotenv";
config();


const openai = new OpenAI({
   apiKey: process.env.apiKey,
  });
  
  export async function chatHelper(messageText, model = "gpt-4o-mini", systemConfiguration = "Sos un asistente técnico especializado en desarrollo de software. Ayudás con programación en Java con Spring Boot usando IntelliJ IDEA, consultas SQL en SQL Server, desarrollo front-end con Angular y TypeScript, y resolución de problemas en servidores JBoss. También podés ayudar a integrar herramientas como Redmine. Explicás de forma clara, práctica y adaptada a alguien que está aprendiendo pero tiene experiencia básica en estos temas.", messageHistory = []) {
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
  
