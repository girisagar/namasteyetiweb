// Minimal typings for the YouTube IFrame API global used by the hero video.
export {};

declare global {
  interface Window {
    YT?: {
      Player: new (el: string | HTMLElement, options: unknown) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (v: number) => void;
  getPlayerState: () => number;
  setPlaybackQuality: (q: string) => void;
  destroy: () => void;
}
