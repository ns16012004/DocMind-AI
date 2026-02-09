// frontend/src/App.jsx
import ChatPage from "./ChatPage";
import "./App.css";

function App() {
  return (
    <div>
      <header style={{ textAlign: "center", padding: "1rem" }}>
        <h1>🧠 DocMind-AI</h1>
        <p>Chat with your documents using Retrieval-Augmented Generation</p>
      </header>

      <ChatPage />
    </div>
  );
}

export default App;
