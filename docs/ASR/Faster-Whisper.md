---
sidebar_position: 3
---


Whisper, but faster. On macOS, it runs on CPU only, which is not so fast, but it's easy to use.

For Nvidia GPU users, to use GPU acceleration, you need the following NVIDIA libraries to be installed:

-  [cuBLAS for CUDA 12](https://developer.nvidia.com/cublas)
-  [cuDNN 8 for CUDA 12](https://developer.nvidia.com/cudnn)

Or if you don't need the speed, you can set the `device` setting under `Faster-Whisper` in `conf.yaml` to `cpu` to reduce headaches.