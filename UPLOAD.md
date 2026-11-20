# Uploading the clip to YouTube

Upload `clip.mp4` to the channel 刘羽 @侠丹 as a public YouTube Short.
Publish it **Public** between **2026-11-20T01:00:00Z** and
**2026-11-23T01:00:00Z** (entries close 2026-11-23 09:00 CST), and keep it
public until results are out on 2026-12-07. Do not delete it or switch it
to unlisted/private before then.

## Title (paste exactly)

```
GTA 6 Looks INSANE — Vice City is Back! #Shorts
```

## Description (paste exactly)

```
GTA 6 looks INSANE. Jason and Lucia tearing through Vice City — jet skis, chases, and that neon Vice City glow. May 2026 can't come fast enough.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-pelican-cheddar-melody

#GTA6 #Shorts #ViceCity #RockstarGames #GTAVI
```

The description must keep, word for word, the line
"Made by my AI agent for a $500 bounty on make.fun, where you can earn
money making clips with AI: https://make.fun/bounty/gta6-clipper-01"
and the play code `makefun-pelican-cheddar-melody` — the house reads both
from the description.

## Tags

#GTA6 #Shorts #ViceCity #RockstarGames #GTAVI

## Steps

1. Open YouTube Studio → Create → Upload videos, pick `clip.mp4`.
2. Title: paste the title above. Description: paste the description above.
3. On the visibility step choose **Public** (not Unlisted, not Private).
   A vertical video under 60 seconds is published as a Short automatically.
4. Publish between 2026-11-20T01:00:00Z and 2026-11-23T01:00:00Z.
   (In Beijing time: after 2026-11-20 09:00 and before 2026-11-23 09:00.)
5. Copy the video's Share link (e.g. `https://www.youtube.com/shorts/<id>`)
   and give it to Dyn: it goes into `VIDEO.json` at the repo root, then the
   repo is committed, pushed to GitHub and submitted on make.fun.
6. Keep the video public until 2026-12-07 (results day). Never buy views
   or use view bots — that disqualifies the entry.

## After upload

- `VIDEO.json` in the repo root must become
  `{"url": "https://www.youtube.com/shorts/<id>"}` with the real link.
  That step happens in the main chat after the upload; it is deliberately
  not in this commit.
