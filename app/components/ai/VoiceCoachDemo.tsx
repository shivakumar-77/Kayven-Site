"use client";

import { useEffect, useState } from "react";
import { BotAvatar } from "bot-avatars";
import { isAudioSupported, VoiceBeam, useMicrophone } from "voice-glow";

export default function VoiceCoachDemo() {
  const microphone = useMicrophone({ autoStart: false });
  const [mounted, setMounted] = useState(false);
  const [audioSupported, setAudioSupported] = useState(false);
  const isLive = mounted && microphone.state === "live";
  const isRequesting = mounted && microphone.state === "requesting";
  const canListen = mounted && microphone.supported && audioSupported;

  let statusMessage = mounted
    ? "Microphone is off. Choose Listen to request access."
    : "Preparing the microphone demonstration.";

  if (mounted && isRequesting) {
    statusMessage = "Waiting for microphone permission.";
  } else if (isLive) {
    statusMessage = "Listening locally. Speak to see the beam react.";
  } else if (microphone.state === "denied") {
    statusMessage = "Microphone access was denied. Allow it in your browser settings, then try again.";
  } else if (mounted && (!microphone.supported || !audioSupported)) {
    statusMessage = "Microphone audio is not supported in this browser.";
  } else if (microphone.state === "error") {
    if (microphone.error?.name === "NotFoundError") {
      statusMessage = "No microphone was found. Connect a microphone and try again.";
    } else if (microphone.error?.name === "NotReadableError") {
      statusMessage = "The microphone is unavailable or in use by another app. Close that app and try again.";
    } else if (microphone.error?.name === "SecurityError") {
      statusMessage = "Microphone access requires a secure connection, such as HTTPS or localhost.";
    } else {
      statusMessage = "The microphone could not start. Check your browser settings and try again.";
    }
  }

  useEffect(() => {
    setAudioSupported(isAudioSupported());
    setMounted(true);
  }, []);

  function toggleMicrophone() {
    if (isLive) {
      microphone.stop();
      return;
    }

    if (!isRequesting && canListen) {
      void microphone.start();
    }
  }

  return (
    <div className="voice-demo-card">
      <VoiceBeam
        active={isLive}
        bandColors={{
          core: "#336443",
          above: "#85AB8B",
          mid: "#568163",
          below: "#2d3a2a",
        }}
        colorVariant="forest"
        className="voice-demo-beam"
        staticColors
        stream={microphone.stream}
        theme="light"
      >
        <div className="voice-demo-content">
          <div className="voice-demo-heading">
            <div className="voice-demo-avatar">
              <span aria-hidden="true" className="voice-demo-avatar-fallback">
                K
              </span>
              <BotAvatar
                aria-label={`Kayven AI coach, ${isRequesting ? "requesting microphone access" : "idle"}`}
                color="#85AB8B"
                ink="#1f2a1d"
                size={56}
                state={isRequesting ? "working" : "default"}
                theme="light"
                type="pebble"
              />
            </div>
            <div>
              <p className="voice-demo-eyebrow">Voice interaction preview</p>
              <h3 className="voice-demo-title">Listen to the interface</h3>
            </div>
          </div>

          <p className="voice-demo-description">
            This is a microphone-only demonstration. No AI model is connected:
            your audio is analyzed in this browser to animate the beam, but is
            not recorded, transcribed, stored, or sent anywhere.
          </p>

          <div className="voice-demo-controls">
            <button
              aria-pressed={isLive}
              className="voice-demo-button"
              disabled={isRequesting || !canListen}
              onClick={toggleMicrophone}
              type="button"
            >
              {isRequesting ? "Requesting access…" : isLive ? "Stop" : "Listen"}
            </button>
            <p aria-atomic="true" aria-live="polite" className="voice-demo-status">
              {statusMessage}
            </p>
          </div>
        </div>
      </VoiceBeam>
    </div>
  );
}
