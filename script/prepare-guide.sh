#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="$root/wiki/guides"
mkdir -p "$out"

{
  printf '%s\n' '---'
  printf '%s\n' 'layout: guide'
  printf '%s\n' 'title: Leveling'
  printf '%s\n' 'permalink: /leveling/'
  printf '%s\n' 'kicker: Undead Priest'
  printf '%s\n' '---'
  printf '\n'
  cat "$root/WoW Forever.md"
} > "$out/leveling.md"
