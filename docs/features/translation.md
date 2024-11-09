---
sidebar_position: 5
---

# Translation

Open-LLM-VTuber supports translation to allow the LLM to speak in a different language than the conversation language. For example, you can:
- Have the LLM think in English
- Display English subtitles
- Speak to it in English
- But have it respond in Japanese audio

This is achieved by translating the text before audio generation.

## DeepLX Translation

Currently, DeepLX is the only supported translation backend. More providers will be implemented in the future.

### Enabling Translation

1. Set `TRANSLATE_AUDIO` to `True` in `conf.yaml`
2. Configure `DEEPLX_TARGET_LANG` to your desired language
   - Make sure this matches your TTS speaker's language
   - For example, if `DEEPLX_TARGET_LANG` is "JA" (Japanese), the TTS should be configured for Japanese speech

:::tip
This feature is useful for creating multilingual VTubers or practicing language learning!
::: 