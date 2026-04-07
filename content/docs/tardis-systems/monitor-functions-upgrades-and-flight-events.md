---
title: Monitor Functions, Upgrades, And Flight Events
date: 2026-04-07
description: What the monitor buttons do, how to craft upgrades, and how to survive flight events
draft: false
weight: 2
---

# Monitor Functions

These are the ASEOHA monitor buttons and what they are for in normal play.

| Function | What it does |
| --- | --- |
| `Eject` | throws unauthorized occupants out of the TARDIS |
| `Shrink` | makes the exterior tiny |
| `Isomorphic Security` | limits console and monitor use to keyed players |
| `Maintenance` | toggles maintenance mode |

## Eject

Use this when:

- people are inside your TARDIS without a linked key
- you want to clear the ship quickly

Extra behavior:

- if `Hostile Ejection` is installed and activated, the ejection logic also supports hostile cleanup

## Shrink

Use this when:

- you want a miniature exterior look

Practical notes:

- it is a toggle
- it does not cost artron in the current build

## Isomorphic Security

Use this when:

- you only want players carrying an attuned key to touch the console or monitor

## Maintenance

Use this when:

- you want to force the TARDIS into its maintenance state
- you are doing testing or controlled setup

# Upgrades

## Main Upgrades In This Build

| Upgrade | Main effect |
| --- | --- |
| `Dynamic Coordinates` | updates monitor position while the TARDIS is moving |
| `Atrium` | carries a framed exterior structure with the TARDIS |
| `Hostile Ejection` | improves the Eject monitor function |
| `Engine Booster` | cuts flight time roughly in half |
| `Tesseract Drive` | near-instant travel |
| `Warp Drive` | instant long-range travel |
| `Lightspeed Drive` | very fast travel, faster than Engine Booster |

## Quantiscope Upgrade Recipes

| Upgrade | Ingredients |
| --- | --- |
| `Dynamic Coordinates` | `Observer`, `Comparator`, `Ender Eye`, `TARDIS Circuits`, `Blank Upgrade` |
| `Engine Booster` | `Rabbit Foot`, `Netherite Scrap`, `Dematerialisation Circuit`, `Blank Upgrade` |
| `Hostile Ejection` | `Detector Rail`, `Redstone`, `Air Lock`, `TARDIS Circuits`, `Blank Upgrade` |
| `Lightspeed Drive` | `Netherite Ingot`, `Engine`, `Nether Star`, `Engine Booster`, `TARDIS Circuits` |

## Crafting Table Upgrade Recipes

| Upgrade | Ingredients |
| --- | --- |
| `Tesseract Drive` | `High Artron Battery x4`, `High Artron Capacitor x2`, `Netherite Reinforced Circuits`, `Diamond Block x2` |
| `Warp Drive` | `Phaser Power Cell x4`, `High Artron Capacitor x2`, `Warp Core`, `Netherite Ingot x2` |

## Support Parts You Need First

| Part | How to make it |
| --- | --- |
| `Engine` | craft with `Pistons x6`, `Iron Ingots x2`, `Redstone x1` |
| `Warp Core` | Quantiscope: `Dematerialisation Circuit`, `Netherite Reinforced Circuits x2`, `Star Infused Netherite Ingot`, `Stabilizer` |

## How To Use The Important Upgrades

### Engine Booster

Use this when:

- you want a simple speed upgrade early

What it does:

- reduces flight time after takeoff

### Lightspeed Drive

Use this when:

- you want the strongest non-instant speed boost

What it does:

- reduces travel time much more aggressively than Engine Booster

### Tesseract Drive

Use this when:

- you want quick local repositioning

What it does:

- forces immediate arrival

### Warp Drive

Use this when:

- you want instant long-distance travel

Important note:

- the code checks trip distance
- it only kicks in when the destination is not within 4000 blocks of the current location

### Dynamic Coordinates

Use this when:

- you want the monitor's current-position readout to stay truthful during flight

### Atrium

Use this when:

- you want the exterior to carry a built platform or scene with it

How to use it:

1. install and activate the Atrium upgrade
2. build an Atrium-block baseplate centered under the exterior
3. keep the footprint within the supported frame size
4. build your structure above that platform
5. take off

What happens:

- safe blocks in the framed area are stored and moved with the TARDIS
- if the landing spot is unsafe, the Atrium is buffered and restored later when a safe spot is found

# Flight Events

ASEOHA adds extra in-flight problems. These are not flavor-only. If you miss the input sequence, the TARDIS gets punished.

## Power Fault

How to solve it:

| Event | Correct controls |
| --- | --- |
| `Power Fault` | `Throttle` + `Refueler` |

What happens if you fail:

- the TARDIS loses half its artron
- the interior powers down

## TARDIS Taking Over

How to solve it:

| Event | Correct controls |
| --- | --- |
| `TARDIS Taking Over` | `Randomizer` + `Throttle` + `Land Type` |

What happens if you fail:

- destination coordinates are randomized
- you can get thrown off course by about 1000 blocks

# About HADS

HADS is documented and partially present, but it is not exposed as a normal upgrade.

What the HADS logic is supposed to do:

- detect nearby hostile mobs
- force emergency takeoff
- keep the TARDIS in flight for the configured duration
- land again later

What that means for players:

- treat HADS as planned or partial content unless your pack or server exposes it another way
