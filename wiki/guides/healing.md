---
layout: guide
title: Healing
permalink: /healing/
kicker: Priest
wide: true
---

# Heals

**Priest.** Alliance or Horde. The ranks below are the Forever beta client, build 1.60.1.70009, with no gear and no talents. Classic is named only where a rank changed.

The leveling tree is on the [leveling guide]({{ '/leveling/' | relative_url }}). Holy and Discipline at 60 are [Holy Priest PVE]({{ '/holy/' | relative_url }}) and [Disc Priest PVE]({{ '/disc/' | relative_url }}). A live version of the bonus-healing math is the [downrank calculator](https://foreverchanges.pro/downrank-calculator).

## How to read a heal

Two numbers decide a rank.

**Per mana** is the average heal divided by the mana. Higher spends less mana for the same health.

**Per sec** is the average heal divided by the cast time. Higher fills a health bar faster while the cast is going.

The average is the middle of the tooltip range. A heal listed as 794–894 averages 844, and the ratios use 844.

Cast the smallest rank whose average covers the health that is actually missing. The rest of a bigger heal is mana spent on health the target already had.

Renew is instant. Its per sec in the single-target table is the heal spread over 15 seconds, which is how fast the health arrives. The next spell can start after the 1.5 second global cooldown, and other heals can land on that target while Renew ticks. Rank 10 with no bonus healing is 553 a second on that cooldown, and 55 a second while it ticks.

Penance lists one bolt. Three bolts land, on cast and then every second for 2 seconds. The tables use all three. It then waits 12 seconds.

## Notes

**Bonus healing.** A direct heal adds cast time divided by 3.5 of your bonus healing. Heal and Greater Heal are 3 seconds, so 85.7%. Flash Heal and Binding Heal are 1.5 seconds, so 42.9%. Lesser Heal's cast gets longer as the rank goes up, so rank 1 is 42.9%, rank 2 is 57.1%, and rank 3 is 71.4%. Renew adds 100%, because it lasts 15 seconds. Prayer of Healing adds 28.6% per person. Power Word: Shield adds 10%.

Those shares are stored on every rank in the Forever client. Classic reduces a rank learned before level 20 by 3.75% for each level under 20. Lesser Heal rank 1 is 42.9% here and 12.3% in Classic. A further cut that existed only on the server would not be in the client. A geared character is what would show it.

The heal with bonus healing is the tooltip average plus that share times the bonus. The average in these tables is the heal at the level the rank is learned. The base grows a little as you level, until the next rank. Greater Heal rank 1 is the one measured at 60: the base rises from 844 to 869, and +400 bonus healing heals 1212 for 370 mana, 3.28 per mana.

**Forever's bases are lower** than Classic on most of these heals. Greater Heal rank 5 is 1853–2067. Classic is 1966–2194. Prayer of Healing rank 5 is 631–667, and party members must be within 40 yards. Classic is 1041–1099 within 30 yards.

**Talents move the table without rewriting it.** Spiritual Healing is 3%, then 7%, then 10% more healing. It multiplies the whole heal, so the rank that wins stays the rank that wins. Improved Healing takes 5%, then 10%, then 15% off the mana of Lesser Heal, Heal, Greater Heal, Penance, and Prayer of Mending. At 15%, Heal rank 4 costs 259 mana, and 651 / 259 is 2.51 per mana, ahead of Flash Heal rank 7 at 2.17. Flash Heal, Renew, and Binding Heal are outside that list. Divine Fury cuts the cast of Heal and Greater Heal by 0.1 seconds a point, up to 0.5 seconds at five points. The bonus-healing share stays on the 3 second base cast, so per mana does not move. The heal arrives sooner, so per sec goes up. Mental Agility cuts the mana of Smite, Holy Fire, and instant spells: 3%, then 7%, then 10%. The instant heals in that set are Renew, Holy Nova, Prayer of Mending, and Power Word: Shield.

**The five-second rule.** A cast stops spirit-based mana regeneration for 5 seconds after it finishes. Renew is instant and still starts those 5 seconds. A wand does not.

**Pushback and cancelling.** Damage while you cast pushes a cast back. Greater Heal is the long one. Twilight Focus and Martyrdom are the talents that deal with that, and they are not in these numbers. Mana is spent when the cast finishes. Starting Greater Heal and cancelling it spends nothing.

**Inner Focus** makes the next spell free, and adds 25% critical chance if the spell can crit.

**Undead.** Devouring Plague heals you for the damage it deals. It is a shadow spell on an enemy. Dark Sacrifice spends your health to gain mana. Desperate Prayer is Dwarf. Divine Grace is Human.

## Single target

No gear. No talents. Sorted by the level the rank is learned.

<div class="table-wrap spells" markdown="1">

| Level | Spell | Cast | Heal | Mana | Per mana | Per sec |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Lesser Heal 1 | 1.5 sec | 46–56 | 30 | 1.70 | 34 |
| 4 | Lesser Heal 2 | 2 sec | 71–85 | 45 | 1.73 | 39 |
| 8 | Renew 1 | instant | 45 | 30 | 1.50 | 3 |
| 10 | Lesser Heal 3 | 2.5 sec | 130–152 | 75 | 1.88 | 56.4 |
| 14 | Renew 2 | instant | 75 | 65 | 1.15 | 5 |
| 16 | Heal 1 | 3 sec | 270–312 | 155 | 1.88 | 97 |
| 20 | Flash Heal 1 | 1.5 sec | 174–214 | 125 | 1.55 | 129.33 |
| 20 | Renew 3 | instant | 125 | 105 | 1.19 | 8.33 |
| 22 | Heal 2 | 3 sec | 378–432 | 205 | 1.98 | 135 |
| 26 | Flash Heal 2 | 1.5 sec | 225–273 | 155 | 1.61 | 166 |
| 26 | Renew 4 | instant | 160 | 140 | 1.14 | 10.67 |
| 28 | Heal 3 | 3 sec | 490–556 | 255 | 2.05 | 174.33 |
| 30 | Penance 1 | 2 sec | 184 × 3 | 100 | 5.52 | 276 |
| 32 | Flash Heal 3 | 1.5 sec | 283–341 | 185 | 1.69 | 208 |
| 32 | Renew 5 | instant | 205 | 170 | 1.21 | 13.67 |
| 34 | Heal 4 | 3 sec | 611–691 | 305 | 2.13 | 217 |
| 38 | Flash Heal 4 | 1.5 sec | 349–417 | 215 | 1.78 | 255.33 |
| 38 | Renew 6 | instant | 270 | 205 | 1.32 | 18 |
| 40 | Greater Heal 1 | 3 sec | 794–894 | 370 | 2.28 | 281.33 |
| 40 | Penance 2 | 2 sec | 291 × 3 | 185 | 4.72 | 436.5 |
| 44 | Flash Heal 5 | 1.5 sec | 463–551 | 265 | 1.91 | 338 |
| 44 | Renew 7 | instant | 370 | 250 | 1.48 | 24.67 |
| 46 | Greater Heal 2 | 3 sec | 1036–1162 | 455 | 2.42 | 366.33 |
| 50 | Flash Heal 6 | 1.5 sec | 589–699 | 315 | 2.04 | 429.33 |
| 50 | Penance 3 | 2 sec | 482 × 3 | 270 | 5.36 | 723 |
| 50 | Renew 8 | instant | 510 | 305 | 1.67 | 34 |
| 52 | Greater Heal 3 | 3 sec | 1324–1482 | 545 | 2.57 | 467.67 |
| 56 | Flash Heal 7 | 1.5 sec | 757–893 | 380 | 2.17 | 550 |
| 56 | Renew 9 | instant | 670 | 365 | 1.84 | 44.67 |
| 58 | Greater Heal 4 | 3 sec | 1685–1879 | 655 | 2.72 | 594 |
| 60 | Greater Heal 5 | 3 sec | 1853–2067 | 710 | 2.76 | 653.33 |
| 60 | Penance 4 | 2 sec | 673 × 3 | 355 | 5.69 | 1009.5 |
| 60 | Renew 10 | instant | 830 | 410 | 2.02 | 55.33 |

</div>

Per sec says how fast health arrives during the cast. Flash Heal still lands at 1.5 seconds. Greater Heal lands at 3. If the target will die inside that 3 seconds, the fast cast is the one that arrives.

Penance is a Discipline talent. On the tooltip it is the best per mana in this table, and rank 4 is 5.69. You cast it, then you wait 12 seconds.

## Downranking

Each cell is the average heal, then per mana in parentheses. Bonus healing is +0, +200, +400, and +800. Heals are rounded to the nearest point.

The rank named under a table is the best ratio when the target needs the entire heal. A smaller hole still wants the smallest rank that covers it.

### Lesser Heal

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 30 | 51 (1.70) | 137 (4.57) | 222 (7.40) | 394 (13.13) |
| 2 | 45 | 78 (1.73) | 192 (4.27) | 307 (6.82) | 535 (11.89) |
| 3 | 75 | 141 (1.88) | 284 (3.79) | 427 (5.69) | 712 (9.49) |

</div>

At +0, rank 3. From +200 up, rank 1. Rank 1 takes a smaller share of bonus healing than rank 3, and 30 mana still wins once any real bonus is on the gear.

### Heal

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 155 | 291 (1.88) | 462 (2.98) | 634 (4.09) | 977 (6.30) |
| 2 | 205 | 405 (1.98) | 576 (2.81) | 748 (3.65) | 1091 (5.32) |
| 3 | 255 | 523 (2.05) | 694 (2.72) | 866 (3.40) | 1209 (4.74) |
| 4 | 305 | 651 (2.13) | 822 (2.70) | 994 (3.26) | 1337 (4.38) |

</div>

At +0, rank 4. From +200 up, rank 1.

### Flash Heal

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 125 | 194 (1.55) | 280 (2.24) | 365 (2.92) | 537 (4.30) |
| 2 | 155 | 249 (1.61) | 335 (2.16) | 420 (2.71) | 592 (3.82) |
| 3 | 185 | 312 (1.69) | 398 (2.15) | 483 (2.61) | 655 (3.54) |
| 4 | 215 | 383 (1.78) | 469 (2.18) | 554 (2.58) | 726 (3.38) |
| 5 | 265 | 507 (1.91) | 593 (2.24) | 678 (2.56) | 850 (3.21) |
| 6 | 315 | 644 (2.04) | 730 (2.32) | 815 (2.59) | 987 (3.13) |
| 7 | 380 | 825 (2.17) | 911 (2.40) | 996 (2.62) | 1168 (3.07) |

</div>

At +0 and at +200, rank 7. At +400 and at +800, rank 1.

### Greater Heal

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 370 | 844 (2.28) | 1015 (2.74) | 1187 (3.21) | 1530 (4.14) |
| 2 | 455 | 1099 (2.42) | 1270 (2.79) | 1442 (3.17) | 1785 (3.92) |
| 3 | 545 | 1403 (2.57) | 1574 (2.89) | 1746 (3.20) | 2089 (3.83) |
| 4 | 655 | 1782 (2.72) | 1953 (2.98) | 2125 (3.24) | 2468 (3.77) |
| 5 | 710 | 1960 (2.76) | 2131 (3.00) | 2303 (3.24) | 2646 (3.73) |

</div>

At +0 and at +200, rank 5. At +400, rank 4 and rank 5 tie at 3.24. At +800, rank 1.

That +400 tie is the learn-level base. At level 60 the client gives rank 1 a base of 869, and +400 heals 1212 for 370 mana, 3.28 per mana. On that figure, rank 1 wins. Use the [calculator](https://foreverchanges.pro/downrank-calculator) once you are 60 and the base has grown.

### Renew

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 30 | 45 (1.50) | 245 (8.17) | 445 (14.83) | 845 (28.17) |
| 2 | 65 | 75 (1.15) | 275 (4.23) | 475 (7.31) | 875 (13.46) |
| 3 | 105 | 125 (1.19) | 325 (3.10) | 525 (5.00) | 925 (8.81) |
| 4 | 140 | 160 (1.14) | 360 (2.57) | 560 (4.00) | 960 (6.86) |
| 5 | 170 | 205 (1.21) | 405 (2.38) | 605 (3.56) | 1005 (5.91) |
| 6 | 205 | 270 (1.32) | 470 (2.29) | 670 (3.27) | 1070 (5.22) |
| 7 | 250 | 370 (1.48) | 570 (2.28) | 770 (3.08) | 1170 (4.68) |
| 8 | 305 | 510 (1.67) | 710 (2.33) | 910 (2.98) | 1310 (4.30) |
| 9 | 365 | 670 (1.84) | 870 (2.38) | 1070 (2.93) | 1470 (4.03) |
| 10 | 410 | 830 (2.02) | 1030 (2.51) | 1230 (3.00) | 1630 (3.98) |

</div>

At +0, rank 10. From +200 up, rank 1, and only when the target will use the whole heal. At +400, rank 1 is 445 over 15 seconds. A hole larger than that needs a higher rank. Rank 10 at +400 is 1230, which is 82 a second while it ticks.

### Penance

The client list does not publish Penance's share of bonus healing, so this table stays on the tooltip. Heal is the three bolts.

<div class="table-wrap" markdown="1">

| Rank | Level | Mana | Heal | Per mana | Per sec |
| --- | --- | --- | --- | --- | --- |
| 1 | 30 | 100 | 552 | 5.52 | 276 |
| 2 | 40 | 185 | 873 | 4.72 | 436.5 |
| 3 | 50 | 270 | 1446 | 5.36 | 723 |
| 4 | 60 | 355 | 2019 | 5.69 | 1009.5 |

</div>

Rank 4 is the best ratio. Rank 2 is the worst of the four. The 12 second cooldown means this is a cast you wait on, then you go back to the spells above.

## Several targets

One hurt person and five hurt people are different spells. The columns are per mana when that many people need the full heal. Per sec is for one person. Multiply it by the number of people.

### Prayer of Healing

Party members have to be within 40 yards of the target. Each person takes 28.6% of bonus healing.

<div class="table-wrap" markdown="1">

| Rank | Level | Heal | Mana | Per sec | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 30 | 172–184 | 410 | 59.33 | 0.43 | 0.87 | 1.30 | 1.74 | 2.17 |
| 2 | 40 | 257–273 | 560 | 88.33 | 0.47 | 0.95 | 1.42 | 1.89 | 2.37 |
| 3 | 50 | 390–412 | 770 | 133.67 | 0.52 | 1.04 | 1.56 | 2.08 | 2.60 |
| 4 | 60 | 567–599 | 1030 | 194.33 | 0.57 | 1.13 | 1.70 | 2.26 | 2.83 |
| 5 | 60 | 631–667 | 1070 | 216.33 | 0.61 | 1.21 | 1.82 | 2.43 | 3.03 |

</div>

On the tooltip, rank 5 with three people is 1.82 per mana, under Heal rank 4 at 2.13. Four people is 2.43, which beats Heal rank 4 and Flash Heal rank 7, and stays under Greater Heal rank 5 at 2.76. Five people is 3.03, which beats Greater Heal rank 5.

Per person, with bonus healing:

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 410 | 178 (0.43) | 235 (0.57) | 292 (0.71) | 407 (0.99) |
| 2 | 560 | 265 (0.47) | 322 (0.57) | 379 (0.68) | 494 (0.88) |
| 3 | 770 | 401 (0.52) | 458 (0.59) | 515 (0.67) | 630 (0.82) |
| 4 | 1030 | 583 (0.57) | 640 (0.62) | 697 (0.68) | 812 (0.79) |
| 5 | 1070 | 649 (0.61) | 706 (0.66) | 763 (0.71) | 878 (0.82) |

</div>

At +0 and at +200, rank 5. At +400, rank 1 and rank 5 tie at 0.71 per person. Rank 5 still covers the bigger hole, 763 against 292. At +800, rank 1. Multiply by the number of people who need all of it. More people raise the ratio. They do not change which rank wins.

### Holy Nova

A Holy talent. The heal is the party, inside 10 yards. The damage on the same cast is a separate number, and it is not in this table. There is no cooldown. The client list does not publish the heal's share of bonus healing, so the ratios are the tooltip.

<div class="table-wrap" markdown="1">

| Rank | Level | Heal | Mana | Per sec | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 20 | 47–55 | 185 | 34 | 0.28 | 0.55 | 0.83 | 1.10 | 1.38 |
| 2 | 28 | 77–87 | 290 | 54.67 | 0.28 | 0.57 | 0.85 | 1.13 | 1.41 |
| 3 | 36 | 108–124 | 400 | 77.33 | 0.29 | 0.58 | 0.87 | 1.16 | 1.45 |
| 4 | 44 | 147–171 | 520 | 106 | 0.31 | 0.61 | 0.92 | 1.22 | 1.53 |
| 5 | 52 | 221–255 | 635 | 158.67 | 0.37 | 0.75 | 1.12 | 1.50 | 1.87 |
| 6 | 60 | 288–334 | 750 | 207.33 | 0.41 | 0.83 | 1.24 | 1.66 | 2.07 |

</div>

Rank 6 on five people is 2.07 per mana. Greater Heal rank 5 is 2.76 on one person. Holy Nova stays behind a single-target heal on mana. It does no threat, and it also damages enemies inside 10 yards.

### Binding Heal

A Holy talent. The tooltip heal lands on the target and again on you. Low threat. One person takes 42.9% of bonus healing, the same share as Flash Heal.

<div class="table-wrap" markdown="1">

| Rank | Level | Heal each | Mana | One hurt | Both hurt | Per sec, one | Per sec, both |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 25 | 223–271 | 155 | 1.59 | 3.19 | 164.67 | 329.33 |
| 2 | 32 | 283–341 | 185 | 1.69 | 3.37 | 208 | 416 |
| 3 | 38 | 349–417 | 215 | 1.78 | 3.56 | 255.33 | 510.67 |
| 4 | 44 | 463–551 | 265 | 1.91 | 3.83 | 338 | 676 |
| 5 | 50 | 589–699 | 315 | 2.04 | 4.09 | 429.33 | 858.67 |
| 6 | 56 | 757–893 | 380 | 2.17 | 4.34 | 550 | 1100 |

</div>

From rank 2 up, one person is the same heal and the same mana as a Flash Heal rank: Binding Heal 2 is Flash Heal 3, and Binding Heal 6 is Flash Heal 7. When both of you need the full heal, the heal doubles and so does per mana. Rank 6 on both is 4.34, ahead of Greater Heal rank 5 at 2.76.

Per person, with bonus healing:

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 155 | 247 (1.59) | 333 (2.15) | 418 (2.70) | 590 (3.81) |
| 2 | 185 | 312 (1.69) | 398 (2.15) | 483 (2.61) | 655 (3.54) |
| 3 | 215 | 383 (1.78) | 469 (2.18) | 554 (2.58) | 726 (3.38) |
| 4 | 265 | 507 (1.91) | 593 (2.24) | 678 (2.56) | 850 (3.21) |
| 5 | 315 | 644 (2.04) | 730 (2.32) | 815 (2.59) | 987 (3.13) |
| 6 | 380 | 825 (2.17) | 911 (2.40) | 996 (2.62) | 1168 (3.07) |

</div>

At +0 and at +200, rank 6. At +400 and at +800, rank 1. Double the heal, and double per mana, when you need the cast too. At +400, rank 1 on both is 836 health for 155 mana, 5.39 per mana.

## Shields and clicks

These do not fill missing health the way the casts above do. They stay out of the single-target sort.

### Power Word: Shield

The number is absorb per mana. Rank 10 absorbs 928. Classic rank 10 absorbs 942. The shield holds 30 seconds. Weakened Soul then blocks another shield for 15 seconds. Every rank has a 4 second cooldown. The shield takes 10% of bonus healing.

<div class="table-wrap" markdown="1">

| Rank | Level | Absorb | Mana | Per mana |
| --- | --- | --- | --- | --- |
| 1 | 6 | 44 | 45 | 0.98 |
| 2 | 12 | 86 | 80 | 1.08 |
| 3 | 18 | 154 | 130 | 1.18 |
| 4 | 24 | 226 | 175 | 1.29 |
| 5 | 30 | 291 | 210 | 1.39 |
| 6 | 36 | 368 | 250 | 1.47 |
| 7 | 42 | 470 | 300 | 1.57 |
| 8 | 48 | 591 | 355 | 1.66 |
| 9 | 54 | 749 | 425 | 1.76 |
| 10 | 60 | 928 | 500 | 1.86 |

</div>

Rank 10 is 1.86, under a heal. Put it up before the hit. Spellcasting is not pushed back while the shield holds.

### Prayer of Mending

A Holy talent. It heals the next time the target takes damage, or the next time they receive a non-periodic heal, then jumps. Up to 5 jumps, 20 yards, 30 seconds after each jump, and only one of yours is out at a time. A direct heal can spend the charge. The cooldown is 10 seconds. The client list does not publish its share of bonus healing.

<div class="table-wrap" markdown="1">

| Rank | Level | Mana | One jump | Per mana | Five jumps | Per mana |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 40 | 210 | 172 | 0.82 | 860 | 4.10 |
| 2 | 50 | 305 | 298 | 0.98 | 1490 | 4.89 |
| 3 | 60 | 390 | 413 | 1.06 | 2065 | 5.29 |

</div>

One jump is a poor heal. Five jumps that all land beat Greater Heal rank 5 on mana. Count the jumps you expect, and expect a heal you cast yourself to eat a charge.

### Lightwell

Trained from 40. A 1.5 second cast, then a 10 minute cooldown. The well lasts 3 minutes or 5 charges. Someone has to click it. The click restores health over 10 seconds, and a hit on that person cancels the click. The client list does not publish its share of bonus healing.

<div class="table-wrap" markdown="1">

| Rank | Level | Mana | One click | Per mana | Five clicks | Per mana |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 40 | 225 | 800 | 3.56 | 4000 | 17.78 |
| 2 | 50 | 295 | 1165 | 3.95 | 5825 | 19.75 |
| 3 | 60 | 365 | 1600 | 4.38 | 8000 | 21.92 |

</div>

Five completed clicks is the best ratio on this page. It depends on five people clicking, and on those heals finishing. One cancelled click is the 3.56 column, and then the well is on its 10 minute cooldown if the charges are gone.
