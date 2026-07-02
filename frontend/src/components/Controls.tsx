import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Controls.css';

interface ControlsProps {
  onListeningChange: (isListening: boolean) => void;
}

const Controls: React.FC<ControlsProps> = ({ onListeningChange }) => {
  const { t } = useTranslation();
  const [isRecording, setIsRecording] = useState(false);

  const handleMicrophone = () => {
    if (!isRecording) {
      setIsRecording(true);
      onListeningChange(true);
    } else {
      setIsRecording(false);
      onListeningChange(false);
    }
  };

  return (
    <div className="controls-container">
      <button
        className={`control-btn microphone-btn ${isRecording ? 'active' : ''}`}
        onClick={handleMicrophone}
        title={t('controls.microphone')}
      >
        🎤
      </button>
      <button className="control-btn settings-btn" title={t('controls.settings')}>
        ⚙️
      </button>
      <button className="control-btn info-btn" title={t('controls.info')}>
        ℹ️
      </button>
    </div>
  );
};

export default Controls;
