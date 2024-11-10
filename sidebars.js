/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'Start/intro',
        'Start/installation-guide',
        'Start/Start',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/llm-backends',
        'features/live2d',
        'features/translation',
      ],
    },
    {
      type: 'category',
      label: 'Speech Recognition',
      items: [
        'ASR/speech-recognition',
        'ASR/Whisper',
        'ASR/WhisperCPP',
        'ASR/GroqWhisperASR',
        'ASR/FunASR',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/memgpt',
        'advanced/mem0',
        'advanced/docker',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/contributing',
      ],
    },
  ],
};

export default sidebars;
