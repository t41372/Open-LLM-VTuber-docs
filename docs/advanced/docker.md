---
sidebar_position: 3
---

# Docker Support

:::warning
Docker support is highly experimental but functional in most cases.
:::

## Docker Image

You can either:
- Build the image yourself
- Pull from Docker Hub: [![](https://img.shields.io/badge/t41372%2FOpen--LLM--VTuber-%25230db7ed.svg?logo=docker&logoColor=blue&labelColor=white&color=blue)](https://hub.docker.com/r/t41372/open-llm-vtuber)

## Current Limitations

- Large image size (~20GB)
  - Additional space needed for optional model downloads
- Nvidia GPU required (GPU passthrough limitation)
- Requires [Nvidia Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
- Some models require re-download after container stop
- Cannot build on ARM machines due to grpc dependency issues
- Requires HTTPS for remote server deployment due to web mic security requirements

## Setup Guide

1. Review `conf.yaml` before building (currently burned into image)

2. Build the image:
```bash
docker build -t open-llm-vtuber .
```

3. Get configuration file:
   - Download `conf.yaml` from the repository
   - Or use this [direct link](https://raw.githubusercontent.com/t41372/Open-LLM-VTuber/main/conf.yaml)

4. Run the container:
```bash
docker run -it --net=host --rm \
  -v $(pwd)/conf.yaml:/app/conf.yaml \
  -p 12393:12393 \
  open-llm-vtuber
```

5. Open `localhost:12393` to test

:::note
Bark TTS and original OpenAI Whisper are not included by default due to size (~8GB). Add `--build-arg INSTALL_ORIGINAL_WHISPER=true --build-arg INSTALL_BARK=true` during build to include them.
::: 