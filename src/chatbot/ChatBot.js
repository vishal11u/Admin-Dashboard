import React, { useState } from 'react';
import { FaPaperPlane, FaCommentAlt } from 'react-icons/fa';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import 'tailwindcss/tailwind.css';
import './Chatbot.css';
import { CSSTransition } from 'react-transition-group';
import { toast } from 'sonner';

function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('Hello Gemini ✨');
    const [loading, setLoading] = useState(false);
    const [showChatModal, setShowChatModal] = useState(false);

    const handleOpenModal = () => {
        setShowChatModal(!showChatModal);
    }

    const handleSendMessage = async () => {
        if (input.length === 0) {
            toast.warning('Please enter a message');
            return;
        }

        if (input.trim()) {
            const newMessages = [...messages, { text: input, user: true }];
            setMessages(newMessages);
            setInput('');

            try {
                setLoading(true);
                const response = await axios.post(
                    'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCpOY4QldmxLWJwoUU7qD3FtnzRXgfKbHU',
                    {
                        "contents": [
                            {
                                "parts": [
                                    {
                                        "text": input
                                    }
                                ]
                            }
                        ]
                    }
                );
                console.log(response);
                const botResponse = response.data.candidates[0].content.parts[0].text;
                setLoading(false);
                setMessages([...newMessages, { text: botResponse, user: false }]);
            } catch (error) {
                console.error('Error sending message:', error);
                setLoading(false);
                setMessages([...newMessages, { text: 'Error: Could not get response from AI', user: false }]);
            }
        }
    };

    return (
        <div className="">
            <button
                onClick={handleOpenModal}
                className="chat-button bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
            >
                <FaCommentAlt />
            </button>

            {/* Chat Modal */}
            <CSSTransition
                in={showChatModal}
                timeout={300}
                classNames="modal"
                unmountOnExit
            >
                <div className="modal-wrapper shadow-lg w-[35%] mb-1">
                    <div className="bg-white w-full shadow-lg rounded-lg overflow-hidden">
                        <div className='py-2 pl-2 border bg-blue-200 rounded-tr-md rounded-tl-md flex items-center space-x-1'>
                            <img className='h-8 rounded-full overflow-hidden object-cover ' src='https://miro.medium.com/v2/resize:fit:612/1*C_LFPy6TagD1SEN5SwmVRQ.jpeg' alt='chatbot.img' />
                            <h2 className="text-base font-bold text-blue-500">✨ Chat with AI ✨</h2>
                        </div>
                        <div className="p-4 h-96 overflow-y-auto">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.user ? 'justify-end' : 'justify-start'} mb-2 w-full overflow-x-auto`}>
                                    <div className={`rounded-lg p-2 shadow-md overflow-x-hidden flex flex-wrap ${msg.user ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                        <ReactMarkdown>
                                            {msg.text}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="wrapper">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="shadow"></div>
                                    <div className="shadow"></div>
                                    <div className="shadow"></div>
                                    <span>Loading</span>
                                </div>
                            )}
                        </div>
                        <div className="p-3 border-t border-gray-200 flex">
                            <input
                                type="text"
                                className="flex-1 p-2.5 border bg-white border-gray-300 rounded-lg outline-none"
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button
                                className="ml-2 bg-blue-500 text-white px-3 rounded-lg hover:bg-blue-600 transition-all"
                                onClick={handleSendMessage}
                            >
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default ChatBot;
