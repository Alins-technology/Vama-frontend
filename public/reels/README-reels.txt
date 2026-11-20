VAMA REELS FOLDER
=================

Put the reel videos for the website in THIS folder.

1. File names:  reel-1.mp4, reel-2.mp4, reel-3.mp4 ... (lowercase, no spaces)
2. Format:      .mp4, vertical 9:16 (same as Instagram reels)
3. Size:        try to keep each video under 5 MB (compress at handbrake.fr or any online mp4 compressor)
4. Cover image (optional): same name as the video, e.g. reel-1.jpg

Then open  src/data/reels.js  and:
- write the real title for each reel (it shows on the card)
- add/remove lines so the list matches the videos in this folder
- if you added a cover image, put its path in poster, e.g.  poster: "/reels/reel-1.jpg"

Check:  npm run dev  ->  open the Home page and scroll past "Why Choose Us".
