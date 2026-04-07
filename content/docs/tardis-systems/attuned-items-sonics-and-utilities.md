---
title: Attuned Items, Sonics, And Utilities
date: 2026-04-07
description: Bound items, sonic behavior changes, manual tools, and utility gear
draft: false
weight: 3
---

# Attuned And Utility Items

ASEOHA adds several items that only make sense once they are linked to a specific TARDIS.

## Hammer Space Pouch

The `HammerSpacePouch` is a console-bound item that interacts with a TARDIS-side buffer.

Behavior:

- it stores the linked TARDIS key as NBT
- it only works when the item is attuned
- it uses the off-hand interaction path
- normal use moves single items
- crouching use moves whole stacks

If the player has an item in the main hand:

- normal use stores one copy of that item
- crouch use stores the full stack

If the player's main hand is empty:

- normal use retrieves one item
- crouch use retrieves a full stack

This makes it a remote access tool for the TARDIS hammer-space buffer rather than a portable inventory that stores its own contents.

## Deadlocker

`deadlocker` is another console-bound utility item.

What it does:

- finds the linked TARDIS exterior
- requires the player to be physically close to the exterior
- toggles the exterior's additional lock level between deadlocked and unlocked
- forces the door shut when deadlocking
- mirrors the door state to the interior door

This is a direct remote security tool for exterior access control.

## Sonic Screwdriver Changes

The manual and mixin layer show that ASEOHA extends sonic behavior, especially in destination mode.

Documented and code-backed behaviors include:

- right-clicking a block in TARDIS Destination Mode can disable the TARDIS alarm
- the same interaction can force an attuned TARDIS to land
- this can be done from inside or outside the TARDIS

ASEOHA also ships several sonic items:

- `sonic_screwdriver`
- `sonic_fourteenth`
- `sonic_wiimote`
- `sonic_laser`

## Sonic Laser

`sonic_laser` is not just a skin.

Its use action:

- spawns a yellow laser projectile
- deals 10 damage
- uses a short ray length
- plays the laser-gun fire sound

It then falls back to the normal sonic-item behavior after firing.

## Manual Item

ASEOHA includes its own in-game manual item and a complete manual JSON structure.

Manual chapter coverage:

- machinery
- upgrades
- flight events
- storage
- dimensions
- monitor functions
- controls

The wiki pages in this doc set expand that in-game manual with branch-specific implementation notes.
