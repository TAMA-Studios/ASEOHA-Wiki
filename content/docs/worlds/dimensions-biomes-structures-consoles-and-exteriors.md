---
title: Dimensions, Biomes, Structures, Consoles, And Exteriors
date: 2026-04-07
description: How to unlock interiors, exteriors, and console themes, plus what the destination worlds are for
draft: false
weight: 1
---

# How To Unlock Exteriors

The exteriors below are unlocked through the Spectrometer.

## Spectrometer Exterior Recipes

| Exterior Unlock | Put This In The Spectrometer |
| --- | --- |
| `Coral` | `Lapis Lazuli` |
| `Brackolin` | `Nether Bricks` |
| `Capaldi` | `Painting` |
| `Classic Hartnell` | `Artron Bank` |
| `McGann` | `Blue Dye` |
| `Olwarrior` | `Warped Door` |
| `Rani` | `Stone Bricks` |
| `Wardrobe` | `Oak Planks` |
| `Bluedoctor` | `Lapis Block` |

### Support Recipe: Artron Bank

You need this for the `Classic Hartnell` exterior unlock.

| Output | Recipe |
| --- | --- |
| `Artron Bank` | `Xion Crystal x4`, `Gold Ingot x4`, `Diamond` |

## Registered Exteriors With No Recipe Found Here

These exteriors exist in ASEOHA, but no Spectrometer recipe file was found for them:

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
- Colin Richmond

Treat those as non-survival, admin, or unfinished unlocks unless your server or modpack adds another path.

# How To Unlock Consoles

## Spectrometer Console Recipes

| Console Unlock | Put This In The Spectrometer |
| --- | --- |
| `Copper Console` | `Golden Potato` |
| `Brackolin Console` | `Red Nether Bricks` |
| `Custard Console` | `Cut Sandstone` |
| `Blue Marble Console` | `Smooth Quartz` |

## Registered Consoles With No Recipe Found Here

- Battle
- Hartnell

# How To Unlock Interiors

Interiors are also unlocked through the Spectrometer.

## Spectrometer Interior Recipes Found

| Interior Unlock | Put This In The Spectrometer |
| --- | --- |
| `13th Crystal Interior` | `Yellow Crystal` |
| `4th Secondary Interior` | `Cookie` |
| `8th Edwardian Interior` | `Alembic` |
| `Astronomer` | `Cogwheel` |
| `Basic Interior` | `Alabaster` |
| `Blue Doctor Interior` | `Warped Planks` |
| `C7007` | `Quartz` |
| `Catherine Interior` | `Black Terracotta Roundel` |
| `Cavern` | `Shroomlight` |
| `Clockwork Interior` | `Tezarak Coin` |
| `Cody` | `Nether Bricks Roundel` |
| `Crystal Tungsten` | `Yellow Stained Glass` |
| `Eight` | `End Stone Bricks` |
| `Five` | `Dark Oak Slab` |
| `Four` | `Bookshelf` |
| `Hell Bent Interior` | `Clay` |
| `Ironclad` | `Iron Block` |
| `Jazz Age` | `Jukebox` |
| `Jungle Interior` | `Jungle Sapling` |
| `Kaley Interior` | `Gilded Blackstone` |
| `Master TARDIS` | `Lava Bucket` |
| `MD Copper` | `Smooth Red Sandstone` |
| `Missy Interior` | `Magenta Stained Glass` |
| `Moonlight Forest` | `Spruce Wood` |
| `Nightskies Interior` | `Ebony Bookshelf` |
| `Nine` | `Magma Block` |
| `One` | `Eye Monitor` |
| `Ruth Interior` | `Andesite Wall` |
| `Secret Archive` | `Clay Ball` |
| `Seven` | `Smooth Stone Slab` |
| `Six` | `Water Bucket` |
| `Tailgate` | `Grass` |
| `Takomak` | `Jukebox` |
| `Tanzanite` | `Purple Wool` |
| `Ten` | `Compass` |
| `Three` | `Cyan Terracotta` |
| `Toyota Interior` | `Spinny Thing` |
| `Two` | `White Wool` |
| `Valeyard Interior` | `Spruce Planks` |
| `Wizard Tower` | `Purple Carpet` |

## Practical Unlock Advice

If you are just trying to get started quickly:

| Goal | Easy unlock to chase |
| --- | --- |
| first exterior | `Coral` from `Lapis Lazuli` |
| first console | `Copper Console` from `Golden Potato` |
| first interior | `Basic Interior` from `Alabaster` |

# Destination Worlds

These are the worlds the built-in manual clearly expects players to visit.

| World | What to expect |
| --- | --- |
| `New Earth` | city exploration, roads, buildings, loot-hunting |
| `Gallifrey` | villages and a strong custom color palette |
| `Skaro` | dangerous Dalek-heavy world |
| `Trenzalore` | snowy settlements |
| `Raxicoricofallapitorius` | quieter world with lighter exploration value |
| `Klom` | hostile moon-style destination |
| `Adipose` | referenced destination with less complete gameplay support in this branch |

# Worldgen Notes Players Actually Care About

## New Earth

The useful part:

- New Earth is the place tied most directly to ASEOHA structure generation
- the biome data explicitly includes ASEOHA road generation

If you want to explore obvious ASEOHA world content, this is one of the best places to start.

## Gallifrey

The useful part:

- Gallifrey biome data points at villages and extra ASEOHA structure hooks such as `barn_one`

## Skaro

The useful part:

- Skaro is the dangerous combat/exploration destination
- biome data heavily favors Dalek spawning

# Structures

The active branch wiring clearly points to these ASEOHA world structures:

- `Road`
- `Barn One`
- `Cyber Conversion Ship`

Practical reading of that:

| Structure | Where it matters most |
| --- | --- |
| `Road` | New Earth exploration |
| `Barn One` | Gallifrey-themed world content |
| `Cyber Conversion Ship` | overworld mountains hook in this branch |

Some other structure content exists in files or code, but if it is not fully wired here, it is not treated as normal survival guidance in this wiki.
