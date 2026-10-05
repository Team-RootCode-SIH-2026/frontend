function TranslationResult({
  sourceText,
  translatedText,
  onBack,
}) {
  return (
    <main className="result-page">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <section className="result-header">
        <p className="eyebrow">TRANSLATION RESULT</p>

        <h2>
          Your heritage,
          <br />
          <span>understood.</span>
        </h2>

        <p className="input-description">
          Here is the recognized text and its English translation.
        </p>
      </section>

      <section className="result-content">
        <div className="result-card">
          <div className="result-card-header">
            <span>ORIGINAL TEXT</span>
          </div>

          <div className="result-text">
            {sourceText || "No source text available."}
          </div>
        </div>

        <div className="result-arrow">↓</div>

        <div className="result-card translation-card">
          <div className="result-card-header">
            <span>ENGLISH TRANSLATION</span>
          </div>

          <div className="result-text">
            {translatedText || "No translation available."}
          </div>
        </div>
      </section>

      <button
        className="new-input-button"
        onClick={onBack}
      >
        Start New Translation
        <span>→</span>
      </button>
    </main>
  );
}

export default TranslationResult;