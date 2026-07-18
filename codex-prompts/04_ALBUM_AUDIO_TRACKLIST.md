# Prompt 4 — Album sales, tracklist and audio player

Complete the album and audio experience using the approved tracklist and preview files.

Requirements:
- replace placeholder track data with the approved titles, features, producers and durations
- previews must be 20–30 seconds unless explicitly approved otherwise
- build a real accessible audio player using one audio element shared across tracks
- play/pause, active track, seek progress, current time, duration, volume and close/minimize
- selecting another track must stop the previous preview and continue cleanly
- keyboard controls and visible focus states are required
- the bottom audio dock must not cover important mobile controls
- update scene background or accent when the active track changes
- display approved album price and direct purchase CTA prominently
- support release-state config: `preorder`, `direct`, `streaming`
- never expose unapproved full masters in the public directory

Keep purchase URLs in configuration/data files. Run typecheck, lint and build.
