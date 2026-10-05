import { useState } from "react";

function Home({ onSelectMode }) {
  const [selectedMode, setSelectedMode] = useState(null);

  const modes = [
    {
      id: "text",
      icon: "⌨",
      title: "Type Text",
      description: "Type or paste heritage text",
    },
    {
      id: "image",
      icon: "▣",
      title: "Scan Image",
      description: "Scan handwritten or printed text",
    },
    {
      id: "audio",
      icon: "🎙",
      title: "Speak",
      description: "Record a song, story, or spoken tradition",
    },
  ];

  const handleContinue = () => {
    if (selectedMode) {
      onSelectMode(selectedMode);
    }
  };

  return (
    <main className="main-content">
      <section className="welcome-section">
        <p className="eyebrow">PRESERVE • UNDERSTAND • SHARE</p>

        <h2>
          Give your heritage
          <br />
          <span>a voice.</span>
        </h2>

        <p className="welcome-text">
          Explore India's rich linguistic and cultural heritage through
          speech, images, and text. Choose how you want to begin.
        </p>
      </section>

      <section className="mode-section">
        <p className="section-label">CHOOSE AN INPUT METHOD</p>

        <div className="mode-grid">
          {modes.map((mode) => (
            <button
              key={mode.id}
              className={`mode-card ${
                selectedMode === mode.id ? "selected" : ""
              }`}
              onClick={() => setSelectedMode(mode.id)}
            >
              <div className="mode-icon">{mode.icon}</div>

              <div className="mode-text">
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
              </div>

              <div className="mode-arrow">→</div>
            </button>
          ))}
        </div>
      </section>

      <section className="continue-section">
        <button
          className="continue-button"
          disabled={!selectedMode}
          onClick={handleContinue}
        >
          Continue
          <span>→</span>
        </button>

        {!selectedMode && (
          <p className="instruction">
            Select an option above to continue
          </p>
        )}
      </section>
    </main>
  );
}

export default Home;