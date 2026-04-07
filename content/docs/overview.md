---
title: Overview
date: 2026-04-07
description: High-level map of ASEOHA's implemented systems and content
draft: false
weight: 1
---

# ASEOHA Overview

ASEOHA is an addon for The New TARDIS Mod focused on three big areas:

- expanding TARDIS gameplay with custom controls, monitor functions, upgrades, flight events, sound schemes, and attuned utility items
- adding a large amount of theme content such as consoles, exteriors, decorative blocks, machines, materials, food, tools, armor, music discs, and entities
- extending world content with custom dimensions, biome definitions, and structure pools

## What This Documentation Covers

This documentation was built from the actual Java registries, behavior classes, manual JSON pages, recipes, worldgen data, and resources in `aseoha/1.16.5/aseoha`.

It does not assume every asset file is active just because it exists. ASEOHA contains a mix of:

- fully registered content
- data-backed content that depends on the base TARDIS mod
- legacy or partially wired content that still exists in code or assets

Where that distinction matters, it is called out explicitly.

## Core Feature Areas

| Area | What ASEOHA Adds |
| --- | --- |
| TARDIS systems | modular console blocks, Coffee Pot and Wibbly Lever controls, monitor protocols, upgrades, flight events, sound schemes |
| Machinery | Eye of Harmony power setup, harmonic pillars, artron converters, shield extrapolator, Food Machine, custom workbenches |
| Storage and utility | Hammer Space Pouch, Deadlocker, manual item, sonic variants, attuned item interactions |
| Entities | K-9, Wall-E, Davros Chair |
| Building content | large block library for console rooms, corridors, roundels, materials, railings, themed interiors, and decorative sets |
| Equipment and items | metals, crystals, tools, armor sets, food, discs, spawn eggs, TARDIS parts |
| World content | dimension definitions, biome JSONs, structure pools, New Earth roads, Gallifrey barn content, Cyber Conversion Ship placement hook |

## Implemented Vs Legacy

This branch has a few places where the codebase is broader than the live registration surface.

Examples:

- `ConsolesRegistry` registers six consoles. Additional console blocks and tiles exist but are commented out or not exposed through the console registry.
- `RegisterProtocols` registers `eject`, `shrink`, `isomorphic_security`, and `maintenance`. A `HadsProtocol` file exists but is not registered in this branch.
- `RegisterUpgrades` registers Dynamic Coordinates, Atrium, Hostile Ejection, Engine Booster, Tesseract Drive, Warp Drive, and Lightspeed Drive. `HADS`, `AutoStabilizer`, and `StandardSpeedUpgrade` exist in code but are not registered here.
- `RegisterFlightEvent` registers Power Fault and TARDIS Taking Over. `DimensionalBreach` exists in code but is not registered.
- worldgen data references some structures, such as `aseoha:citadel`, that are not currently registered in `STStructures`.

Use the system pages below for the exact current state.

## Navigation

- [TARDIS Systems](tardis-systems/)
- [Content Catalog](content/)
- [Worlds And Structures](worlds/)
