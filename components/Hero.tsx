"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Muted is required for autoplay; set it on the element directly (the React
    // `muted` prop alone is unreliable across browsers).
    video.muted = true;

    const tryPlay = () => {
      if (!userPausedRef.current) video.play().catch(() => {});
    };

    const onCanPlay = () => {
      setReady(true);
      tryPlay();
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onVolume = () => setMuted(video.muted);

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("volumechange", onVolume);

    // In case the video is already ready by the time the effect runs
    if (video.readyState >= 3) {
      setReady(true);
    }
    tryPlay();

    // Pause when scrolled out of view, resume when back (saves resources)
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              if (!userPausedRef.current) video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.2 }
      );
      io.observe(video);
    }

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("volumechange", onVolume);
      io?.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      video.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted && video.paused) video.play().catch(() => {});
    setMuted(video.muted);
  };

  return (
    <section className="hero">
      {/* Full-bleed background video (local MP4) */}
      <div className={`hero__bg${ready ? " is-ready" : ""}`} id="hero-video-wrap">
        <div className="hero__video-fallback" aria-hidden="true">
          🍛
        </div>
        <div className="hero__yt-wrap">
          <video
            ref={videoRef}
            className="hero__video-el"
            src="/videos/nyeti.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Namaste Yeti food video"
          />
        </div>
        <div className="hero__scrim" aria-hidden="true"></div>

        <div className="hero__video-controls">
          <button
            type="button"
            id="hero-play"
            className={`hero__vbtn${!playing ? " is-paused" : ""}`}
            aria-label={playing ? "Pause video" : "Play video"}
            aria-pressed={playing}
            onClick={togglePlay}
          >
            <span className="i-pause" aria-hidden="true"></span>
            <span className="i-play" aria-hidden="true"></span>
          </button>
          <button
            type="button"
            id="hero-mute"
            className={`hero__vbtn${!muted ? " is-unmuted" : ""}`}
            aria-label={muted ? "Unmute video" : "Mute video"}
            aria-pressed={!muted}
            onClick={toggleMute}
          >
            <span className="i-muted" aria-hidden="true">
              🔇
            </span>
            <span className="i-unmuted" aria-hidden="true">
              🔊
            </span>
          </button>
        </div>
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__lead">
            Nepali and Indian comfort food for casual dining, quick takeout, easy delivery, and
            group catering.
          </p>

          <div className="hero__buttons">
            <a href="#order" className="btn btn--primary btn--lg">
              Order Online
            </a>
            <a href="#menu" className="btn btn--light btn--lg">
              View Menu
            </a>
            <a href="#location" className="btn btn--ghost-light btn--lg">
              Get Directions
            </a>
          </div>

          <p className="hero__trust">
            <span>Dine-In</span>
            <span>Takeout</span>
            <span>Delivery</span>
            <span>Catering</span>
          </p>
        </div>
      </div>

      <a href="#order" className="hero__scroll-cue" aria-label="Scroll to explore">
        <span></span>
      </a>
    </section>
  );
}
