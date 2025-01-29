import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const answers = [
    "This is answer 1.",
    "This is answer 2.",
    "This is answer 3.",
    "This is answer 4.",
  ];
  
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(0);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    
    setTimeout(() => {
      const answer = answers[answerIndex % answers.length];
      setMessages([...newMessages, { text: answer, isUser: false }]);
      setAnswerIndex(answerIndex + 1);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-900">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 p-4">
          <h1 className="text-2xl font-bold text-purple-300 mb-8">What can I help with?</h1>
          <div className="w-3/4 relative bg-gray-800 rounded-lg p-6">
            <textarea
              className="w-full h-40 p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-indigo-500"
              onClick={handleSend}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="w-3/4 mx-auto">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"} mb-4`}>
                    <div
                      className={`p-4 rounded-lg max-w-xl ${
                        msg.isUser 
                          ? "bg-purple-600 text-white" 
                          : "bg-gray-700 text-purple-100"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start mb-4">
                    <div className="p-4 rounded-lg bg-gray-700 text-purple-100 animate-pulse">...</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 border-t border-gray-700">
            <div className="w-3/4 mx-auto relative">
              <input
                type="text"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pr-24"
                placeholder="Ask something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-indigo-500"
                onClick={handleSend}
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App
