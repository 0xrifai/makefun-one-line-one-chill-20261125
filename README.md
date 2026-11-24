# One Line, One Chill

[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/0xrifai/makefun-one-line-one-chill-20261125/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/0xrifai/makefun-one-line-one-chill-20261125/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

A make.fun entry for **One Line, One Chill**: one sentence of horror, under
200 characters, meant to frighten a reader in a single breath.

## The line

> The ultrasound showed two heartbeats, and the doctor smiled and said only one of them was mine.

The scare is what the sentence withholds. Two heartbeats on the screen, a
doctor who already knows, and a smile that says this is not the first time.
No gore, no mirror, no doll, no basement — just a routine appointment that
stops being routine in the last word.

## Why this line

A good one-line fright earns its dread instead of announcing it. This one
builds on three small, concrete details — the ultrasound screen, the count
of two, the doctor's smile — and lets the reader do the frightening work
after the sentence ends: whose is the second heartbeat, and what does the
doctor know that the patient does not? The sentence is a single breath
long, its rhythm rises through the count and the smile, and the last word
(`mine`) lands the blow by narrowing the horror down to one person.

## How it works

`main.ts` writes that one line to `/output/entry.txt`. Nothing else: no
network, no secrets, no reading from anywhere else. Everything the entry
runs is in this repository.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (Node runs the TypeScript directly).
