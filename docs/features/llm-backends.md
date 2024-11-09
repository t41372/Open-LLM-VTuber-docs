---
sidebar_position: 3
---

# LLM Backends

Open-LLM-VTuber supports multiple LLM backends. The main options are:
1. Any OpenAI-API compatible backend
2. MemGPT (for long-term memory)

## OpenAI-Compatible Backends

You can use any LLM backend that implements the OpenAI API format, including:
- Ollama
- Groq
- LM Studio
- OpenAI
- And more...

### Configuration

Edit the following settings in `conf.yaml`:

```yaml
#  ============== LLM Backend Settings ===================

# Provider of LLM. Choose either "ollama" or "memgpt"
LLM_PROVIDER: "ollama"

# Ollama & OpenAI Compatible inference backend
ollama:
  BASE_URL: "http://localhost:11434/v1"
  LLM_API_KEY: "somethingelse"  # Optional
  ORGANIZATION_ID: "org_eternity"  # Optional
  PROJECT_ID: "project_glass"  # Optional
  MODEL: "llama3.1:latest"
  VERBOSE: False
```

:::tip
If you don't use `LLM_API_KEY`, `ORGANIZATION_ID`, and `PROJECT_ID`, you can leave them as default.
:::

## Quick Start Without Voice

If you want to test the LLM integration without voice or Live2D:
1. Set these options to `False` in `conf.yaml`:
   - `LIVE2D`
   - `VOICE_INPUT_ON`
   - `TTS_ON`
2. This will allow you to interact with the LLM through text only
3. Remember to turn these features back on later 