---
layout: guide
title: Holy Paladin Healing Efficiency
permalink: /healing/paladin/
kicker: Paladin
wide: true
---

# Holy Paladin Healing Efficiency

**Paladin.** Alliance or Horde. The ranks below are the Forever beta client, build 1.60.1.70009, with no gear and no talents. Classic is named only where a rank changed.

Priest ranks are [Priest Healing Efficiency]({{ '/healing/priest/' | relative_url }}). Restoration Druid ranks are [Restoration Druid Healing Efficiency]({{ '/healing/druid/' | relative_url }}). Restoration Shaman ranks are [Restoration Shaman Healing Efficiency]({{ '/healing/shaman/' | relative_url }}). A live version of the bonus-healing math is the [downrank calculator](https://foreverchanges.pro/downrank-calculator).

## What to cast

At 60. No gear, no talents. Per mana is the average heal divided by the mana. These numbers are for a target who needs the whole heal. If they are missing less than that, cast the smallest rank that covers it. Blessing of Light is not in these lines. It is the next decision, and it has its own section.

**One person, and 2.5 seconds is enough.** Holy Light rank 9, 2.39 per mana. Flash of Light rank 6 is 2.16, and it lands in 1.5 seconds.

**The target will die inside those 2.5 seconds.** Flash of Light rank 6. Holy Shock rank 4 is instant, 0.98 per mana, then a 10 second wait. Holy Shock is a Holy talent. Its range is 20 yards. Holy Light and Flash of Light are 40.

**+200 bonus healing, and the target needs the whole heal.** Flash of Light rank 6 is 2.78, ahead of Holy Light rank 9 at 2.61. Holy Light rank 1 is 5.31, for 186, and it wins when that is enough.

**+400 bonus healing.** Holy Light rank 1 is 9.40, for 329. Flash of Light rank 1 is 6.20, for 217. Flash of Light rank 6 is 3.39, for 474, still ahead of Holy Light rank 9 at 2.83. The cheap rank wins when the missing health is small enough for the whole heal to land.

## How to read a heal

Two numbers decide a rank.

**Per mana** is the average heal divided by the mana. Higher spends less mana for the same health.

**Per sec** is the average heal divided by the cast time. Higher fills a health bar faster while the cast is going.

The average is the middle of the tooltip range. A heal listed as 1495–1665 averages 1580, and the ratios use 1580.

Cast the smallest rank whose average covers the health that is actually missing. The rest of a bigger heal is mana spent on health the target already had.

Holy Shock is instant. Its per sec is the heal divided by the 1.5 second global cooldown. It then waits 10 seconds. The same cast damages an enemy instead of healing an ally. The damage is not in these tables.

## Notes

**Bonus healing.** A direct heal adds cast time divided by 3.5 of your bonus healing. Holy Light is 2.5 seconds on every rank, so 71.4%. Flash of Light is 1.5 seconds on every rank, so 42.9%. An instant counts as 1.5 seconds. The client list that publishes those shares does not publish one for Holy Shock or Light's Vigil, so their tables stay on the tooltip.

Those shares are stored on every rank in the Forever client. Classic reduces a rank learned before level 20 by 3.75% for each level under 20. Holy Light rank 1 is 71.4% here and 20.5% in Classic. Flash of Light is learned at 20, so both clients use 42.9%. If the server applies another cut that is not in the client, you would only see it on a geared character.

The heal with bonus healing is the tooltip average plus that share times the bonus. The average in these tables is the heal at the level the rank is learned. The base grows a little as you level, until the next rank. Use the [calculator](https://foreverchanges.pro/downrank-calculator) once you are 60 and the base has grown.

**Forever's bases are lower** than Classic from Holy Light rank 3 up, and on every rank of Flash of Light. Holy Light rank 9 is 1495–1665. Classic is 1590–1770. The mana stays 660. Flash of Light rank 6 is 286–320. Classic is 343–383. The mana stays 140. Holy Light ranks 1 and 2 match Classic's tooltip. Rank 1 still takes 71.4% of bonus healing here, and 20.5% in Classic.

**Talents.** Healing Light is 4%, then 8%, then 12% more from Holy Light, Flash of Light, and Holy Shock. It multiplies the whole heal, so the best rank stays the best rank. At 12%, Holy Light rank 9 is 1770 for 660 mana, 2.68 per mana. Classic's Healing Light does not list Holy Shock. Infusion of Light cuts the next Holy Light by 0.5 seconds, then by 1.0 seconds, after a Holy Shock or Flash of Light critical heal, if that Holy Light starts within 15 seconds. The bonus-healing share stays on the 2.5 second base, so per mana does not move. At two points, rank 9 is a 1.5 second cast, 1053.33 per sec. Illumination, after a critical heal from Flash of Light, Holy Light, Light's Vigil, or Holy Shock, gives a 20% chance per point to return 50% of that spell's base cost, up to 100% at five points. Classic returns the full base cost, and it does not list Light's Vigil. Crits are not in these numbers. Divine Favor makes the next Flash of Light, Holy Light, or Holy Shock a critical heal. It costs 4% of base mana and then waits 2 minutes. It does not make the spell free.

**The five-second rule.** A cast stops spirit-based mana regeneration for 5 seconds after it finishes. Holy Shock is instant and still starts those 5 seconds.

**Pushback and cancelling.** Damage while you cast pushes a cast back. Spiritual Focus is two ranks. It gives Flash of Light, Holy Light, and Light's Vigil a 35% chance, then 70%, to not lose casting time. Classic is five ranks, 14% each, and it does not list Light's Vigil. It is not in these numbers. Mana is spent when the cast finishes. Starting Holy Light and cancelling it spends nothing.

## Single target

No gear. No talents. Sorted by the level the rank is learned.

<div class="table-wrap spells" markdown="1">

| Level | Spell | Cast | Heal | Mana | Per mana | Per sec |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Holy Light 1 | 2.5 sec | 39–47 | 35 | 1.23 | 17.2 |
| 6 | Holy Light 2 | 2.5 sec | 76–90 | 60 | 1.38 | 33.2 |
| 14 | Holy Light 3 | 2.5 sec | 142–168 | 110 | 1.41 | 62 |
| 20 | Flash of Light 1 | 1.5 sec | 43–49 | 35 | 1.31 | 30.67 |
| 22 | Holy Light 4 | 2.5 sec | 267–307 | 190 | 1.51 | 114.8 |
| 26 | Flash of Light 2 | 1.5 sec | 62–70 | 50 | 1.32 | 44 |
| 30 | Holy Light 5 | 2.5 sec | 425–479 | 275 | 1.64 | 180.8 |
| 30 | Holy Shock 1 | instant | 110–118 | 160 | 0.71 | 76 |
| 34 | Flash of Light 3 | 1.5 sec | 95–107 | 70 | 1.44 | 67.33 |
| 38 | Holy Light 6 | 2.5 sec | 610–682 | 365 | 1.77 | 258.4 |
| 40 | Holy Shock 2 | instant | 150–162 | 225 | 0.69 | 104 |
| 42 | Flash of Light 4 | 1.5 sec | 142–160 | 90 | 1.68 | 100.67 |
| 46 | Holy Light 7 | 2.5 sec | 850–948 | 465 | 1.93 | 359.6 |
| 48 | Holy Shock 3 | instant | 221–239 | 275 | 0.84 | 153.33 |
| 50 | Flash of Light 5 | 1.5 sec | 210–236 | 115 | 1.94 | 148.67 |
| 54 | Holy Light 8 | 2.5 sec | 1151–1283 | 580 | 2.10 | 486.8 |
| 56 | Holy Shock 4 | instant | 307–333 | 325 | 0.98 | 213.33 |
| 58 | Flash of Light 6 | 1.5 sec | 286–320 | 140 | 2.16 | 202 |
| 60 | Holy Light 9 | 2.5 sec | 1495–1665 | 660 | 2.39 | 632 |

</div>

Per sec is how fast the health arrives during the cast. Flash of Light still lands at 1.5 seconds. Holy Light lands at 2.5. If the target will die inside those 2.5 seconds, use the fast cast.

Holy Shock is a Holy talent. Rank 1 comes with it, at 30. Ranks 2 to 4 are trained. The heal is behind both casts. Rank 4 is 0.98 per mana. You cast it, then you wait 10 seconds. The same cast deals Holy damage to an enemy instead, and that damage is higher than the heal. Rank 4 is not in Classic. Classic's cooldown is 30 seconds. Forever's rank 3 heals 221–239 for 275 mana. Classic's rank 3 heals 365–395 for 325 mana, and the heal equals the damage.

## Downranking

Each cell is the average heal, then per mana in parentheses. Bonus healing is +0, +200, +400, and +800. Heals are rounded to the nearest point.

The rank named under a table is the best ratio when the target needs the entire heal. If they are missing less than that, cast the smallest rank that covers it.

### Holy Light

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 35 | 43 (1.23) | 186 (5.31) | 329 (9.40) | 614 (17.54) |
| 2 | 60 | 83 (1.38) | 226 (3.77) | 369 (6.15) | 654 (10.90) |
| 3 | 110 | 155 (1.41) | 298 (2.71) | 441 (4.01) | 726 (6.60) |
| 4 | 190 | 287 (1.51) | 430 (2.26) | 573 (3.02) | 858 (4.52) |
| 5 | 275 | 452 (1.64) | 595 (2.16) | 738 (2.68) | 1023 (3.72) |
| 6 | 365 | 646 (1.77) | 789 (2.16) | 932 (2.55) | 1217 (3.33) |
| 7 | 465 | 899 (1.93) | 1042 (2.24) | 1185 (2.55) | 1470 (3.16) |
| 8 | 580 | 1217 (2.10) | 1360 (2.34) | 1503 (2.59) | 1788 (3.08) |
| 9 | 660 | 1580 (2.39) | 1723 (2.61) | 1866 (2.83) | 2151 (3.26) |

</div>

At +0, rank 9. From +200 up, rank 1. Rank 1 takes the same share of bonus healing as rank 9, and 35 mana still wins once any real bonus is on the gear.

### Flash of Light

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 35 | 46 (1.31) | 132 (3.77) | 217 (6.20) | 389 (11.11) |
| 2 | 50 | 66 (1.32) | 152 (3.04) | 237 (4.74) | 409 (8.18) |
| 3 | 70 | 101 (1.44) | 187 (2.67) | 272 (3.89) | 444 (6.34) |
| 4 | 90 | 151 (1.68) | 237 (2.63) | 322 (3.58) | 494 (5.49) |
| 5 | 115 | 223 (1.94) | 309 (2.69) | 394 (3.43) | 566 (4.92) |
| 6 | 140 | 303 (2.16) | 389 (2.78) | 474 (3.39) | 646 (4.61) |

</div>

At +0, rank 6. From +200 up, rank 1. At +200 and at +400, rank 6 still beats Holy Light rank 9. Rank 1 beats rank 6 when the smaller heal covers the wound.

## Blessing of Light

Trained from 40. Instant. Rank 3, at 60, costs 135 mana and adds up to 400 to Holy Light and up to 115 to Flash of Light. It lasts 1 hour. A player can have one blessing from you at a time. Greater Blessing of Light is the same 400 and 115 on every raid or party member who shares the target's class. It costs 260 mana. Classic's blessing lasts 5 minutes, and the greater blessing lasts 15 minutes.

The tables above do not include this add. It is not bonus healing from gear, so it does not take the 71.4% or 42.9% share. The numbers here are the spell alone, plus the full amount from rank 3, at +0.

<div class="table-wrap" markdown="1">

| Spell | Heal | Mana | Per mana |
| --- | --- | --- | --- |
| Holy Light 1 | 443 | 35 | 12.66 |
| Holy Light 2 | 483 | 60 | 8.05 |
| Holy Light 3 | 555 | 110 | 5.05 |
| Holy Light 4 | 687 | 190 | 3.62 |
| Holy Light 5 | 852 | 275 | 3.10 |
| Holy Light 6 | 1046 | 365 | 2.87 |
| Holy Light 7 | 1299 | 465 | 2.79 |
| Holy Light 8 | 1617 | 580 | 2.79 |
| Holy Light 9 | 1980 | 660 | 3.00 |
| Flash of Light 1 | 161 | 35 | 4.60 |
| Flash of Light 2 | 181 | 50 | 3.62 |
| Flash of Light 3 | 216 | 70 | 3.09 |
| Flash of Light 4 | 266 | 90 | 2.96 |
| Flash of Light 5 | 338 | 115 | 2.94 |
| Flash of Light 6 | 418 | 140 | 2.99 |

</div>

Holy Light rank 1 is 12.66 when 443 health is enough. Rank 9 is 3.00. Rank 5 is 3.10 for 852, so a wound rank 5 does not cover still wants the next rank that does. Flash of Light rank 1 is 4.60 for 161. Rank 6 is 2.99, just under Holy Light rank 9.

At +400, Holy Light rank 1 is 329 from the gear and 729 if the blessing's 400 also lands, 20.83 per mana.

## Several targets

### Light's Vigil

A Holy talent. Rank 1 comes with the talent. Ranks 2 and 3 are trained. A 1.5 second cast, then a 6 second cooldown. The buff lasts 30 seconds. You can have one of yours on a party.

The next Holy Shock on that ally does not start Holy Shock's cooldown. It heals that ally's party for the number in the table, each person, the same way as the other party heals on this site. The client list does not publish a share of bonus healing, so this stays on the tooltip.

<div class="table-wrap" markdown="1">

| Rank | Level | Heal | Mana | Per sec | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 40 | 315–333 | 730 | 216 | 0.44 | 0.89 | 1.33 | 1.78 | 2.22 |
| 2 | 50 | 473–501 | 1000 | 324.67 | 0.49 | 0.97 | 1.46 | 1.95 | 2.44 |
| 3 | 60 | 684–724 | 1340 | 469.33 | 0.53 | 1.05 | 1.58 | 2.10 | 2.63 |

</div>

The mana column is Light's Vigil only. The Holy Shock is another cast. At 60 that is rank 4, 325 mana. Rank 3 on five people is 2.63 per mana of the Vigil, and 2.11 once the shock is counted. Holy Light rank 9 is 2.39. The party heal is instant, and that shock does not start the 10 second cooldown. On an enemy, the same shock deals damage and refunds 75% of Light's Vigil's mana. The heal does not say it refunds mana.

## Lay on Hands

Trained from 10. Instant, then a 20 minute cooldown. The target is healed for your maximum health. Rank 2, at 30, also restores 250 of their mana. Rank 3, at 50, restores 550. The cast drains all of your remaining mana, and it does not stop your mana regeneration. Classic's cooldown is 1 hour.
