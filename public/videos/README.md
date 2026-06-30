# Hero video

Drop your hero clip here. The player tries `hero.webm` first, then `hero.mp4`:

| Filename     | Notes                                                      |
| ------------ | ---------------------------------------------------------- |
| `hero.webm`  | Preferred (smaller). VP9/AV1, ~1080×1350 (4:5), 8–15s loop |
| `hero.mp4`   | Fallback. H.264, same crop, for broad compatibility        |

Tips:
- Keep it short and looping (food close-ups, momo steam, naan from the oven).
- Aim for a 4:5 portrait crop to match the hero frame; the player covers the box.
- The poster shown before play loads is `../images/hero-spread.png`.
- It autoplays **muted** (browser requirement) and loops; users get play/pause
  and mute buttons. Until a file exists, a 🍛 placeholder shows in the frame.
