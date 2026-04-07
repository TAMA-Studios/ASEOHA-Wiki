---
title: Monitor Functions, Upgrades, And Flight Events
date: 2026-04-07
description: Protocols, registered upgrades, documented HADS behavior, and random flight events
draft: false
weight: 2
---

# Monitor Functions

ASEOHA adds monitor-side protocols through `RegisterProtocols`.

## Registered Protocols

| Protocol | Current function |
| --- | --- |
| Eject | ejects unauthorized players and, when the Hostile Ejection upgrade is active, can also send qualifying non-friendly living entities out through the door |
| Shrink | toggles a reduced exterior scale state and syncs that size change to the client |
| Isomorphic Security | toggles whether only players with attuned keys can use the console and monitor |
| Maintenance | toggles a maintenance flag on the console and broadcasts the new state to nearby players |

## Eject

The Eject protocol is the most mechanically involved.

What it does:

- checks for the `HostileEjection` upgrade
- if that upgrade is present and activated, it builds an entity list near the console
- it attempts to exclude tamed entities and keyed players
- it teleports the remaining eligible entities via the console door
- it separately ejects nearby players who do not have an attuned key

Intent:

- security cleanup inside the TARDIS
- optional hostile-only ejection when the supporting upgrade is installed and turned on

## Shrink

Shrink is a property toggle, not a temporary effect.

What it changes:

- console-side exterior size state
- exterior tile scale state
- client sync for the exterior-size flag

The built-in manual describes it correctly as a cosmetic exterior-miniaturization feature.

## Isomorphic Security

This protocol toggles a stored console security state.

The manual summary is accurate:

- players with an attuned TARDIS key are allowed to interact
- players without an attuned key are blocked from console and monitor access when the protocol is enabled

## Maintenance

Maintenance flips a boolean on the console and notifies nearby players. In this branch the implementation is simple:

- it is a state toggle
- it closes nearby player containers client-side after the message

The visible gameplay around that flag likely depends on other TARDIS-side systems and mixins.

## HADS In This Branch

HADS exists in a split state.

What is present:

- a full `HADS` upgrade class with hostile-proximity takeoff logic
- a server config entry for HADS duration
- manual documentation describing how it should work

What is not present:

- no active `RegisterUpgrades` entry for HADS
- no active protocol registration for `HadsProtocol`

So HADS is documented and partially implemented in code, but it is not part of the registered upgrade set in this branch.

# Registered Upgrades

`RegisterUpgrades` exposes seven active upgrade entries.

| Upgrade | Effect in code |
| --- | --- |
| Dynamic Coordinates | keeps the monitor's current position updated to the live in-flight position |
| Atrium | carries a framed area of blocks with the TARDIS and restores it on safe landing |
| Hostile Ejection | enables the Eject protocol's hostile-ejection path |
| Engine Booster | cuts travel time roughly in half by reducing reach-destination timing |
| Tesseract Drive | forces near-instant travel by setting destination reached on takeoff |
| Warp Drive | also forces near-instant travel, but only when the trip is not within 4000 blocks |
| Lightspeed Drive | reduces travel time to roughly a quarter and plays an extra sound cue |

## Dynamic Coordinates

This upgrade continuously rewrites the console's current location while in flight.

Purpose:

- makes monitor data reflect the ship's live in-flight position instead of only origin or destination state

## Atrium

Atrium is one of the deepest ASEOHA-specific features.

What it does on takeoff:

- scans an area centered on the exterior
- looks for atrium-framed space up to 11 blocks high
- stores non-liquid, non-replaceable blocks relative to the exterior
- clears those blocks from the world

What it does on landing:

- checks whether the destination area is safe
- refuses to overwrite important or protected blocks
- restores the stored structure if the area is safe
- otherwise keeps the atrium contents buffered for a later safe landing

Safety rules include avoiding:

- portals and gateway blocks
- tile entities
- barriers
- rails, fences, and fence gates
- storage blocks, ores, chests, barrels, and other valuable blocks

This is effectively a mobile landing environment system.

## Speed Upgrades

ASEOHA contains three different speed-oriented upgrades.

| Upgrade | Actual code behavior |
| --- | --- |
| Engine Booster | delayed half-time flight reduction |
| Lightspeed Drive | delayed quarter-time flight reduction plus extra sound |
| Tesseract Drive | immediate destination reached after takeoff |
| Warp Drive | immediate destination reached after takeoff if the trip is long-range |

The manual descriptions are directionally right, but the code behavior is the real implementation:

- Tesseract and Warp are both effectively instant-travel modifiers
- Warp includes a minimum-range check
- Lightspeed is the strongest non-instant acceleration upgrade

# Flight Events

`RegisterFlightEvent` actively registers two random flight events.

## Power Fault

Expected control sequence:

- Throttle
- Refueler

Failure result in code:

- plays a power-down sound
- halves the console's artron reserve
- powers down the interior when available

This is more than a warning event. Missing it directly damages the TARDIS power state.

## TARDIS Taking Over

Expected control sequence:

- Randomizer
- Throttle
- Land Type

Failure result in code:

- plays a cloister-bell style sound
- randomizes destination coordinates by 1000 blocks
- updates the client to reflect the changed destination

This matches the manual's theme: the ship overrides your route unless you reassert manual control.

## Dormant Flight Event Content

`DimensionalBreach` exists as a class and has defined required controls:

- Throttle
- Dimension

Its failure behavior would crash the TARDIS and trigger the alarm, but it is not registered in `RegisterFlightEvent`, so it is currently dormant in this branch.
