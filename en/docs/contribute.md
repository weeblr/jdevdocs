---
title: How to contribute
description: Tools and workflow to contribute to Joomla developer documentation
author: JUG Extension developer
---

## General workflow

The documentation content is built with [Mkdocs](https://www.mkdocs.org/) and the [Mkdocs Material theme](https://squidfunk.github.io/mkdocs-material/). A number of plugins are also enabled to allow for easy formatting of different content types.

New content, or changes to existing content is done in the same way code is modified:

- fork this repository
- make changes / add content in your fork
- submit a Pull Request to this repo. 

!!! info "Administrators of this project may merge your changes directly or ask for adjustments before doing so."

## Building and publishing

This process is automated and managed using:

- Github actions for the build process: see `/.github/workflows/ci.yml` for configuration.
- Mkdocs Material configuration file located at `mkdocs.yml`, per language.
