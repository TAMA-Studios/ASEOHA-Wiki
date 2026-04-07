---
title: Controls And Console Additions
date: 2026-04-07
description: Modular console blocks, custom controls, and registered consoles
draft: false
weight: 1
---

# Controls And Console Additions

ASEOHA extends TARDIS piloting in two different ways:

- it adds modular console block controls that can be crafted and placed as physical console components
- it registers custom control entities that appear on supported console designs

## Modular Console Blocks

The `AseohaBlocks` registry adds a modular-control subset for custom console construction:

- `flight_button`
- `facing_control`
- `handbreak_control`
- `inc_control`
- `randomizer_control`
- `refueler_control`
- `x_control`
- `y_control`
- `z_control`
- `dimensional_button`

There is also a second visual set for the coordinate controls:

- `cool_x_control`
- `cool_y_control`
- `cool_z_control`

These blocks are assigned to a separate creative tab from the main ASEOHA block catalog, which makes them function as a dedicated modular-console kit rather than generic decoration.

## What The Manual Says About Modified Control Behavior

ASEOHA's built-in manual documents several behavior changes or additions:

| Control | Documented behavior |
| --- | --- |
| Handbrake | safe while landing, still dangerous if used during active flight |
| Sonic Port | charges an inserted Sonic Screwdriver |
| Coffee Pot | consumes artron and produces coffee |
| Wibbly Lever | sends the TARDIS into itself, then expects the player to fly back out by setting a new destination |

## Coffee Pot

`ControlsRegistry` registers `coffeepot` as a real control entry.

Behavior in code:

- clicking it checks whether the console has enough artron
- on success it gives the player one `coffee` item
- it subtracts artron directly from the console
- it uses TARDIS success and fail sounds to provide feedback

Important detail:

- the manual says the Coffee Pot costs 10 AU
- the current `CoffeePot` class actually checks for 25 artron and removes 25

For this branch, the code is the more reliable source.

## Wibbly Lever

`ControlsRegistry` also registers `wibbly_lever`.

Behavior in code:

- it requires the console to be able to fly and to have at least 64 artron
- it force-loads the interior chunk
- it removes the current exterior
- it places the exterior at `0, 128, 5` in the current dimension

Practical result:

- this is not a flavor toggle
- it is a relocation mechanic that deliberately forces the TARDIS into its own space until the player flies back out

The manual description matches that intent.

## Registered Consoles

`ConsolesRegistry` currently exposes six consoles:

- Copper
- Custard
- Battle
- Brackolin
- Blue Marble
- Hartnell

The block and tile layer contains additional console content, including Takomak and some other legacy references, but those are not all registered as selectable consoles in this branch.

## Console Texture Variants

ASEOHA uses `TextureVariants` to add alternate looks to some consoles:

- Copper has multiple metal and color variants including normal, steel, rose gold, blue, turquoise, and crystal
- Custard has default, blue, and off variants

This means ASEOHA is not just adding console blocks, it is also extending the visual customization layer around them.

## Sound Schemes

ASEOHA registers two sound schemes:

- `stealth`
- `smith`

The Smith scheme is backed by custom takeoff, loop, and landing sounds. The Stealth scheme uses a silent scheme implementation.
