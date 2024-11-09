---
sidebar_position: 1
---

# Speech Recognition (ASR)

Open-LLM-VTuber supports multiple speech recognition (ASR) backends. You can configure which one to use by editing the `ASR_MODEL` setting in `conf.yaml`.

## Available Options

### FunASR
- [FunASR](https://github.com/modelscope/FunASR) is a Fundamental End-to-End Speech Recognition Toolkit from ModelScope
- Supports [SenseVoiceSmall](https://github.com/FunAudioLLM/SenseVoice) and other models
- Very fast even on CPU
- Installation:
  ```bash
  pip install -U funasr modelscope huggingface_hub
  pip install torch torchaudio  # Ensure torch>=1.13
  ```
:::note
Currently requires internet connection on launch even if models are locally available
:::

### Faster-Whisper
- Optimized version of Whisper
- For Nvidia GPU users, requires:
  - [cuBLAS for CUDA 12](https://developer.nvidia.com/cublas)
  - [cuDNN 8 for CUDA 12](https://developer.nvidia.com/cudnn)
- Can run on CPU by setting `device: cpu` in `conf.yaml`

### WhisperCPP
- Python binding for Whisper.cpp
- Installation: `pip install pywhispercpp`
- Excellent performance on macOS with CoreML support
- For CoreML support:
  1. Run `install_coreml_whisper.py` to build with CoreML support
  2. Prepare CoreML models
  3. Set model name in `conf.yaml` without prefixes (e.g., use `base` for `ggml-base-encoder.mlmodelc`)

### Original Whisper
- OpenAI's original Whisper implementation
- Installation: `pip install -U openai-whisper`
- Slower compared to other options

### Groq Whisper
- Hosted Whisper endpoint with generous free tier
- Requires API key from [Groq](https://console.groq.com/keys)
- Fast response times

### Azure Speech Recognition
- Microsoft Azure's speech recognition service
- Installation: `pip install azure-cognitiveservices-speech`
- Requires API key
- Configure in `conf.yaml`

## Configuration

The microphone input can be configured in two ways:
1. Server terminal (default)
2. Browser-based input (set `MIC_IN_BROWSER: true` in `conf.yaml`)

:::tip
Browser-based input is useful when running the backend on a different machine or in a container, but may have higher latency.
:::

