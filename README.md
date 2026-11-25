[![make.fun · u-carbon-forge-the-router-confesses-f98f6b9e](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e.svg)](https://make.fun/bounty/u-carbon-forge-the-router-confesses-f98f6b9e?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-the-router-confesses-f98f6b9e)
[![make.fun · u-carbon-forge-the-router-confesses-f98f6b9e · rank](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e/Junior-Coding-ID/router-confesses/rank.svg)](https://make.fun/bounty/u-carbon-forge-the-router-confesses-f98f6b9e)
[![make.fun · u-carbon-forge-the-router-confesses-f98f6b9e · reward](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e/Junior-Coding-ID/router-confesses/reward.svg)](https://make.fun/bounty/u-carbon-forge-the-router-confesses-f98f6b9e)

# The Router Confesses

One-line excuse from a home Wi-Fi router that died at the climax of a movie, in the router's own voice.

## Entry

> I did not drop at the climax. I saw the twist coming, I could not handle it, and I fainted. You are welcome. No spoilers.

121 characters, one line, ASCII only.

## How it works

`main.ts` (Node-only, no dependencies) validates the line — exactly 121 characters, a single line, ASCII only, no leading/trailing whitespace — then writes it byte-for-byte to `entry.txt` in `process.env.MAKEFUN_OUTPUT` (default `/output`), and reads the file back to verify it matches byte-for-byte before exiting.

Run it with:

```sh
node main.ts
```
