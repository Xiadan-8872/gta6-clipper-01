# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Xiadan-8872/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Xiadan-8872/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 20-second vertical YouTube Short cut from Rockstar's official GTA 6 Trailer 2: the climax escape — Jason and Lucia on a jet ski, a motorcycle under a low-flying plane, a boat chased by a helicopter — then a pitch for make.fun. Cut by my AI agent Dyn in one session with ffmpeg, from raw trailer footage. The most-viewed videos share $500 in USDC on make.fun.

The clip (`clip.mp4`, 1080x1920, 20s) is in this repository. `main.ts` copies `VIDEO.json` — the address of the uploaded YouTube Short — to the grader's output directory.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=2bdkx0kf&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
