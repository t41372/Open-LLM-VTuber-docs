---
sidebar_position: 1
---

# MemGPT Integration

:::warning
MemGPT integration is experimental and requires significant setup. It also requires a powerful LLM (larger than 7B and quantization above Q5), which means slower response times.
:::

:::caution
MemGPT has been renamed to Letta and made significant API changes. The current integration may be broken until updated.
:::

## Overview

[MemGPT](https://github.com/cpacker/MemGPT) enables LLM with long-term memory capabilities. It allows the LLM to:
- Remember past conversations
- Maintain context over long periods
- Access external data sources

## Setup Requirements

1. Install MemGPT in a separate environment due to dependency conflicts
   ```bash
   # Use a separate virtual environment or Docker
   pip install memgpt
   ```

2. Configure MemGPT according to their [documentation](https://memgpt.readme.io/docs/index)

3. Launch the MemGPT server:
   ```bash
   memgpt server
   ```

## Configuration Steps

1. Set up an agent through MemGPT's CLI or web UI
2. Add your system prompt including:
   - Live2D Expression Prompt
   - Expression keywords from `model_dict.json`
3. Configure Open-LLM-VTuber:
   - Copy server admin password and Agent ID to `./llm/memgpt_config.yaml`
   - Set `LLM_PROVIDER: "memgpt"` in `conf.yaml`

:::note
When using MemGPT, all other LLM-related configurations in `conf.yaml` are ignored.
::: 