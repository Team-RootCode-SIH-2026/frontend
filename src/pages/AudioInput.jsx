import { useState, useRef } from "react";

function AudioInput({ onBack, onShowResult }) {
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });

        console.log("Recording created:", audioBlob);

        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();

      setIsRecording(true);
      setHasRecording(false);
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime((time) => time + 1);
      }, 1000);
    } catch (error) {
      console.error("Microphone error:", error);

      alert(
        "Microphone access was denied or is not available."
      );
    }
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) {
      return;
    }

    mediaRecorderRef.current.stop();

    setIsRecording(false);
    setHasRecording(true);

    clearInterval(timerRef.current);
  };

  const handleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleProcess = () => {
    if (!hasRecording) {
      alert("Please record something first.");
      return;
    }

    setIsProcessing(true);

    // Temporary frontend simulation.
    // Later this audio file will be sent to the backend.
    setTimeout(() => {
      setIsProcessing(false);

      onShowResult({
        sourceText:
          "Recognized speech will appear here when the ASR backend is connected.",
        translatedText:
          "English translation will appear here when the translation backend is connected.",
      });
    }, 1000);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <main className="input-page">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <section className="input-header">
        <p className="eyebrow">AUDIO INPUT</p>

        <h2>
          Give your heritage
          <br />
          <span>a voice.</span>
        </h2>

        <p className="input-description">
          Record a song, story, poem, or spoken tradition to explore
          its meaning.
        </p>
      </section>

      <section className="audio-input-section">
        <div className="record-circle">
          <div
            className={
              isRecording
                ? "record-dot recording"
                : "record-dot"
            }
          >
            ●
          </div>
        </div>

        {isRecording && (
          <div className="recording-time">
            {formatTime(recordingTime)}
          </div>
        )}

        <h3>
          {isRecording
            ? "Recording..."
            : hasRecording
            ? "Recording complete"
            : "Ready to record"}
        </h3>

        <p className="record-description">
          {isRecording
            ? "Speak clearly into the microphone."
            : hasRecording
            ? "Your recording is ready to process."
            : "Press the button below to start recording."}
        </p>

        {isRecording && (
          <div className="recording-indicator">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        <button
          className={`record-button ${
            isRecording ? "stop" : ""
          }`}
          onClick={handleRecording}
          disabled={isProcessing}
        >
          {isRecording
            ? "Stop Recording"
            : "Start Recording"}
        </button>

        {hasRecording && !isRecording && (
          <button
            className="process-audio-button"
            onClick={handleProcess}
            disabled={isProcessing}
          >
            {isProcessing
              ? "Processing..."
              : "Process Audio"}

            {!isProcessing && <span>→</span>}
          </button>
        )}
      </section>
    </main>
  );
}

export default AudioInput;