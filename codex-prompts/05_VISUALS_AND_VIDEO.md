# Prompt 5 — Visual filmstrip and video modal

Complete the visuals section using the approved music videos, mini visuals, interviews and BTS clips.

Desktop:
- vertical scroll drives a pinned horizontal filmstrip
- active card scales slightly and becomes less desaturated
- inactive cards retain depth without becoming unreadable
- hover may play a muted short preview only when performance allows

Mobile:
- use a native swipeable horizontal rail with scroll snapping
- do not pin the entire section for an excessive distance

Modal:
- accessible dialog with focus management, Escape close and backdrop close
- play the selected local optimized video
- pause and reset video when the dialog closes
- provide title, category, runtime and optional caption
- prevent background scroll while open

Use poster images, lazy loading and preload metadata only. Avoid loading every full video at initial page load. Run typecheck, lint and build.
