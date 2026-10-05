const API_BASE_URL = "http://localhost:8000";

export async function translateText(text, language) {
  // Backend integration will be added here.
  // Expected input:
  // {
  //   text,
  //   language
  // }

  console.log("Text translation request:", {
    text,
    language,
  });

  throw new Error("Text translation API is not connected yet.");
}

export async function processImage(file, language) {
  // Backend integration will be added here.
  // Expected input:
  // {
  //   image: file,
  //   language
  // }

  console.log("Image processing request:", {
    file,
    language,
  });

  throw new Error("Image API is not connected yet.");
}

export async function processAudio(audioBlob, language) {
  // Backend integration will be added here.
  // Expected input:
  // {
  //   audio: audioBlob,
  //   language
  // }

  console.log("Audio processing request:", {
    audioBlob,
    language,
  });

  throw new Error("Audio API is not connected yet.");
}