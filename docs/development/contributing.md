---
sidebar_position: 1
---

# Development Guide

This project is in active prototyping stage, so expect frequent changes.

## Common Abbreviations

- LLM: Large Language Model
- TTS: Text-to-Speech, Speech Synthesis, Voice Synthesis
- ASR: Automatic Speech Recognition, Speech to Text, STT
- VAD: Voice Activation Detection

## Technical Notes

### Sample Rates
- Default sample rate is `16000` throughout the project
- Frontend streams chunks of `Float32Array` at 16000Hz to backend

## Adding New Features

### New TTS Providers
1. Implement `TTSInterface` from `tts/tts_interface.py`
2. Add provider to `tts_factory`
3. Add configuration to `conf.yaml`
   - The dict with matching name passes as kwargs to TTSEngine constructor

### New Speech Recognition Providers
1. Implement `ASRInterface` from `asr/asr_interface.py`
2. Add provider to `asr_factory`
3. Add configuration to `conf.yaml`
   - The dict with matching name passes as kwargs to constructor

### New LLM Providers
1. Implement `LLMInterface` from `llm/llm_interface.py`
2. Add provider to `llm_factory`
3. Add configuration to `conf.yaml`
   - The dict with matching name passes as kwargs to constructor

## Acknowledgements

Projects that inspired this work:
- [GlaDOS](https://github.com/dnhkng/GlaDOS)
- [unsuperior-ai-waifu](https://github.com/SchwabischesBauernbrot/unsuperior-ai-waifu)
- [pixi-live2d-display demo](https://codepen.io/guansss/pen/oNzoNoz)
- [AI-Vtuber](https://github.com/Ikaros-521/AI-Vtuber)
- [Digital_Life_Server](https://github.com/zixiiu/Digital_Life_Server) 