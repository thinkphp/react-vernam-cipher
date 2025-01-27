import React, { useState } from 'react';
import './VernamCipher.css';

const VernamCipher = () => {
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState([]);
  const [keyDisplay, setKeyDisplay] = useState('');
  const [outputText, setOutputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const generateKey = () => {
    if (!inputText) {
      setOutputText('Please enter some text to generate a key.');
      return;
    }

    const newKey = Array.from({ length: inputText.length },
      () => Math.floor(Math.random() * 256)
    );
    setKey(newKey);
    setKeyDisplay(newKey.map(byte => byte.toString(16).padStart(2, '0').toUpperCase()).join(' '));
  };

  const encryptText = () => {
    if (!inputText) {
      setOutputText('Please enter text to encrypt.');
      return;
    }
    if (!key.length || key.length !== inputText.length) {
      setOutputText('Please generate a key before encrypting.');
      return;
    }

    const encrypted = Array.from(inputText).map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ key[i])
    );
    const encryptedStr = encrypted.join('');
    setEncryptedText(encryptedStr);

    const encryptedDisplay = Array.from(encryptedStr)
      .map(char => char.charCodeAt(0).toString(16).padStart(2, '0').toUpperCase())
      .join(' ');
    setOutputText(`Encrypted (Hex): ${encryptedDisplay}`);
  };

  const decryptText = () => {
    if (!encryptedText) {
      setOutputText('No encrypted text available to decrypt.');
      return;
    }

    const decrypted = Array.from(encryptedText).map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ key[i])
    );
    setOutputText(`Decrypted Text: ${decrypted.join('')}`);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Vernam Cipher by Adrian Statescu</div>
      </div>
      <div className="input-group">
        <label htmlFor="input-text" className="label">
          Enter Text:
        </label>
        <input
          id="input-text"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to encrypt"
          className="input"
        />
      </div>

      <button
        onClick={generateKey}
        className="button button-generate"
      >
        Generate Key
      </button>

      <div className="input-group">
        <label className="label">Key:</label>
        <div className="key-container">
          {keyDisplay || 'No key generated'}
        </div>
      </div>

      <div>
        <button
          onClick={encryptText}
          className="button button-encrypt"
        >
          Encrypt
        </button>
        <button
          onClick={decryptText}
          className="button button-decrypt"
        >
          Decrypt
        </button>
      </div>

      <div className="input-group">
        <label className="label">Output:</label>
        <div className="output-container">
          {outputText || 'No output yet'}
        </div>
      </div>
    </div>
  );
};

export default VernamCipher;
