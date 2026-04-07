---
title: Controls And Console Additions
date: 2026-04-07
description: How to build modular controls, unlock consoles, and use ASEOHA-only controls
draft: false
weight: 1
---
# Modular Controls

ASEOHA adds a modular-console building path. Instead of relying only on built-in control layouts, you can craft control blocks and assemble your own console room setup.

## Step 1: Craft A Control Mold


| Output | Recipe |
| -------------- | ------------------------------------------------------ |
| `Control Mold` | `Quartz x4`, `Clay Ball x4`, `TARDIS Circuit Paste x1` |


This is the common part used in most ASEOHA modular control recipes.

## Step 2: Build Controls In The Quantiscope

Every modular control recipe found here uses the Quantiscope.


| Control | Ingredients |
| -------------------- | -------------------------------------------- |
| `Flight Button` | `Redstone`, `Control Mold`, `Birch Button` |
| `Facing Control` | `Redstone`, `Control Mold`, `Lantern` |
| `Handbreak Control` | `Redstone`, `Control Mold`, `Lever` |
| `Inc Control` | `Redstone`, `Control Mold`, `Redstone Torch` |
| `Randomizer Control` | `Redstone`, `Control Mold`, `Comparator` |
| `Refueler Control` | `Redstone`, `Control Mold`, `Oak Button` |
| `Dimensional Button` | `Redstone`, `Control Mold`, `Chorus Fruit` |
| `X Control` | `Redstone`, `Control Mold`, `Stone Button` |


To get Y and Z Controls, simply throw the X control into a crafting grid and it'll become a Y control. Y control in crafting grid becomes a Z control, and Z becomes X again.

## What The Important ASEOHA Controls Do

### Coffee Pot

How to use it:

1. Walk up to the Coffee Pot control on a supported console.
2. Right-click it.
3. If the console has enough artron, you get one hot coffee.

Current behavior:


| Action | Result |
| --------------------------------- | --------------------- |
| Right-click with enough artron | get `Coffee` |
| Right-click without enough artron | fail sound, no coffee |


Important note:

- the manual says 10 AU
- the current build removes 25 artron

### Wibbly Lever

How to use it:

1. Make sure the TARDIS can fly and has enough artron.
2. Right-click the Wibbly Lever.
3. The TARDIS exterior gets moved into its interior.
4. Set a destination and take off again to get back out.

Current behavior:


| Requirement | Value |
| ------------- | ------------------------------------------------------------------------------ |
| artron needed | at least `64` |
| effect | removes current exterior and places it at `0, 128, 5` in the current dimension |


This is a gimmick-travel control, not a normal flight button replacement.

### Handbrake

You can use the handbrake safely if the TARDIS is in the process of landing, as opposed to stock NTM behavior where using it whilst landing would trigger a crash.



### Sonic Port

Inserting a Sonic Screwdriver into the Sonic Port will slowly charge the screwdriver for free.



### Unlocking Console Designs

Consoles are unlocked through Spectrometer recipes when a recipe exists.

How Spectrometer unlocks work:

1. put the listed ingredient into the Spectrometer
2. let it process and download
3. throw the sonic screwdriver with the design into your consoles designated Sonic Port

## Spectrometer Console Recipes


| Console Unlock | Ingredient |
| --------------------- | ------------------- |
| `Copper Console` | `Golden Potato` |
| `Brackolin Console` | `Red Nether Bricks` |
| `Custard Console` | `Cut Sandstone` |
| `Blue Marble Console` | `Smooth Quartz` |


### Consoles that are still WIP (No recipe)

These consoles exist in ASEOHA, but have no recipe due to still being WIP:

- Battle
- Hartnell

