# **Node.js Chat Backend Setup**
![CoreGPT](https://d3erng0hrrd7m4.cloudfront.net/logo.png)  

**Build a Node.js-powered backend for your AI chat application.**  

![Node.js](https://nodejs.org/static/images/logo.svg)

---

## **Project Title: AI Chat with Node.js**

### **Description**  
A fully functional backend API built with **Node.js and Express** that interacts with the **ChatGPT API**. This setup provides a structured approach to handling chat messages, API requests, and responses efficiently.

### **Project Structure**  

```plaintext
backend/
├── routes/
│   └── sendMessages.js
├── utils/
│   └── OpenAiHelpers.js
├── index.js
├── package.json
└── .env
```

---

## **Technologies Used**  

### **Backend:**  
- Node.js  
- Express  
- OpenAI API  
- dotenv  
- CORS  

---

## **Setup & Installation**  

### **1. Clone the Repository**  

```bash
git clone https://github.com/your-repo/node-chat-backend.git
cd node-chat-backend
```

### **2. Navigate to the Backend Project Folder**  

```bash
cd backend
```

### **3. Initialize the Project and Create the `.env` File**  

If you haven't already, initialize a Node.js project and create a `.env` file:

```bash
npm init -y
touch .env
```

### **4. Configure `package.json`**  

Open the `package.json` file and update it to include the `start` script and define the project as an ES module:

```json
{
  "type": "module",
  "scripts": {
    "start": "node index.js"
  }
}
```

- **`type: "module"`**: Enables modern ES module syntax (`import` instead of `require`).
- **`start` script**: Allows running the server with `npm start`.

### **5. Add Environment Variables**  

Open the `.env` file and add your OpenAI API key and server port:

```plaintext
OPENAI_API_KEY=your_api_key_here
PORT=8000
```

- **OPENAI_API_KEY:** Key provided by OpenAI to authenticate requests.
- **PORT:** Port on which the server will run (default is `8000`).

### **6. Install Required Dependencies**  

Run the following command to install the required libraries:

```bash
npm install express cors dotenv openai
```

- `express`: Web framework for Node.js.
- `cors`: Middleware to enable CORS.
- `dotenv`: Loads environment variables from the `.env` file.
- `openai`: Official library to interact with the OpenAI API.

---

## **Setting Up the Chat Route**  

### **1. Create the `sendMessages.js` Route**  

#### **a. File Location**  

Create the file `sendMessages.js` inside the `routes/` folder.

#### **b. Library Imports**  

Import `express` to create routes and the helper function `chatHelper`:

```js
import express from "express";
import { chatHelper } from "../utils/OpenAiHelpers.js";
```

- `express`: Web framework for Node.js.
- `chatHelper`: Custom function to interact with the OpenAI API.

---

## **Features**  

✅ **Real-time Chat API** – Interact seamlessly with the AI chatbot.  
✅ **Fast and Lightweight** – Uses Express for quick API responses.  
✅ **Secure API** – Manages environment variables for key protection.  
✅ **Modular Architecture** – Organized structure for easy scalability.  
✅ **Error Handling** – Handles API failures gracefully.  

---

## **Get the Code**  

🚀 **Node.js Chat Backend:** 👉 [Download the Code](https://www.the-aideveloper.com/products/node_chat)  

🔥 **Full Chat System Packages:**  
- **Node.js + React**: [Get It Here](https://checkout.the-aideveloper.com/b/node_react)  
- **Node.js + FastAPI**: [Get It Here](https://checkout.the-aideveloper.com/b/node_fastapi)  

---

## **Guides & Documentation**  

📖 Check out the **full guide** on [theAIDeveloper Guides](https://www.the-aideveloper.com/guides).  

---

## **Author**  

👨‍💻 **Carlos Polanco** – Passionate AI Developer and Full Stack Engineer.  

🌎 Learn more at [theAIDeveloper.com](https://www.the-aideveloper.com).  

---

## **Connect With Us**  

- [![YouTube](https://img.icons8.com/color/48/000000/youtube-play.png)](https://www.youtube.com/@theaideveloper) **YouTube**  
- [![Instagram](https://img.icons8.com/color/48/000000/instagram-new.png)](https://www.instagram.com/cptheaideveloper/) **Instagram**  
- [![Twitter](https://img.icons8.com/color/48/000000/twitter-squared.png)](https://x.com/cpaideveloper) **Twitter**  
- [![TikTok](https://img.icons8.com/color/48/000000/tiktok.png)](https://www.tiktok.com/@codingnutella) **TikTok**  
- [![LinkedIn](https://img.icons8.com/color/48/000000/linkedin.png)](https://www.linkedin.com/company/theaidevelopercp/) **LinkedIn**  

---

## **License