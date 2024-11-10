---
sidebar_position: 3
---

# Open-LLM-VTuber Installation Guide

This guide will walk you through setting up Open-LLM-VTuber step by step.

:::warning
This project is in its early stages and under active development. Features are unstable, code is messy, and breaking changes will occur. This guide reflects the current state and may be outdated soon.
:::

:::warning
This project is not very easy to setup at this moment.  Modularity and local execution of AI components create complexities.  We're working on simplifying this process, including an installation script with recommended configurations.
:::

:::note
If you want to run this on a server and access it remotely, the microphone in the web UI will only work in a secure context (HTTPS or localhost). See [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). You might need to configure HTTPS with a reverse proxy or open `static/index.html` locally and connect to the server via WebSocket.
:::


## Basic Knowledge

All settings are in `conf.yaml`. This file contains comments explaining the settings.

# Setup Steps

0. Make sure you have what you need

1. Clone the repository
2. (Optional but highly recommended) Create a virtual environment
3. Install basic dependencies
4. Setup the LLM
5. Setup your desired ASR (Automatic Speech Recognition)
6. Setup your desired TTS (Text to Speech)
7. Run the program



## Step 0: Make sure you have what you need

### Prerequisites

- Git
- `ffmpeg` installed on your computer
- Python version >= 3.10, < 3.13 (Dependency issues exist in Python 3.13. Use 3.12 or lower if you encounter problems)

#### Git

You need `git` installed on your computer.

Check your installation with the command `git --version`.

if it says something like

~~~text
git version 2.39.5
~~~

then you are good to proceed.

If it's something else, go install `git`.



### Python

- You need a python version `>= 3.10` and `< 3.13`

Check with `python --version` or `python3 --version`

If the version number shows up are between 3.10 -> 3.12, you are good.

If not, well, installing python again would be bad. You can use `conda` which allows you to create virtual environments with whatever python version you want. We will talk about virtual environment soon.



## Step 1: Download the Repo

```bash
git clone https://github.com/t41372/Open-LLM-VTuber
```

If you do not download the repo in this way, you may not be able to use the upgrade script added in version `v0.2.5.release` in the future.

## Step 2: Create Virtual Environment (Recommended)

### Using venv (if you don't have a python version issue)

```bash
# Create virtual environment
python -m venv open-llm-vtuber

# Activate on Windows
open-llm-vtuber\Scripts\activate

# Activate on macOS/Linux
source open-llm-vtuber/bin/activate
```

Remember, you need to activate the virtual environment everytime you want to run Open-LLM-VTuber.

### Using conda (if you have an incompatible python version)

You will need to install `conda`. Go search for the way to install `anaconda` or `miniconda` for your OS.

After installing conda, you can use the following commands to...

```bash
# Create conda environment
conda create -p ./.conda python="3.10.4"
# Activate
conda activate ./.conda
```

Remember, you need to activate the virtual environment everytime you want to run Open-LLM-VTuber.



## Step 3: Install Basic Dependencies

```bash
pip install -r requirements.txt
```

If you encounter an error here, there are some possible reasons.

- Python 3.13, which is incompatible. Check doc above.
- Internet issue. Users in China can't connect to pip package manager without configuring mirror or VPN.
- Dependency conflict with existing packages. See? this is what will happen if you don't use a virtual environment.
- Weird computer. Who knows.

## Step 4: Setup the LLM

You need an OpenAI-API-Compatible backend like Ollama, vLLM, LM Studio, Groq, OpenAI, or others.  You can also use MemGPT for long-term memory (currently broken), but its setup is more complex.

Configure your LLM in `conf.yaml`:

```yaml
LLM_PROVIDER: "ollama" # put ollama for all openai compatible api

ollama:
  BASE_URL: "http://localhost:11434/v1"
  MODEL: "llama3.1:latest"
  # Other settings like LLM_API_KEY, ORGANIZATION_ID, PROJECT_ID might be needed depending on your LLM backend.
```

So this is LLM.

## Step 5: Setup ASR (Automatic Speech Recognition)

Supported options include FunASR, Faster-Whisper, Groq, and many more. See [Speech Recognition](../ASR) for detailed setup instructions of different ASR providers.

Local options like FunASR with SenseVoiceSmall and Faster-Whisper offers good speed and accuracy. Groq API offers generous free limits.

:::warning
Make sure your audio input device (a.k.a. your microphone) is configured properly in your browser. Use [this website](https://www.vad.ricky0123.com/) to check if your mic is working as expected.
:::

:::warning macOS Users launching with main.py
Enable microphone permission for your terminal emulator to allow speech recognition access to your microphone.
::: 

This project supports a number of speech recognition. Check out the ASR section for installation instructions. 

In general, here are the steps to set up a speech recognition:

1. Install the dependencies
2. Edit the configurations of the ASR you use in `conf.yaml`. You can usually change the language or model there if supported.
3. Set `ASR_MODEL` to the ASR of your choice.

As of writing, this project supports the following ASR:

- [FunASR](https://github.com/modelscope/FunASR), which support [SenseVoiceSmall](https://github.com/FunAudioLLM/SenseVoice) and some other models. (~~Local~~ Currently requires an internet connection for loading. Compute locally)
- [Faster-Whisper](https://github.com/SYSTRAN/faster-whisper) (Local)
- [Whisper-CPP](https://github.com/ggerganov/whisper.cpp) using the python binding [pywhispercpp](https://github.com/abdeladim-s/pywhispercpp) (Local, mac GPU acceleration can be configured)
- [Whisper](https://github.com/openai/whisper) (local)
- [Azure Speech Recognition](https://azure.microsoft.com/en-us/products/ai-services/speech-to-text) (API Key required)


## Step 6: Setup TTS

See [Text to Speech](../TTS) for detailed setup instructions. Supported options include py3-tts, Bark, CosyVoice, MeloTTS, Edge TTS, and Azure Text-to-Speech.

Set `TTS_MODEL` in `conf.yaml` to your chosen TTS.

## Step 7: Run the Program

For Live2D mode:

1. Run `server.py`
2. Open `localhost:12393` (or the port specified in `conf.yaml`) in your browser
3. Wait for the Live2D model to load
4. Start talking

For CLI mode without Live2D:

- Run `main.py`


# Configuration Tips

Key settings in `conf.yaml`:

- `LIVE2D`: Enable/disable Live2D interface
- `VOICE_INPUT_ON`: Enable/disable voice input
- `MIC_IN_BROWSER`: Use browser microphone (important for remote server access)
- `TTS_ON`: Enable/disable text-to-speech
- `SAY_SENTENCE_SEPARATELY`: Control TTS behavior
- `PERSONA_CHOICE` and `DEFAULT_PERSONA_PROMPT_IN_YAML`: Customize AI personality
- `HOST` and `PORT`: Configure server settings
- `VERBOSE`: Enable detailed logging

:::note
Some models will be downloaded during the first launch, which may take a while.
:::
