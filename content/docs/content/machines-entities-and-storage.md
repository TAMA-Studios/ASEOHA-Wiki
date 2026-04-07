---
title: Machines, Entities, And Storage
date: 2026-04-07
description: Functional blocks, custom mobs, and inventory features
draft: false
weight: 1
---

# Machines

## Eye Of Harmony

ASEOHA's Eye of Harmony setup is built around three linked blocks:

- `eye_of_harmony`
- `harmonic_pillar`
- `zero_point_dwarf_star_alloy`

The manual describes the intended loop:

- place the Eye of Harmony inside the TARDIS
- insert a Nether Star
- activate it
- surround it with at least three Harmonic Pillars

The `EOHLink` block supports that workflow directly:

- right-clicking with a Nether Star stores the star state
- it consumes the star
- it marks the tile active
- a later interaction triggers tile activation

The branch intent is clear: this is a high-end TARDIS power source with custom activation rather than a passive decorative block.

## Tribophysical Waveform Macro Kinetic Extrapolator

This is ASEOHA's force-field block.

Behavior in code:

- it is redstone-powered
- when lit, it runs an area shield check
- if inside a TARDIS with a Shield Generator subsystem force field active, it protects the exterior bubble
- outside a TARDIS, it still acts as a local defensive field around the placed block

What it repels:

- monsters
- arrows not fired from inside the protected area
- laser projectiles not fired from inside the protected area

This makes it a real physical defense system, not just a visual shield effect.

## Food Machine

The Food Machine is a TARDIS-interior utility block.

Actual branch behavior:

- it only works where the TARDIS console can be resolved
- it spends 16 artron per use
- normal right-click gives a potato
- crouch-right-click gives bonemeal
- Alt-right-click gives a carrot

The in-game manual says 5 AU and mentions carrot and bonemeal variants. The code currently uses 16 artron per activation.

## Artron Conversion Blocks

Two converter machines exist:

- `artron_converter_fe_au`
- `artron_converter_au_fe`

Config-backed tuning exists for all three energy-side machines:

- FE-to-AU generator
- AU-to-FE converter
- charger

Server config exposes capacity, throughput, and conversion-rate values for each.

## Workbench And Molecular Assembler

`workbench` and `molecular_assembler` both use the same custom workbench block implementation.

That system:

- stores up to four inserted items in a tile buffer
- accepts one item per click
- resolves recipes through `WorkBenchRecipeHandler`
- drops the crafted result above the table when crouch-clicked
- spills stored ingredients if the recipe is invalid or the block is broken

## Sonic Workbench

`sonic_workbench` opens a `QuantiscopeTile` container from the base TARDIS ecosystem.

ASEOHA supplies recipe content for several stations:

| Recipe family | Count |
| --- | --- |
| crafting_table | 71 |
| quantiscope | 23 |
| spectrometer | 53 |
| blast_furnace | 6 |
| smithing_table | 9 |

This means ASEOHA adds a substantial crafted-progression layer, not just standalone item drops.

# Storage Features

## Hammer Space Buffer Access

The Hammer Space Pouch is documented in the TARDIS systems section, but it also matters here as a storage feature:

- it exposes remote access to the TARDIS hammer-space buffer
- it supports single-item and full-stack workflows
- it depends on item attunement rather than local inventory persistence

## K-9 Storage

K-9 carries a 36-slot internal inventory.

Player access:

- K-9 must be tamed
- K-9 must have power
- crouch interaction opens the inventory container

The built-in manual calls out this storage role explicitly.

# Entities

## K-9

K-9 is one of ASEOHA's largest custom gameplay systems.

Core behavior:

- tamed with a Sonic Screwdriver
- powered by artron-bearing items such as sonics and batteries
- loses power over time
- powers down when charge is depleted
- uses ranged laser attacks
- targets creepers and other threats
- has its own inventory
- reports power state to its owner on interaction

Additional implementation details:

- K-9 is space-immune
- damage reduces its stored power
- projectile attacks are converted into owner-aware retaliation logic
- tail angle is used as a visual state indicator

The config option `K9PowerDrainRate` controls how fast its battery drains.

## Wall-E

Wall-E extends the K-9 foundation but changes the interaction and AI profile.

Notable traits:

- taming item is a composter, not a sonic
- can carry and place blocks like an Enderman-style utility mob
- retains robot-style movement and survival traits
- is also space-immune

Wall-E is less of a combat helper than K-9 and more of a novelty utility companion.

## Davros Chair

The Davros Chair is a ridable custom entity.

Behavior:

- players can mount it directly with an empty hand
- it uses rider movement input for steering
- it is underwater-safe and fire-immune
- crouching with a TARDIS sonic heals it

This is closer to a custom vehicle than a normal passive mob.
