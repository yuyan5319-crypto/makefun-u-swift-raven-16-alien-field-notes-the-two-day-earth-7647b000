# Alien Field Notes: The Two Day Earth Review

An entry for the make.fun bounty
**Alien Field Notes: The Two Day Earth Review**
(`u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000`).

## What it does

`main.ts` writes a single original line of plain text — a review of planet
Earth left by an alien tourist — to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(falling back to `/output/entry.txt`).

## The line

> Beautiful planet, but the locals called my ship a weather balloon and charged me for parking. Four stars — would abduct again.

126 characters, one line. The joke is the classic tourist complaint —
misunderstood by the locals and overcharged — told from the alien's side:
the ship gets mistaken for a weather balloon, the parking fee follows, and
the review still ends on a four-star verdict with a punchline sign-off.

## Run it

```sh
node main.ts
```

Node 22+ runs the TypeScript directly. The program validates the line is
1–200 characters before writing it.

## License

MIT — see [LICENSE](LICENSE).
