---
sidebar_position: 4
---

# Live2D Integration

Open-LLM-VTuber uses Live2D to provide a visual avatar that responds to the conversation.

## Technical Details

- Uses [guansss/pixi-live2d-display](https://github.com/guansss/pixi-live2d-display) for Live2D rendering
- Runs in browser with WebSocket communication
- Can work offline with locally stored models
- Supports both local and URL-based model loading

## Running Live2D

1. Run `server.py` to start the WebSocket server
2. Open `localhost:12393` in your browser (port configurable in `conf.yaml`)
3. Wait for the Live2D model to load

## Model Configuration

- Models are configured in `model_dict.json`
- Local models should be stored in `live2d-models` directory
- Models can be loaded from URLs or local storage
- The default `shizuku-local` model works offline

## Expression Control

- Expression keywords in LLM responses control facial expressions
- Keywords are automatically loaded into system prompt
- Keywords are excluded from speech synthesis output

:::note
For loading your own Live2D models locally, refer to `doc/live2d.md` in the project repository.
::: 