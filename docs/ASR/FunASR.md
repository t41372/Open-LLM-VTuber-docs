---
sidebar_position: 2
---


[FunASR](https://github.com/modelscope/FunASR?tab=readme-ov-file) is a Fundamental End-to-End Speech Recognition Toolkit from ModelScope that runs many ASR models. The result and speed are pretty good with the SenseVoiceSmall from [FunAudioLLM](https://github.com/FunAudioLLM/SenseVoice) at Alibaba Group.

It requires an internet connection on launch _even if the models are locally available_. See https://github.com/modelscope/FunASR/issues/1897

## Installation

Install all the dependencies with `pip install -U funasr modelscope huggingface_hub torch torchaudio`.


## Configuration

#### Switch to FunASR

Go to `conf.yaml` and set the `ASR_MODEL` to `FunASR`.

Just like this

~~~yaml
ASR_MODEL: "FunASR"
~~~








