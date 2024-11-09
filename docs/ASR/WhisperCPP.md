---
sidebar_position: 5
---


`WhisperCPP` (local) (runs super fast on a Mac if configured correctly)

If you are on a Mac, read below for instructions on setting up WhisperCPP with coreML support. If you want to use CPU or Nvidia GPU, install the package by running `pip install pywhispercpp`.

The whisper cpp python binding. It can run on coreML with configuration, which makes it very fast on macOS.

On CPU or Nvidia GPU, it's probably slower than Faster-Whisper





WhisperCPP coreML configuration:

- Uninstall the original `pywhispercpp` if you have already installed it. We are building the package.
- Run `install_coreml_whisper.py` with Python to automatically clone and build the coreML-supported `pywhispercpp` for you.
- Prepare the appropriate coreML models.
  - You can either convert models to coreml according to the documentation on Whisper.cpp repo
  - ...or you can find some [magical huggingface repo](https://huggingface.co/chidiwilliams/whisper.cpp-coreml/tree/main) that happens to have those converted models. Just remember to decompress them. If the program fails to load the model, it will produce a segmentation fault.
  - You don't need to include those weird prefixes in the model name in the `conf.yaml`. For example, if the coreML model's name looks like `ggml-base-encoder.mlmodelc`, just put `base` into the `model_name` under `WhisperCPP` settings in the `conf.yaml`.