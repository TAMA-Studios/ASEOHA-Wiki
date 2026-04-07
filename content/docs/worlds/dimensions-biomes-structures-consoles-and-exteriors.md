---
title: Dimensions, Biomes, Structures, Consoles, And Exteriors
date: 2026-04-07
description: Worldgen-backed destinations plus ASEOHA's TARDIS shell catalog
draft: false
weight: 1
---

# Dimension Definitions

ASEOHA ships eight dimension definition files:

- Adipose Three
- Gallifrey
- Klom
- Midnight
- New Earth
- Raxicoricofallapatorious
- Skaro
- Trenzalore

`AseohaDimensions` also defines registry keys for:

- Klom
- Gallifrey
- Vortex

The data pack side clearly goes beyond those two and supplies actual dimension JSONs for the wider planet set.

## Manual-Documented Worlds

The in-game manual explicitly documents these locations:

| World | Manual description |
| --- | --- |
| New Earth | infinite city exploration with treasure-hunt style buildings |
| Gallifrey | orange sky, red grass, villages, and a distinctive palette |
| Skaro | heavy Dalek presence |
| Trenzalore | snowy settlements |
| Raxicoricofallapitorius | mostly dirt and water, low activity |
| Klom | dark hostile moon |
| Adipose breeding grounds | referenced in the manual, though the actual data uses `adipose_three` |

Midnight and several redlands/death-zone biome files also exist in the data layer even though they are not all surfaced through the in-game manual.

# Biome Layer

The `data/aseoha/worldgen/biome` folder contains twenty biome definitions, including:

- the main destination biomes listed above
- `midnight`
- `death_zone`
- a large `redlands` biome family with cliffs, rivers, mountains, taiga variants, and cold-ocean support

This indicates that ASEOHA's world layer is broader than the in-game manual alone suggests.

## Notable Biome Traits

Examples pulled directly from biome JSONs:

- `newearth` is an ocean-category biome that explicitly starts the `aseoha:road` structure and spawns villagers in large groups
- `gallifreybiome` uses a custom surface builder, supports villages and mansions, and references `aseoha:barn_one` and `aseoha:citadel`
- `skarobiome` spawns Daleks aggressively and references base-TARDIS structures like `dalek_ship` and `crashed_structure`
- `trenzalorebiome` includes village, mansion, outpost, and buried-treasure starts

# Structures

## Active Java Registrations

`STStructures` actively registers:

- `road`
- `barn_one`
- `cyber_conversion_ship`

Configured-structure registration mirrors those same three.

## Actual Placement Behavior

The placement story is split between code and data:

- `road` is used by the `newearth` biome and backed by a template pool with straight, alternate, curve, and intersection pieces
- `barn_one` is referenced by the Gallifrey biome data
- `cyber_conversion_ship` is injected by Java code only into the vanilla `mountains` biome and only in the overworld spacing pass

So the Cyber Conversion Ship is a targeted overworld structure, not a general planet structure.

## Dormant Structure Content

The codebase also contains classes or data for:

- Gridlock
- Citadel

But in this branch:

- `gridlock` is not actively registered
- `citadel` is referenced in biome JSON, but its Java registration is commented out

That means Citadel is part of the content design, but not fully wired as a live structure here.

# Exteriors

`ExteriorsRegistry` actively registers these TARDIS exterior types:

- Coral
- Sutekh
- Mk2 Capaldi
- Mk2 Davidson
- Mk2 Hartnell
- Mk2 McGann
- Mk2 Pertwee
- Mk2 Smith
- Mk2 Tennant
- Mk2 Whittaker
- Whittaker
- Brackolin
- Wardrobe
- Rani
- Olwarrior
- Bluedoctor
- Classic Hartnell
- Capaldi
- McGann
- Colin Richmond

## Exterior Variant Support

Several exteriors include texture-variant arrays rather than a single look.

Important examples:

- Coral has default and Bad Wolf variants
- Capaldi has default, invisible, and tribute variants
- Wardrobe has multiple wood and material finishes
- Colin Richmond has the largest variant set, covering RTD, Moffat, war, and custom skins

This makes the exterior system one of ASEOHA's strongest customization layers.

# Consoles Revisited From The World/Theme Side

From a content perspective, the registered console lineup is:

- Copper
- Custard
- Battle
- Brackolin
- Blue Marble
- Hartnell

ASEOHA also carries supporting theme assets for older or alternate consoles that are not all live-registered in this branch. That is why some block and texture content appears broader than the active console registry.
