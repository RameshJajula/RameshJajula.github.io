<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/156ec2e5-044b-4b9a-8a9b-f609aa522b0e

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Build

1. Build a production version:
   `npm run build`

## Deployment (GitHub Pages)

This repository is configured to deploy with GitHub Actions when pushed to the `main` branch.

1. Push your changes to `main`.
2. In GitHub, go to `Settings > Pages` and set Source to `GitHub Actions`.
3. Wait for the `Deploy to GitHub Pages` workflow to finish.
4. Open: `https://rameshjajula.github.io`
