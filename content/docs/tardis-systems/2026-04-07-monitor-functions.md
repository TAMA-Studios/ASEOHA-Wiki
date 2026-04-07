---
title: Monitor Functions
date: 2026-04-07
description: This page documents the Monitor Functions added by ASEOHA!
draft: false
---
# Monitor Functions

These are the ASEOHA monitor buttons and what they are for in normal play.


| Function | What it does |
| --------------------- | ----------------------------------------------- |
| `Eject` | throws unauthorized occupants out of the TARDIS |
| `Shrink` | makes the exterior tiny |
| `Isomorphic Security` | limits console and monitor use to keyed players |
| `Maintenance` | toggles maintenance mode |
| `HADS` | Toggles the "Hostile Action Displacement System" |


## Eject

Use this when:

- people are inside your TARDIS without a linked key
- you want to clear the ship quickly

Extra behavior:

- if the `Hostile Ejection` upgrade is installed and activated, the ejection logic also supports hostile cleanup

## Shrink

Use this when:

- you want a miniature exterior look

Practical notes:

- it is a toggle
- it does not cost Artron

## Isomorphic Security

When this is active, only people whom have a key attuned to the TARDIS, can interact with the TARDIS console/monitor. If they don't have a key attuned to the TARDIS, they'll be unable to move for an entire minute.

Use this when:

- you only want players carrying an attuned key to touch the console or monitor

## Maintenance

Maintenance mode will dump all stored AU in the TARDIS and power it off, allowing you to interact with the subsystems, upgrades, etc. Upgrading/adding them whilst skipping the minigame.

Use this when:

- you want to force the TARDIS into its maintenance state
- you are doing testing or controlled setup


### HADS

HADS will detect nearby hostile mobs within a 10 block radius of the TARDIS, force an emergency takeoff (Flight Events WILL NOT OCCUR unless there is another player inside the TARDIS, so stabilizers are unnesecary)
The TARDIS will stay in flight for 10 minutes (You can change this in the server config!) before landing