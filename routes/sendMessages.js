import express from "express";
import { chatHelper } from "../utils/OpenAiHelpers.js";
import { marked } from "marked";


const router = express.Router();

router.get("/", async (req, res) => {
  res.render('chat')
});


router.post("/enviar", async (req, res) => {

    try {

      const userInput = req.body.texto2;
      const message = { role: "user", content: userInput };
      const result = await chatHelper(message);

      result.content = marked(result.content);

        


      res.json({ content: result.content });

    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ error: "Error processing request" });
    }
  });


  export default router;
