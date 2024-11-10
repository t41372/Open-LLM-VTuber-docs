---
sidebar_position: 1
---


:::warning
If you see this message, I'm currently reconstructing this documentation. Information may not be completed, but it won't take long! 
-- (2024.11.09)
:::


# Introduction

Open-LLM-VTuber allows you to talk to (and interrupt!) any LLM locally by voice (hands-free) with a Live2D talking face. The LLM inference backend, speech recognition, and speech synthesizer are all designed to be swappable. This project can be configured to run offline on macOS, Linux, and Windows. Online LLM/ASR/TTS options are also supported.

Long-term memory with MemGPT can be configured to achieve perpetual chat, infinite* context length, and external data source.

This project started as an attempt to recreate the closed-source AI VTuber `neuro-sama` with open-source alternatives that can run offline on platforms other than Windows.

## Why this project?

- It works on macOS
  - Many existing solutions display Live2D models with VTube Studio and achieve lip sync by routing desktop internal audio into VTube Studio and controlling the lips with that. On macOS, however, there is no easy way to let VTuber Studio listen to internal audio on the desktop.
  - Many existing solutions lack support for GPU acceleration on macOS, which makes them run slow on Mac.
- This project supports [MemGPT](https://github.com/cpacker/MemGPT) for perpetual chat. The chatbot remembers what you've said.
- No data leaves your computer if you wish to
  - You can choose local LLM/voice recognition/speech synthesis solutions; everything works offline. Tested on macOS.
- You can interrupt the LLM anytime with your voice without wearing headphones.

## Basic Features

- Chat with any LLM by voice
- Interrupt LLM with voice at any time
- Choose your own LLM backend
- Choose your own Speech Recognition & Text to Speech provider
- Long-term memory
- Live2D frontend

## Target Platforms

- macOS
- Linux
- Windows

:::warning
This project is in its early stages and is currently under **active development**. Features are unstable, code is messy, and breaking changes will occur. The main goal of this stage is to build a minimum viable prototype using technologies that are easy to integrate.
:::