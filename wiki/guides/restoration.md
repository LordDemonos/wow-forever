---
layout: guide
title: Restoration Druid Healing Efficiency
permalink: /healing/druid/
kicker: Druid
wide: true
---

# Restoration Druid Healing Efficiency

**Druid.** Alliance or Horde. The ranks below are the Forever beta client, build 1.60.1.70009, with no gear and no talents. Classic is named only where a rank changed.

Priest ranks are [Priest Healing Efficiency]({{ '/healing/priest/' | relative_url }}). Holy Paladin ranks are [Holy Paladin Healing Efficiency]({{ '/healing/paladin/' | relative_url }}). A live version of the bonus-healing math is the [downrank calculator](https://foreverchanges.pro/downrank-calculator).

## What to cast

At 60. No gear, no talents. Per mana is the average heal divided by the mana. These numbers are for a target who needs the whole heal. If they are missing less than that, cast the smallest rank that covers it.

**One person, and the heal has to land on the cast.** Healing Touch rank 11, 2.78 per mana, in 3.5 seconds. Regrowth rank 9's direct heal is 1.94. Rejuvenation rank 11 is 2.16, and that health arrives over 12 seconds.

**One person who will take the heal over time.** Regrowth rank 9 is 3.84 if the direct heal and the 994 over 21 seconds both land. That is ahead of Healing Touch rank 11. Rejuvenation rank 11 stays at 2.16.

**The target will die inside 3.5 seconds.** Regrowth rank 9 lands in 2 seconds. Rejuvenation is instant. Nature's Swiftness makes the next Nature spell instant, then waits 3 minutes. Swiftmend is instant when a Rejuvenation or Regrowth is already on the target, then waits 15 seconds.

**Two, three, or four people.** Healing Touch rank 11 on the person who needs it. Wild Growth rank 3 is 1.29, 1.94, and 2.59 at two, three, and four.

**Five people.** Wild Growth rank 3, 3.23. Healing Touch on one person is 2.78.

**Tranquility rank 4** on two people is 3.08, and on five people is 7.70. It is a 10 second channel, then a 5 minute cooldown. Party members have to be within 20 yards.

**+400 bonus healing.** The cheap rank is better when the missing health is small enough for the whole heal to land. Rejuvenation rank 1 is 14.08, for 352 over 12 seconds. Healing Touch rank 1 is 8.60, for 215. Regrowth rank 1 is 7.01 when both parts land, 201 on the cast and 290 over 21 seconds. Healing Touch rank 11 is 3.25, for 2732. Regrowth rank 9 is 4.43 when both parts land, and 2.16 on the direct heal alone, so Healing Touch is ahead when the periodic heal will not land. Wild Growth rank 3 on five people is 3.67. On four people it is 2.94, and Healing Touch rank 11 is ahead of that. Tranquility rank 4 on five people is 8.43.

## How to read a heal

Two numbers decide a rank.

**Per mana** is the average heal divided by the mana. Higher spends less mana for the same health.

**Per sec** is the average heal divided by the cast time. Higher fills a health bar faster while the cast is going.

The average is the middle of the tooltip range. A heal listed as 2139–2525 averages 2332, and the ratios use 2332.

Cast the smallest rank whose average covers the health that is actually missing. The rest of a bigger heal is mana spent on health the target already had.

Rejuvenation is instant. Its per sec in the single-target table is the heal spread over 12 seconds, which is how fast the health arrives. The next spell can start after the 1.5 second global cooldown, and other heals can land on that target while Rejuvenation ticks. Rank 11 with no bonus healing is 517.33 a second on that cooldown, and 64.67 a second while it ticks. Four ticks, one every 3 seconds.

Regrowth is two heals for one mana cost. The direct heal lands when the 2 second cast finishes. The other heal ticks seven times over 21 seconds. Per mana on both counts only when the target will take the whole of each. If the direct heal would land on a full bar, the periodic part is what you paid for, and the direct part is overheal.

Heals do not cast while shapeshifted. Moonkin Form cannot cast healing spells.

## Notes

**Bonus healing.** A direct heal adds cast time divided by 3.5 of your bonus healing. Healing Touch rank 1 is 1.5 seconds, so 42.9%. Rank 2 is 2 seconds, 57.1%. Rank 3 is 2.5 seconds, 71.4%. Rank 4 is 3 seconds, 85.7%. Rank 5 and up are 3.5 seconds, so 100%. Rejuvenation adds 80%, because it lasts 12 seconds: 20% on each of four ticks. Regrowth's direct heal adds 28.6%. Its heal over time adds 7.1% on each of seven ticks, 49.7% together. The whole Regrowth is 78.3%. Wild Growth adds 23.1% per person. Tranquility adds 33.5% per person, on the full channel.

Those shares are stored on every rank in the Forever client. Classic reduces a rank learned before level 20 by 3.75% for each level under 20. Healing Touch rank 1 is 42.9% here and 12.3% in Classic. Rejuvenation rank 1 is 80% here and 32% in Classic. If the server applies another cut that is not in the client, you would only see it on a geared character.

The heal with bonus healing is the tooltip average plus that share times the bonus. The average in these tables is the heal at the level the rank is learned. The base grows a little as you level, until the next rank. Use the [calculator](https://foreverchanges.pro/downrank-calculator) once you are 60 and the base has grown.

**Forever's bases are lower** than Classic on most of these heals, and a few costs moved the other way. Healing Touch rank 11 is 2139–2525 for 840 mana. Classic is 2267–2677 for 800. Rejuvenation rank 11 is 776 over 12 seconds. Classic is 888. Regrowth rank 9 is 965–1077 and another 994 over 21 seconds, for 525 mana. Classic is 1003–1119 and 1064, for 880 mana. Tranquility rank 4 is 285 every 2 seconds, party members within 20 yards. Classic is 294 every 2 seconds.

**Talents.** Gift of Nature is 2%, then 4%, then 6%, then 8%, then 10% more healing. It multiplies the whole heal, so the best rank stays the best rank. Tranquil Spirit takes 2% off the mana of Healing Touch and Tranquility at each point, up to 10%. At 10%, Healing Touch rank 11 costs 756 mana, and 2332 / 756 is 3.08 per mana. Every rank of those two spells loses the same share, so the best rank stays the best rank. Naturalist cuts the cast of Healing Touch by 0.1 seconds a point, up to 0.5 seconds at five points, and adds 1% damage a point. The bonus-healing share stays on the unreduced cast, so per mana does not move. The heal arrives sooner, so per sec goes up. At five points, rank 11 is a 3 second cast, 777.33 per sec. Improved Rejuvenation is 5%, then 10%, then 15% more Rejuvenation. At 15%, rank 11 is 892 for 360 mana, 2.48 per mana, still under Healing Touch rank 11 at 2.78. Improved Regrowth adds 10% critical chance a point, up to 50%. Crits are not in these numbers. Gift of the Earthmother cuts the global cooldown of Rejuvenation, Swiftmend, and Wild Growth by 0.5 seconds. The heal and the mana stay put. The tables use the 1.5 second cooldown.

**The five-second rule.** A cast stops spirit-based mana regeneration for 5 seconds after it finishes. Rejuvenation is instant and still starts those 5 seconds. Reflection lets 17%, then 33%, then 50% of that regeneration continue while you cast. Living Spirit adds 5%, then 10%, then 15% Spirit. Neither one changes which rank wins.

**Pushback and cancelling.** Damage while you cast pushes a cast back. Healing Touch rank 5 and up are the long ones. Nature's Focus is the talent that deals with that, 14% a point up to 70%, and it is not in these numbers. Mana is spent when the cast finishes. Starting Healing Touch and cancelling it spends nothing.

**Omen of Clarity** is trained. Spells and attacks can grant Clearcasting, and the next spell is free. Clearcasting is not consumed by Wrath, or by a spell that already costs nothing.

## Single target

No gear. No talents. Sorted by the level the rank is learned. Regrowth is the next section, because it is a direct heal and a heal over time for one mana cost.

<div class="table-wrap spells" markdown="1">

| Level | Spell | Cast | Heal | Mana | Per mana | Per sec |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Healing Touch 1 | 1.5 sec | 37–51 | 25 | 1.76 | 29.33 |
| 4 | Rejuvenation 1 | instant | 32 | 25 | 1.28 | 2.67 |
| 8 | Healing Touch 2 | 2 sec | 88–112 | 55 | 1.82 | 50 |
| 10 | Rejuvenation 2 | instant | 48 | 40 | 1.20 | 4 |
| 14 | Healing Touch 3 | 2.5 sec | 179–223 | 110 | 1.83 | 80.4 |
| 16 | Rejuvenation 3 | instant | 92 | 75 | 1.23 | 7.67 |
| 20 | Healing Touch 4 | 3 sec | 325–399 | 190 | 1.91 | 120.67 |
| 22 | Rejuvenation 4 | instant | 128 | 105 | 1.22 | 10.67 |
| 26 | Healing Touch 5 | 3.5 sec | 493–599 | 280 | 1.95 | 156 |
| 28 | Rejuvenation 5 | instant | 168 | 135 | 1.24 | 14 |
| 32 | Healing Touch 6 | 3.5 sec | 641–773 | 350 | 2.02 | 202 |
| 34 | Rejuvenation 6 | instant | 204 | 160 | 1.28 | 17 |
| 38 | Healing Touch 7 | 3.5 sec | 818–978 | 425 | 2.11 | 256.57 |
| 40 | Rejuvenation 7 | instant | 284 | 195 | 1.46 | 23.67 |
| 44 | Healing Touch 8 | 3.5 sec | 1071–1275 | 520 | 2.26 | 335.14 |
| 46 | Rejuvenation 8 | instant | 376 | 235 | 1.60 | 31.33 |
| 50 | Healing Touch 9 | 3.5 sec | 1388–1644 | 630 | 2.41 | 433.14 |
| 52 | Rejuvenation 9 | instant | 496 | 280 | 1.77 | 41.33 |
| 56 | Healing Touch 10 | 3.5 sec | 1762–2078 | 755 | 2.54 | 548.57 |
| 58 | Rejuvenation 10 | instant | 644 | 335 | 1.92 | 53.67 |
| 60 | Healing Touch 11 | 3.5 sec | 2139–2525 | 840 | 2.78 | 666.29 |
| 60 | Rejuvenation 11 | instant | 776 | 360 | 2.16 | 64.67 |

</div>

Per sec is how fast the health arrives during the cast. Rejuvenation's per sec is the 12 second heal. Healing Touch rank 11 lands at 3.5 seconds. If the target will die inside those 3.5 seconds, use the faster cast.

## Regrowth

A 2 second cast. The direct heal lands at the end of it. The other number ticks seven times over 21 seconds. **Both** is per mana when the target needs the direct heal and will take the whole heal over time. **Direct only** is per mana of the heal that lands on the cast, which is the ratio when the ticks will overheal. Per sec is the direct heal divided by 2 seconds.

<div class="table-wrap spells" markdown="1">

| Level | Rank | Direct | Over time | Mana | Both | Direct only | Per sec |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12 | 1 | 80–94 | 91 | 70 | 2.54 | 1.24 | 43.5 |
| 18 | 2 | 153–175 | 154 | 125 | 2.54 | 1.31 | 82 |
| 24 | 3 | 219–251 | 224 | 170 | 2.70 | 1.38 | 117.5 |
| 30 | 4 | 292–330 | 294 | 210 | 2.88 | 1.48 | 155.5 |
| 36 | 5 | 370–418 | 364 | 250 | 3.03 | 1.58 | 197 |
| 42 | 6 | 474–534 | 476 | 305 | 3.21 | 1.65 | 252 |
| 48 | 7 | 608–682 | 616 | 370 | 3.41 | 1.74 | 322.5 |
| 54 | 8 | 771–863 | 791 | 445 | 3.61 | 1.84 | 408.5 |
| 60 | 9 | 965–1077 | 994 | 525 | 3.84 | 1.94 | 510.5 |

</div>

Rank 9 is the best ratio on the tooltip, 3.84 if both parts land, and 1.94 if only the direct heal does. Healing Touch rank 11 is 2.78. Regrowth wins on mana when the target will take the ticks. Healing Touch wins when the health has to be there at the end of the cast.

## Downranking

Each cell is the average heal, then per mana in parentheses. Bonus healing is +0, +200, +400, and +800. Heals are rounded to the nearest point.

The rank named under a table is the best ratio when the target needs the entire heal. If they are missing less than that, cast the smallest rank that covers it.

### Healing Touch

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 25 | 44 (1.76) | 130 (5.20) | 215 (8.60) | 387 (15.48) |
| 2 | 55 | 100 (1.82) | 214 (3.89) | 329 (5.98) | 557 (10.13) |
| 3 | 110 | 201 (1.83) | 344 (3.13) | 487 (4.43) | 772 (7.02) |
| 4 | 190 | 362 (1.91) | 533 (2.81) | 705 (3.71) | 1048 (5.52) |
| 5 | 280 | 546 (1.95) | 746 (2.66) | 946 (3.38) | 1346 (4.81) |
| 6 | 350 | 707 (2.02) | 907 (2.59) | 1107 (3.16) | 1507 (4.31) |
| 7 | 425 | 898 (2.11) | 1098 (2.58) | 1298 (3.05) | 1698 (4.00) |
| 8 | 520 | 1173 (2.26) | 1373 (2.64) | 1573 (3.03) | 1973 (3.79) |
| 9 | 630 | 1516 (2.41) | 1716 (2.72) | 1916 (3.04) | 2316 (3.68) |
| 10 | 755 | 1920 (2.54) | 2120 (2.81) | 2320 (3.07) | 2720 (3.60) |
| 11 | 840 | 2332 (2.78) | 2532 (3.01) | 2732 (3.25) | 3132 (3.73) |

</div>

At +0, rank 11. From +200 up, rank 1. Rank 1 takes a smaller share of bonus healing than rank 11, and 25 mana still wins once any real bonus is on the gear.

### Rejuvenation

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 25 | 32 (1.28) | 192 (7.68) | 352 (14.08) | 672 (26.88) |
| 2 | 40 | 48 (1.20) | 208 (5.20) | 368 (9.20) | 688 (17.20) |
| 3 | 75 | 92 (1.23) | 252 (3.36) | 412 (5.49) | 732 (9.76) |
| 4 | 105 | 128 (1.22) | 288 (2.74) | 448 (4.27) | 768 (7.31) |
| 5 | 135 | 168 (1.24) | 328 (2.43) | 488 (3.61) | 808 (5.99) |
| 6 | 160 | 204 (1.28) | 364 (2.28) | 524 (3.28) | 844 (5.28) |
| 7 | 195 | 284 (1.46) | 444 (2.28) | 604 (3.10) | 924 (4.74) |
| 8 | 235 | 376 (1.60) | 536 (2.28) | 696 (2.96) | 1016 (4.32) |
| 9 | 280 | 496 (1.77) | 656 (2.34) | 816 (2.91) | 1136 (4.06) |
| 10 | 335 | 644 (1.92) | 804 (2.40) | 964 (2.88) | 1284 (3.83) |
| 11 | 360 | 776 (2.16) | 936 (2.60) | 1096 (3.04) | 1416 (3.93) |

</div>

At +0, rank 11. From +200 up, rank 1, and only when the target will use the whole heal. At +400, rank 1 is 352 over 12 seconds. Missing more than that needs a higher rank. Rank 11 at +400 is 1096, which is 91 a second while it ticks.

### Regrowth, direct

The heal that lands when the cast finishes. The periodic heal is the next table. The mana pays for both.

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 70 | 87 (1.24) | 144 (2.06) | 201 (2.87) | 316 (4.51) |
| 2 | 125 | 164 (1.31) | 221 (1.77) | 278 (2.22) | 393 (3.14) |
| 3 | 170 | 235 (1.38) | 292 (1.72) | 349 (2.05) | 464 (2.73) |
| 4 | 210 | 311 (1.48) | 368 (1.75) | 425 (2.02) | 540 (2.57) |
| 5 | 250 | 394 (1.58) | 451 (1.80) | 508 (2.03) | 623 (2.49) |
| 6 | 305 | 504 (1.65) | 561 (1.84) | 618 (2.03) | 733 (2.40) |
| 7 | 370 | 645 (1.74) | 702 (1.90) | 759 (2.05) | 874 (2.36) |
| 8 | 445 | 817 (1.84) | 874 (1.96) | 931 (2.09) | 1046 (2.35) |
| 9 | 525 | 1021 (1.94) | 1078 (2.05) | 1135 (2.16) | 1250 (2.38) |

</div>

At +0, rank 9. From +200 up, rank 1. At +200, rank 9 is 2.05 and rank 1 is 2.06.

### Regrowth, over time

The 21 second heal. Per mana here still divides by the full mana cost, because the direct heal is on the same cast.

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 70 | 91 (1.30) | 190 (2.71) | 290 (4.14) | 489 (6.99) |
| 2 | 125 | 154 (1.23) | 253 (2.02) | 353 (2.82) | 552 (4.42) |
| 3 | 170 | 224 (1.32) | 323 (1.90) | 423 (2.49) | 622 (3.66) |
| 4 | 210 | 294 (1.40) | 393 (1.87) | 493 (2.35) | 692 (3.30) |
| 5 | 250 | 364 (1.46) | 463 (1.85) | 563 (2.25) | 762 (3.05) |
| 6 | 305 | 476 (1.56) | 575 (1.89) | 675 (2.21) | 874 (2.87) |
| 7 | 370 | 616 (1.66) | 715 (1.93) | 815 (2.20) | 1014 (2.74) |
| 8 | 445 | 791 (1.78) | 890 (2.00) | 990 (2.22) | 1189 (2.67) |
| 9 | 525 | 994 (1.89) | 1093 (2.08) | 1193 (2.27) | 1392 (2.65) |

</div>

At +0, rank 9. From +200 up, rank 1.

When the target needs the direct heal and will take the ticks, add the two heals. The mana is paid once. At +0 that total is best on rank 9, 2015 for 525 mana, 3.84. From +200 up, rank 1. At +400, rank 1 is 491 and rank 9 is 2328.

## Several targets

One hurt person and five hurt people are different spells. The columns are per mana when that many people need the full heal. Per sec is for one person. Multiply it by the number of people.

### Wild Growth

A Restoration talent. Rank 1 comes with the talent. Ranks 2 and 3 are trained. It heals the target and that target's party. Other party members have to be within 43.5 yards of the target. A player in a different party is not on this cast, even when they are standing next to the target. The heal comes out quickly at first and slows down across 7 seconds. The per sec column is the average over those 7 seconds. There is a 6 second cooldown. Each person takes 23.1% of bonus healing.

<div class="table-wrap" markdown="1">

| Rank | Level | Heal | Mana | Per sec | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 40 | 280 | 550 | 40 | 0.51 | 1.02 | 1.53 | 2.04 | 2.55 |
| 2 | 50 | 420 | 755 | 60 | 0.56 | 1.11 | 1.67 | 2.23 | 2.78 |
| 3 | 60 | 679 | 1050 | 97 | 0.65 | 1.29 | 1.94 | 2.59 | 3.23 |

</div>

On the tooltip, rank 3 with four people is 2.59 per mana, under Healing Touch rank 11 at 2.78. Five people is 3.23, which beats Healing Touch rank 11. One person is 0.65. Wild Growth is not a Swiftmend heal.

Per person, with bonus healing:

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 550 | 280 (0.51) | 326 (0.59) | 372 (0.68) | 465 (0.85) |
| 2 | 755 | 420 (0.56) | 466 (0.62) | 512 (0.68) | 605 (0.80) |
| 3 | 1050 | 679 (0.65) | 725 (0.69) | 771 (0.73) | 864 (0.82) |

</div>

At +0, at +200, and at +400, rank 3. At +800, rank 1. Multiply by the number of people who need all of it. More people raise the ratio. The best rank stays the same.

### Tranquility

A 10 second channel. Five heals, one every 2 seconds. Party members within 20 yards. Then a 5 minute cooldown. Each person takes 33.5% of bonus healing on the full channel. Improved Tranquility cuts the threat, 50% then 100%, and the cooldown, 30% then 60%. At two points the cooldown is 2 minutes. That talent is not in this table.

<div class="table-wrap" markdown="1">

| Rank | Level | Each tick | Mana | Per sec | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 30 | 87 | 375 | 43.5 | 1.16 | 2.32 | 3.48 | 4.64 | 5.80 |
| 2 | 40 | 129 | 505 | 64.5 | 1.28 | 2.55 | 3.83 | 5.11 | 6.39 |
| 3 | 50 | 196 | 695 | 98 | 1.41 | 2.82 | 4.23 | 5.64 | 7.05 |
| 4 | 60 | 285 | 925 | 142.5 | 1.54 | 3.08 | 4.62 | 6.16 | 7.70 |

</div>

Rank 4 on one person is 1.54, under Healing Touch rank 11. On two people it is 3.08, which beats that cast. On five people it is 7.70. You stand still for the channel, and then the spell is on its 5 minute cooldown.

Per person, with bonus healing. The heal is all five ticks.

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 375 | 435 (1.16) | 502 (1.34) | 569 (1.52) | 703 (1.87) |
| 2 | 505 | 645 (1.28) | 712 (1.41) | 779 (1.54) | 913 (1.81) |
| 3 | 695 | 980 (1.41) | 1047 (1.51) | 1114 (1.60) | 1248 (1.80) |
| 4 | 925 | 1425 (1.54) | 1492 (1.61) | 1559 (1.69) | 1693 (1.83) |

</div>

At +0, at +200, and at +400, rank 4. At +800, rank 1. Multiply by the number of people who need all of it. The best rank stays the same.

## Swiftmend and the long cooldowns

These do not fill missing health the way a Healing Touch does. They stay out of the single-target sort.

### Swiftmend

A Restoration talent. Instant, 40 yards, 15 second cooldown, 20% of base mana. The target needs a Rejuvenation or a Regrowth. The heal equals the full duration of that periodic effect. Rejuvenation rank 11 is 776. Regrowth rank 9's periodic part is 994. If both are on the target, the tooltip says the spell uses one of them, and it does not say which.

The tooltip does not say it removes the heal over time. Classic consumes the effect, and it counts 12 seconds of Rejuvenation or 18 seconds of Regrowth. Rejuvenation is 12 seconds either way. Regrowth's periodic heal is 21 seconds here, so Forever is the whole of it.

The 20% of base mana is on top of the Rejuvenation or Regrowth you already paid for. The ratios above do not include it.

### Nature's Swiftness

A Restoration talent. Instant, no mana, 3 minute cooldown. The next Nature spell is instant. It does not make that spell free. Healing Touch rank 11 still costs 840 mana. Use it when 3.5 seconds is too slow, or when you have to heal while moving and Swiftmend has nothing to spend.

### Innervate

Trained from 40. Instant, 5% of base mana, 6 minute cooldown. The target's mana regeneration is 400% for 20 seconds, and all of it continues while they cast.
