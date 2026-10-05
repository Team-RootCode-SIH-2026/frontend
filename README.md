# VoiceOfIndia Frontend

Frontend for the VoiceOfIndia Heritage Language Kiosk.

The application provides a touch-friendly interface for exploring Indian
heritage languages through three input modes:

- Text
- Image
- Audio

The frontend is built with React and Vite.

---

## Features

### Text Input
Users can type or paste heritage-language text and start the translation flow.

### Image Input
Users can upload an image containing handwritten or printed heritage text.

The frontend displays the selected image and starts the OCR/translation flow.

### Audio Input
Users can record audio using the browser microphone.

The frontend provides recording controls and prepares the audio-processing flow.

### Translation Result
All three input modes use a common translation-result screen showing:

1. Original / recognized text
2. English translation

---

## Technology

- React
- Vite
- JavaScript
- CSS
- Browser MediaRecorder API for audio recording

---

## Project Structure

```text
VoiceOfIndia/
│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── TextInput.jsx
│   │   ├── ImageInput.jsx
│   │   ├── AudioInput.jsx
│   │   └── TranslationResult.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md