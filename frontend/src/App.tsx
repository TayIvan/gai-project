import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AvatarScene from './components/AvatarScene';
import ChatInterface from './components/ChatInterface';
import Controls from './components/Controls';
import './App.css';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🤖 GAI Avatar</h1>
        <div className="language-selector">
          <select 
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </header>

      <main className="app-main">
        <section className="avatar-section">
          <AvatarScene />
        </section>

        <section className="interaction-section">
          <ChatInterface isListening={isListening} />
          <Controls onListeningChange={setIsListening} />
        </section>
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ by AI Engineers | Ethical AI by Design</p>
      </footer>
    </div>
  );
};

export default App;
