---
layout: guide
title: Restoration Shaman Healing Efficiency
permalink: /healing/shaman/
kicker: Shaman
wide: true
---

# Restoration Shaman Healing Efficiency

**Shaman.** Alliance or Horde. The ranks below are the Forever beta client, build 1.60.1.70009, with no gear and no talents. Classic is named only where a rank changed.

Priest ranks are [Priest Healing Efficiency]({{ '/healing/priest/' | relative_url }}). Holy Paladin ranks are [Holy Paladin Healing Efficiency]({{ '/healing/paladin/' | relative_url }}). Restoration Druid ranks are [Restoration Druid Healing Efficiency]({{ '/healing/druid/' | relative_url }}). A live version of the bonus-healing math is the [downrank calculator](https://foreverchanges.pro/downrank-calculator).

## What to cast

At 60. No gear, no talents. Per mana is the average heal divided by the mana. These numbers are for a target who needs the whole heal. If they are missing less than that, cast the smallest rank that covers it.

**One person, and 3 seconds is enough.** Healing Wave rank 10, 2.60 per mana. Lesser Healing Wave rank 6 is 2.16, and it lands in 1.5 seconds.

**One person who will take the heal over time.** Riptide rank 3 is 4.28 if the direct heal and the 805 over 15 seconds both land. That is ahead of Healing Wave rank 10. The direct heal alone is 2.18. Riptide then waits 6 seconds. It is a Restoration talent.

**The target will die inside those 3 seconds.** Lesser Healing Wave rank 6. Riptide rank 3 is instant. Nature's Swiftness makes the next Nature spell instant, then waits 3 minutes.

**Two people.** Healing Wave rank 10 on the person who needs it. Chain Heal rank 3 on two people is 1.81.

**Three people.** Chain Heal rank 3 is 2.12 if all three heals land, still under Healing Wave rank 10 at 2.60. Each jump is half of the previous heal.

**+200 bonus healing.** Healing Wave rank 1 is 5.00, for 125, and it wins when that is enough. Healing Wave rank 10 is 2.88. Lesser Healing Wave rank 6 is still the best Lesser Healing Wave, at 2.38. Chain Heal on three people is 2.74. Riptide rank 3 is 4.65 when both parts land.

**+400 bonus healing.** Healing Wave rank 1 is 8.40, for 210. Lesser Healing Wave rank 1 is 3.09, for 324, ahead of Lesser Healing Wave rank 6. Healing Wave rank 10 is 3.16, for 1958. Chain Heal rank 3 on three people is 3.35, ahead of Healing Wave rank 10. On two people, Chain Heal rank 1 is 3.10, and Healing Wave rank 10 is still ahead. Chain Heal rank 1 on three people is 3.62, for 537 on the first target, when that covers the wound.

## How to read a heal

Two numbers decide a rank.

**Per mana** is the average heal divided by the mana. Higher spends less mana for the same health.

**Per sec** is the average heal divided by the cast time. Higher fills a health bar faster while the cast is going.

The average is the middle of the tooltip range. A heal listed as 1508–1722 averages 1615, and the ratios use 1615.

Cast the smallest rank whose average covers the health that is actually missing. The rest of a bigger heal is mana spent on health the target already had.

Riptide is instant, and it is two heals for one mana cost. The direct heal's per sec is the heal divided by the 1.5 second global cooldown. The other heal is spread over 15 seconds. Per mana on both counts only when the target will take the whole of each. It then waits 6 seconds.

Chain Heal lands on the first target when the 2.5 second cast finishes. The next target gets half of that heal, and the one after gets half again. Three targets is the whole spell. Per sec in that table is the first target only.

## Notes

**Bonus healing.** A direct heal adds cast time divided by 3.5 of your bonus healing. Healing Wave rank 1 is 1.5 seconds, so 42.9%. Rank 2 is 2 seconds, 57.1%. Rank 3 is 2.5 seconds, 71.4%. Rank 4 and up are 3 seconds, so 85.7%. Lesser Healing Wave is 1.5 seconds on every rank, so 42.9%. Chain Heal is 2.5 seconds, so 71.4% on the first target. Each jump is half of the previous heal, so the second target takes half of that share and the third takes a quarter.

Riptide's direct heal adds 21.4%. The heal over time adds 10% on each of five ticks, 50% together. The whole Riptide is 71.4%.

Those shares are stored on every rank in the Forever client. Classic reduces a rank learned before level 20 by 3.75% for each level under 20. Healing Wave rank 1 is 42.9% here and 12.3% in Classic. Rank 4 is 85.7% here and 79.3% in Classic. Lesser Healing Wave and Chain Heal are learned at 20 or later, so both clients use the same share. The client list that publishes those shares does not publish one for Healing Stream Totem, so that table stays on the tooltip. If the server applies another cut that is not in the client, you would only see it on a geared character.

The heal with bonus healing is the tooltip average plus that share times the bonus. The average in these tables is the heal at the level the rank is learned. The base grows a little as you level, until the next rank. Use the [calculator](https://foreverchanges.pro/downrank-calculator) once you are 60 and the base has grown.

**Forever's bases are lower** than Classic from Healing Wave rank 3 up, on every rank of Lesser Healing Wave, and on every rank of Chain Heal. Healing Wave rank 10 is 1508–1722. Classic is 1620–1850. The mana stays 620. Lesser Healing Wave rank 6 is 775–865. Classic is 832–928. The mana stays 380. Chain Heal rank 3 is 458–522 on the first target. Classic is 551–629. The mana stays 405. Healing Wave ranks 1 and 2 match Classic's tooltip. Their larger share of bonus healing is the change.

**Talents.** Healing Way is 8%, then 17%, then 25% more Healing Wave. It multiplies the whole heal, so the best rank stays the best rank. At 25%, Healing Wave rank 10 is 2019 for 620 mana, 3.26 per mana. Classic's Healing Way is a stacking chance, not this flat add. Purification is 2% more healing a point, up to 10%. At 10%, Healing Wave rank 10 is 1777 for 620 mana, 2.87 per mana. Improved Healing Wave cuts the cast by 0.1 seconds a point, up to 0.5 seconds at five points. The bonus-healing share stays on the unreduced cast, so per mana does not move. At five points, rank 10 is a 2.5 second cast, 646 per sec. Tidal Focus takes 1% off the mana of your healing spells at each point, up to 5%, and adds 1% chance to hit a point. At 5%, Healing Wave rank 10 costs 589 mana, and 1615 / 589 is 2.74 per mana. Every healing spell loses the same share, so the best rank stays the best rank. Classic's Tidal Focus does not add hit. Crits are not in these numbers.

**The five-second rule.** A cast stops spirit-based mana regeneration for 5 seconds after it finishes. Riptide is instant and still starts those 5 seconds. Mindfulness lets 17%, then 33%, then 50% of that regeneration continue while you cast. It does not change which rank wins.

**Pushback and cancelling.** Damage while you cast pushes a cast back. Healing Wave rank 4 and up are the long ones. Healing Focus is three ranks, a 23% chance, then 47%, then 70%, to avoid that. Classic is five ranks, 14% each. It is not in these numbers. Mana is spent when the cast finishes. Starting Healing Wave and cancelling it spends nothing.

## Single target

No gear. No talents. Sorted by the level the rank is learned. Riptide and Chain Heal are the next sections.

<div class="table-wrap spells" markdown="1">

| Level | Spell | Cast | Heal | Mana | Per mana | Per sec |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Healing Wave 1 | 1.5 sec | 34–44 | 25 | 1.56 | 26 |
| 6 | Healing Wave 2 | 2 sec | 64–78 | 45 | 1.58 | 35.5 |
| 12 | Healing Wave 3 | 2.5 sec | 119–143 | 80 | 1.64 | 52.4 |
| 18 | Healing Wave 4 | 3 sec | 235–277 | 155 | 1.65 | 85.33 |
| 20 | Lesser Healing Wave 1 | 1.5 sec | 142–164 | 105 | 1.46 | 102 |
| 24 | Healing Wave 5 | 3 sec | 315–369 | 200 | 1.71 | 114 |
| 28 | Lesser Healing Wave 2 | 1.5 sec | 210–238 | 145 | 1.54 | 149.33 |
| 32 | Healing Wave 6 | 3 sec | 448–520 | 265 | 1.83 | 161.33 |
| 36 | Lesser Healing Wave 3 | 1.5 sec | 285–323 | 185 | 1.64 | 202.67 |
| 40 | Healing Wave 7 | 3 sec | 636–734 | 340 | 2.01 | 228.33 |
| 44 | Lesser Healing Wave 4 | 1.5 sec | 401–451 | 235 | 1.81 | 284 |
| 48 | Healing Wave 8 | 3 sec | 905–1039 | 440 | 2.21 | 324 |
| 52 | Lesser Healing Wave 5 | 1.5 sec | 574–642 | 305 | 1.99 | 405.33 |
| 56 | Healing Wave 9 | 3 sec | 1255–1433 | 560 | 2.40 | 448 |
| 60 | Lesser Healing Wave 6 | 1.5 sec | 775–865 | 380 | 2.16 | 546.67 |
| 60 | Healing Wave 10 | 3 sec | 1508–1722 | 620 | 2.60 | 538.33 |

</div>

Per sec is how fast the health arrives during the cast. Lesser Healing Wave still lands at 1.5 seconds. Healing Wave rank 4 and up land at 3. If the target will die inside those 3 seconds, use the fast cast.

## Downranking

Each cell is the average heal, then per mana in parentheses. Bonus healing is +0, +200, +400, and +800. Heals are rounded to the nearest point.

The rank named under a table is the best ratio when the target needs the entire heal. If they are missing less than that, cast the smallest rank that covers it.

### Healing Wave

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 25 | 39 (1.56) | 125 (5.00) | 210 (8.40) | 382 (15.28) |
| 2 | 45 | 71 (1.58) | 185 (4.11) | 300 (6.67) | 528 (11.73) |
| 3 | 80 | 131 (1.64) | 274 (3.43) | 417 (5.21) | 702 (8.78) |
| 4 | 155 | 256 (1.65) | 427 (2.75) | 599 (3.86) | 942 (6.08) |
| 5 | 200 | 342 (1.71) | 513 (2.57) | 685 (3.43) | 1028 (5.14) |
| 6 | 265 | 484 (1.83) | 655 (2.47) | 827 (3.12) | 1170 (4.42) |
| 7 | 340 | 685 (2.01) | 856 (2.52) | 1028 (3.02) | 1371 (4.03) |
| 8 | 440 | 972 (2.21) | 1143 (2.60) | 1315 (2.99) | 1658 (3.77) |
| 9 | 560 | 1344 (2.40) | 1515 (2.71) | 1687 (3.01) | 2030 (3.63) |
| 10 | 620 | 1615 (2.60) | 1786 (2.88) | 1958 (3.16) | 2301 (3.71) |

</div>

At +0, rank 10. From +200 up, rank 1. Rank 1 takes a smaller share of bonus healing than rank 10, and 25 mana still wins once any real bonus is on the gear.

### Lesser Healing Wave

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 105 | 153 (1.46) | 239 (2.28) | 324 (3.09) | 496 (4.72) |
| 2 | 145 | 224 (1.54) | 310 (2.14) | 395 (2.72) | 567 (3.91) |
| 3 | 185 | 304 (1.64) | 390 (2.11) | 475 (2.57) | 647 (3.50) |
| 4 | 235 | 426 (1.81) | 512 (2.18) | 597 (2.54) | 769 (3.27) |
| 5 | 305 | 608 (1.99) | 694 (2.28) | 779 (2.55) | 951 (3.12) |
| 6 | 380 | 820 (2.16) | 906 (2.38) | 991 (2.61) | 1163 (3.06) |

</div>

At +0 and at +200, rank 6. From +400 up, rank 1. Every rank takes the same 42.9%, so the big heal stays ahead until the bonus is large.

## Riptide

A Restoration talent. Rank 1 comes with the talent. Ranks 2 and 3 are trained. Instant, 40 yards, then a 6 second cooldown. Not in Classic.

The direct heal lands on the cast. Another heal ticks five times over 15 seconds. Chain Heal cast on that target is 25% more effective while the buff holds. The tables do not include that 25%.

### Riptide, direct

The heal that lands on the cast. The periodic heal is the next table. The mana pays for both.

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 245 | 480 (1.96) | 523 (2.13) | 566 (2.31) | 651 (2.66) |
| 2 | 300 | 612 (2.04) | 655 (2.18) | 698 (2.33) | 783 (2.61) |
| 3 | 385 | 841 (2.18) | 884 (2.30) | 927 (2.41) | 1012 (2.63) |

</div>

At +0, at +200, and at +400, rank 3. At +800, rank 1. The direct heal alone stays behind Healing Wave rank 10.

### Riptide, over time

The 15 second heal. Per mana here still divides by the full mana cost, because the direct heal is on the same cast.

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 245 | 445 (1.82) | 545 (2.22) | 645 (2.63) | 845 (3.45) |
| 2 | 300 | 575 (1.92) | 675 (2.25) | 775 (2.58) | 975 (3.25) |
| 3 | 385 | 805 (2.09) | 905 (2.35) | 1005 (2.61) | 1205 (3.13) |

</div>

At +0 and at +200, rank 3. From +400 up, rank 1.

When the target needs the direct heal and will take the ticks, add the two heals. The mana is paid once. At +0 that total is best on rank 3, 1646 for 385 mana, 4.28. At +200 it is 1789, 4.65. At +400 it is 1932, 5.02. At +800, rank 1, 1496 for 245 mana, 6.11.

Chain Heal cast on the Riptide target is 25% more effective. At +0, Chain Heal rank 3's first heal goes from 490 to 613. The jumps are still half of the previous heal, so three targets are 1074, 2.65 per mana, just ahead of Healing Wave rank 10. The Chain Heal table below does not include this.

## Several targets

### Chain Heal

Trained from 40. A 2.5 second cast. The first target is healed, then the heal jumps to nearby targets. If you cast it on a party member, it only jumps to other party members. Each jump is half of the previous heal, rounded to the nearest point. Three targets is the whole spell. The columns are per mana when that many jumps land. Per sec is the first target.

<div class="table-wrap" markdown="1">

| Rank | Level | First | Mana | Per sec | 1 | 2 | 3 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 40 | 233–269 | 260 | 100.4 | 0.97 | 1.45 | 1.69 |
| 2 | 46 | 312–358 | 315 | 134 | 1.06 | 1.60 | 1.86 |
| 3 | 54 | 458–522 | 405 | 196 | 1.21 | 1.81 | 2.12 |

</div>

On the tooltip, rank 3 with three people is 490, then 245, then 123. That is 858 for 405 mana, 2.12 per mana, under Healing Wave rank 10 at 2.60. Two people is 1.81. One person is 1.21.

Each cell below is the three-target total, then per mana. The jumps are half of the previous heal after bonus healing is added.

<div class="table-wrap" markdown="1">

| Rank | Mana | +0 | +200 | +400 | +800 |
| --- | --- | --- | --- | --- | --- |
| 1 | 260 | 440 (1.69) | 690 (2.65) | 941 (3.62) | 1439 (5.53) |
| 2 | 315 | 587 (1.86) | 837 (2.66) | 1088 (3.45) | 1586 (5.03) |
| 3 | 405 | 858 (2.12) | 1109 (2.74) | 1358 (3.35) | 1858 (4.59) |

</div>

At +0 and at +200, rank 3. From +400 up, rank 1. At +400, rank 3 on three people is 3.35, ahead of Healing Wave rank 10 at 3.16. Rank 1 is 3.62, and its first target is 537. Two people at +400 is 3.10 on rank 1 and 2.87 on rank 3. Healing Wave rank 10 is ahead of both.

## Totems

A totem in these spells has 5 health. The long total below is only if nothing hits it.

### Healing Stream Totem

Trained from 20. Instant. Rank 5, at 60, costs 80 mana and heals group members within 30 yards for 11 every 2 seconds. It lasts 5 minutes. Classic lasts 1 minute, reaches 20 yards, and the rank 5 tick is 14. No share of bonus healing is published for this spell.

<div class="table-wrap" markdown="1">

| Rank | Level | Every 2 sec | Mana | Per mana |
| --- | --- | --- | --- | --- |
| 1 | 20 | 5 | 40 | 0.13 |
| 2 | 30 | 6 | 50 | 0.12 |
| 3 | 40 | 7 | 60 | 0.12 |
| 4 | 50 | 9 | 70 | 0.13 |
| 5 | 60 | 11 | 80 | 0.14 |

</div>

Per mana is one tick. Rank 5's tick is 0.14, far behind Healing Wave. If the totem is never hit, five minutes on one person is 1650, 20.63 per mana. That is the ceiling. Restorative Totems adds 10% to Healing Stream a point, up to 50%, and 5% to Mana Spring a point, up to 25%. It is not in these numbers. Classic adds the same percent to both totems, up to 25%.

### Mana Spring Totem

Trained from 26. Instant. Rank 4, at 56, costs 100 mana and restores 10 mana every 2 seconds to group members within 30 yards. It lasts 5 minutes. Classic lasts 1 minute and reaches 20 yards. The mana restored is the same. If it is never hit, five minutes on one person is 1500 mana.

### Mana Tide Totem

A Restoration talent. Rank 1 comes with the talent. Ranks 2 and 3 are trained. Instant, then a 5 minute cooldown. Rank 3, at 58, costs 60 mana and restores 290 mana every 3 seconds for 12 seconds to group members within 30 yards. That is 1160 mana for one person. Rank 1 restores 88. Classic's rank 1 restores 170, within 20 yards. Rank 3 matches Classic's 290.

## Nature's Swiftness

A Restoration talent. Instant, no mana, 3 minute cooldown. The next Nature spell with a cast under 10 seconds becomes instant. It does not make that spell free. Healing Wave rank 10 still costs 620 mana. Use it when 3 seconds is too slow, or when you have to heal while moving and Riptide is on cooldown.

Water Shield is a Restoration talent, and it is not in Classic. Instant, 15 second cooldown. Three globes last 10 minutes. A hit on you, or a critical heal from you, restores 2% of your maximum mana and spends one globe. Only one globe activates every few seconds. Only one elemental shield can be on you. It is not a heal.
