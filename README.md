# Forever

Personal healer guides and talent specs for [WoW Forever](https://lorddemonos.github.io/wow-forever/).

The site is a place to keep what stuck from playing: which dungeons to run, which heal rank to cast, and which talent tree to use at 60. It is written to be scanned, and it is not trying to be a full database.

## On the site

- **[Leveling](https://lorddemonos.github.io/wow-forever/leveling/)** — an Undead priest, Horde, from Tirisfal Glades to 60. Dungeon quests, the sleeping bag, the wand path, and the one-kill turn-ins.
- **[Healing](https://lorddemonos.github.io/wow-forever/healing/)** — Priest, Holy Paladin, Restoration Druid, and Restoration Shaman. Every heal rank by mana and by speed, including bonus healing. Alliance or Horde.
- **[Holy Priest PVE](https://lorddemonos.github.io/wow-forever/holy/)** — 20/31/0 at level 60. Alliance or Horde.
- **[Discipline Priest PVE](https://lorddemonos.github.io/wow-forever/disc/)** — 31/20/0 at level 60. Alliance or Horde.

Undead racial notes stay inside the Priest healing guide. They are not a tag on the whole page.

## In this repo

The site is [Jekyll](https://jekyllrb.com/), and the source lives in `wiki/`. GitHub Actions builds that directory and deploys it to GitHub Pages on every push to `main`.

Guides are markdown files in `wiki/guides/`. The homepage and the specs index build their cards from `wiki/_data/guides.yml` and `wiki/_data/specs.yml`.

Not affiliated with Blizzard or Wowhead.
