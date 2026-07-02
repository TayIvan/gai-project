import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAvatarStore } from '../store/avatarStore';
import '../styles/ChatInterface.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  isListening: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isListening }) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { setIsSpeaking, setExpression } = useAvatarStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setExpression('thinking');

    try {
      const response = await fetch('/api/v1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setExpression('happy');
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setExpression('sad');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-interface">
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <p>👋 {t('greeting.hello')}</p>
            <p className="subtitle">{t('greeting.how_can_i_help')}</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.role}`}>
              <span className="role-badge">{msg.role === 'user' ? '👤' : '🤖'}</span>
              <p>{msg.content}</p>
            </div>
          ))
        )}
        {isLoading && <div className="message-loading">⏳ {t('chat.thinking')}</div>}
        <div ref={messagesEndRef} />
      </div>

      <form
        className="input-form"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(inputValue);
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={t('chat.type_message')}
          disabled={isLoading}
          className="message-input"
        />
        <button type="submit" disabled={isLoading || !inputValue.trim()}>
          {t('chat.send')}
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
