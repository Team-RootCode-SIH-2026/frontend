import { useState } from "react";

function TextInput({ onBack, onShowResult }) {
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTranslate = () => {
    if (!text.trim()) {
      alert("Please enter some text first.");
      return;
    }

    setIsProcessing(true);

    // Temporary frontend simulation.
    // We will replace this with the backend API later.
    setTimeout(() => {
      setIsProcessing(false);

      onShowResult({
        sourceText: text,
        translatedText:
          "English translation will appear here when the translation backend is connected.",
      });
    }, 800);
  };

  return (
    <main className="input-page">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <section className="input-header">
        <p className="eyebrow">TEXT INPUT</p>

        <h2>
          Enter your
          <br />
          <span>heritage text.</span>
        </h2>

        <p className="input-description">
          Type or paste the text you want to translate and explore.
        </p>
      </section>

      <section className="text-input-section">
        <label htmlFor="heritage-text">
          ENTER TEXT
        </label>

        <textarea
          id="heritage-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Type or paste your text here..."
          rows="9"
          disabled={isProcessing}
        />

        <div className="text-actions">
          <span className="character-count">
            {text.length} characters
          </span>

          <button
            className="translate-button"
            onClick={handleTranslate}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Translate"}

            {!isProcessing && <span>→</span>}
          </button>
        </div>
      </section>
    </main>
  );
}

export default TextInput;