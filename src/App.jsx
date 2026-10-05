import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import TextInput from "./pages/TextInput";
import ImageInput from "./pages/ImageInput";
import AudioInput from "./pages/AudioInput";
import TranslationResult from "./pages/TranslationResult";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [resultData, setResultData] = useState(null);
  const [language, setLanguage] = useState("");

  const [showLanguages, setShowLanguages] = useState(false);

  const languages = [
    "Select Language",
    "Dogri",
    "Konkani",
    "Kashmiri",
    "Maithili",
    "Manipuri",
    "Bodo",
  ];

  const handleSelectMode = (mode) => {
    if (mode === "text") {
      setCurrentPage("text");
    } else if (mode === "image") {
      setCurrentPage("image");
    } else if (mode === "audio") {
      setCurrentPage("audio");
    }
  };

  const handleBack = () => {
    setCurrentPage("home");
  };
  const handleShowResult = (data) => {
  setResultData(data);
  setCurrentPage("result");
};

  const handleLanguageSelect = (selectedLanguage) => {
    if (selectedLanguage === "Select Language") {
      setLanguage("");
    } else {
      setLanguage(selectedLanguage);
    }

    setShowLanguages(false);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <div className="brand-symbol">◈</div>

          <div>
            <h1>VoiceOfIndia</h1>
            <p>Heritage Language Kiosk</p>
          </div>
        </div>

        <div className="language-selector">
          <button
            className="language-badge"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            <span>{language || "Select Language"}</span>
            <span className="arrow">⌄</span>
          </button>

          {showLanguages && (
            <div className="language-menu">
              {languages.map((item) => (
                <button
                  key={item}
                  onClick={() => handleLanguageSelect(item)}
                  className={language === item ? "active-language" : ""}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {currentPage === "home" && (
        <Home onSelectMode={handleSelectMode} />
      )}

      {currentPage === "text" && (
  <TextInput
    onBack={handleBack}
    onShowResult={handleShowResult}
  />
)}

      {currentPage === "image" && (
        <ImageInput onBack={handleBack} />
      )}

      {currentPage === "audio" && (
  <AudioInput
    onBack={handleBack}
    onShowResult={handleShowResult}
  />
)}

      {currentPage === "result" && (
  <TranslationResult
    sourceText={resultData?.sourceText}
    translatedText={resultData?.translatedText}
    onBack={handleBack}
  />
)}

      <footer className="footer">
        <div>
          <strong>VoiceOfIndia</strong>
          <span> • </span>
          Heritage & Culture
        </div>

        <div>India's Heritage Languages</div>
      </footer>
    </div>
  );
}

export default App;