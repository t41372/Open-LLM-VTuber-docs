---
sidebar_position: 2
---



Welcome, my guest.



This is [Open-LLM-VTuber](https://github.com/t41372/Open-LLM-VTuber), an application that allows you to talk to any LLM by voice (hands free) locally with a Live2D talking face.



> ⚠️ This project is in its early stages and is currently under **active development**. Features are unstable, code is messy, and breaking changes will occur. The main goal of this stage is to build a minimum viable prototype using technologies that are easy to integrate.

> ⚠️ If you want to run this program on a server and access it remotely on your laptop, the microphone on the front end will only launch in a secure context (a.k.a. https or localhost). See [MDN Web Doc](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). Therefore, you might want to either configure https with a reverse proxy or launch the front end locally and connects to the server via websocket (untested). Open the `static/index.html` with your browser and set the ws url on the page.



⚠️ This project is not very easy to setup at this moment. The modularity and the fact that this is a Python project that uses a ton of AI stuffs that needs to be executed locally creates a lot of headaches. I'm working on an installation script with recommended configuration to simplified the process, but it's not complete yet.



## Prerequisite

Have `ffmpeg` installed on your computer.



### Basic knowledge

All of the settings are in `conf.yaml`. You can (and probably will) do many things there, and there are also comments in that file explaining what those settings mean.



## Setup steps

1. Clone the repo
2. [optional] create a virtual environment like conda or venv for this project
3. Install *basic* dependencies with `pip install -r requirements.txt`
4. Setup the LLM
5. Setup your desired ASR (Automatic Speech Recognition)
6. Setup your desired TTS (Text to Speech)
7. Run it





## Step 1: Clone the repo

Find a good spot in your computer and clone the repository

~~~sh
git clone https://github.com/t41372/Open-LLM-VTuber
~~~

Nice. ~~now go to github and star this project if you haven't done so or you'll &*&Eujehruedjhnoeire4939*#pE$~~



## Step 2: [optional] Create a virtual environment for this project

It is optional, yet I *highly* recommend you to create a virtual environment for this project.

This project was developed using Python `3.10.13`. Python 3.11 is tested. Some other versions will probably work too, but they are untested.

#### If you don't know what virtual environment is, here is a quick explaination:

> A Python virtual environment (venv) is a folder that contains the Python interpreter, third-party libraries, and other scripts. Venvs are isolated from other virtual environments, so changes to dependencies don't affect other virtual environments or system-wide libraries.
>
> -- [dataquest](https://www.dataquest.io/blog/a-complete-guide-to-python-virtual-environments/)

#### Why?

The reason why I highly recommend you use a virtual environment for this project is because this will make your life a ton easier. This project uses a lot of dependencies, and dependency conflicts happen very often. Use a virtual environment to isolate them saves your hair.

#### Venv

If you don't know what conda is, we can use `venv`, which is built in to python and is pretty nice.

~~~bash
# create a virtual environment
python -m venv open-llm-vtuber
~~~

To activate the virtual environment, run the following command:

**On Windows**

```bash
myenv\Scripts\activate
```

**On macOS/Linux**

```bash
source myenv/bin/activate
```



#### or conda

If you know what conda is, then you know what to do. Here is the command I personally use. If you don't know what conda is, I recommend you use `venv`.

~~~sh
# create a conda environment in project directory
conda create -p ./.conda python="3.10.4"
# activate this environment
conda activate ./.conda
~~~





## Step 3: Install basic dependencies

Run the following in the root directory of this project to install the dependencies.

~~~shell
pip install -r requirements.txt # Run this in the project directory
~~~





## Step 4: Set up the LLM

You need to have [Ollama](https://github.com/jmorganca/ollama) or any other OpenAI-API-Compatible backend ready and running. You can use llama.cpp, vLLM, LM Studio, groq, OpenAI, and so much more. 

#### MemGPT

If you want to use long-term memory with MemGPT, you will set MemGPT as your LLM backend instead of the ones mentioned above. Check out MemGPT section for more information (it's not very easy unless you already know how to run MemGPT, so I recommend you start with ollama or other OpenAI-Compatible LLM backend instead).



#### Ollama and OpenAI Compatible LLM Backend

Prepare the LLM of your choice and have the LLM inference server like ollama running. 

In `conf.yaml` file, under the option `ollama`, you can edit the configuration for all OpenAI Compatible LLM inference backend.

Here is the setting in `conf.yaml`

~~~yaml
#  ============== LLM Backend Settings ===================

# Provider of LLM. Choose either "ollama" or "memgpt" (or "fakellm for debug purposes")
# "ollama" for any OpenAI Compatible backend. "memgpt" requires setup
LLM_PROVIDER: "ollama"


# Ollama & OpenAI Compatible inference backend
ollama:
  BASE_URL: "http://localhost:11434/v1"
  LLM_API_KEY: "somethingelse"
  ORGANIZATION_ID: "org_eternity"
  PROJECT_ID: "project_glass"
  ## LLM name
  MODEL: "llama3.1:latest"
  # system prompt is at the very end of this file
  VERBOSE: False

~~~

If you don't use `LLM_API_KEY`, `ORGANIZATION_ID`, and `PROJECT_ID`, just leave them as it is.



If you are so excited right now that you want to try this project without voice interactions, you can set `LIVE2D`, `VOICE_INPUT_ON`, and `TTS_ON` to `False` in the `conf.yaml` to talk with the LLM by typing with no voice nor Live2D. Remeber to turn them back on later on.



## Step 5: Set up Automatic Speech Recognition (ASR)

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

#### Some recommendations:

If you don't care it connects to the internet on launch (will be fixed in the future), I recommend FunASR with SenseVoiceSmall. It's very fast and the accuracy is pretty good.

If you want something that works offline, I recommend Faster-Whisper if you have an Nvidia GPU, and Whisper-CPP with coreML accleration if you are using macOS.

You can also use Azure Speech Recognition if you happen to have the API key.



>  ⚠️  If you want to run this application (the server) inside a container or on a remote machine and access the webui with local device, you need to turn `MIC_IN_BROWSER` to True in the `conf.yaml`. There are more things you need to consider and it's at the top of this page.





## Step 6: Set up Text-To-Speech (TTS)

Check out TTS section for instruction of setting up the TTS you want.

In general, here are the steps to set up a text to speech service:

1. Install the dependencies
2. Edit the configurations of the TTS you use in `conf.yaml`. You can usually change the language or speakers there if supported.
3. Set `TTS_MODEL` to the TTS of your choice.

Here are some supported TTS as of writing:

- [py3-tts](https://github.com/thevickypedia/py3-tts) (Local, it uses your system's default TTS engine)
- [bark](https://github.com/suno-ai/bark) (Local, very resource-consuming)
- [CosyVoice](https://github.com/FunAudioLLM/CosyVoice) (Local, very resource-consuming)
- MeloTTS (local, fast)
- [Edge TTS](https://github.com/rany2/edge-tts) (online, no API key required)
- [Azure Text-to-Speech](https://azure.microsoft.com/en-us/products/ai-services/text-to-speech) (online, API Key required)





## Step 7: Run the program

For now, if you are using live2D and everything we mentioned above, here are the steps to run the program:

1. Run `server.py`
2. Open `localhost:8000` with your browser
3. Run `main.py`

The launch process will be changed and simplified very soon.

Some related settings in `conf.yaml` you might be interested:

- Turn off the live2D (and the webui so you don't need the server.py) at `LIVE2D`
- Turn off Speech Recognition and start typing in the terminal at `VOICE_INPUT_ON`
- Let the mic listen in the browser instead of the terminal at `MIC_IN_BROWSER`
- Turn off TTS at `TTS_ON`
- Get TTS speaks everything at once at `SAY_SENTENCE_SEPARATELY`
- Change/Edit persona prompt at `PERSONA_CHOICE` and `DEFAULT_PERSONA_PROMPT_IN_YAML`
- Change the host and port that the server is listening to at `HOST` and `PORT`
- and `VERBOSE`



Run `main.py` with Python. Some models will be downloaded during your first launch, which may take a while.











