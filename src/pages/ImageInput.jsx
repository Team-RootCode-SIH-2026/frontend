import { useState } from "react";

function ImageInput({ onBack, onShowResult }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleScan = () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    setIsProcessing(true);

    // Temporary frontend simulation.
    // We will connect the OCR + translation backend later.
    setTimeout(() => {
      setIsProcessing(false);

      onShowResult({
        sourceText:
          "Recognized text from the image will appear here when the OCR backend is connected.",
        translatedText:
          "English translation will appear here when the translation backend is connected.",
      });
    }, 1000);
  };

  return (
    <main className="input-page">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <section className="input-header">
        <p className="eyebrow">IMAGE INPUT</p>

        <h2>
          Scan your
          <br />
          <span>heritage text.</span>
        </h2>

        <p className="input-description">
          Upload a photograph of handwritten or printed heritage text.
        </p>
      </section>

      <section className="image-input-section">
        {!imagePreview ? (
          <label className="image-upload-area">
            <div className="upload-icon">▣</div>

            <h3>Choose an image</h3>

            <p>
              Upload a photograph of handwritten or printed text
            </p>

            <span className="upload-button">
              Choose Image
            </span>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        ) : (
          <div className="image-preview-area">
            <img
              src={imagePreview}
              alt="Selected heritage text"
              className="image-preview"
            />

            <button
              className="change-image-button"
              onClick={() => {
                setSelectedImage(null);
                setImagePreview(null);
              }}
              disabled={isProcessing}
            >
              Choose a different image
            </button>
          </div>
        )}

        <button
          className="scan-button"
          onClick={handleScan}
          disabled={!selectedImage || isProcessing}
        >
          {isProcessing ? "Processing..." : "Scan Image"}

          {!isProcessing && <span>→</span>}
        </button>
      </section>
    </main>
  );
}

export default ImageInput;