# SocRob@Home Website

Single-page application for the SocRob@Home team, built with [Nuxt 3](https://nuxt.com/) and [Vuetify](https://vuetifyjs.com/), and hosted on [GitHub Pages](https://github.com/IRS-group/socrobwebsite).

[Check the website](https://irs-group.github.io/socrobwebsite/)

## Introduction

This project is a single-page website developed to showcase the SocRob@Home team, built using Nuxt 3 for its powerful SSR and static site generation capabilities and Vuetify for UI components.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/IRS-group/socrobwebsite.git
   cd socrobwebsite

2. **Install Dependencies**: Make sure you have Node.js installed, then install project dependencies by running:
    ```bash
   npm install

3. **Nuxt Configuration**:
- No additional configuration is required for initial setup.
- Ensure that nuxt.config.ts has the correct baseURL and buildAssetsDir settings for local testing and deployment (explained below).


## Edit & Test Locally

The project is modular, with each section of the site divided into Vue components for easier navigation and editing.

1. **Local Development**:
- To start the project locally, first remove (or comment out) the following lines in ```nuxt.config.ts```:
    ```bash
   app: {
        baseURL: '/socrobwebsite/',  // Adjust this to match your GitHub Pages repo name
        buildAssetsDir: 'assets'
    }
- Then run:
    ```bash
   npm run dev
- The website will be accessible at http://localhost:3000/.

2. **Testing & Content Editing**:
- You can edit content in the respective component files within the ```components/``` directory.
- Save your changes to see them automatically reflected at ```http://localhost:3000/```.

3. **Note on Image Paths & Deployment**:
- During deployment, we encountered issues with image paths, especially when looping over arrays using ```v-for```. To address this, we replaced looped image handling with individual statements. This temporary workaround will be improved in future versions.



## Deployment

We use GitHub Pages to host the website. Deployment involves generating the static site files and pushing them to the ``gh-pages `` branch.

1. **Deployment Configuration**:
- Uncomment (or add back) the following lines in ```nuxt.config.ts``` before deployment:
     ```bash
    app: {
        baseURL: '/socrobwebsite/',  // Adjust this to match your GitHub Pages repo name
        buildAssetsDir: 'assets'
    }

2. **Generate & Deploy**:
- To prepare and deploy the site, run:
    ```bash
    npm run generate
    npm run deploy

3. **Check Deployment Status**:
- The website takes a few minutes to deploy. You can monitor the deployment status on [GitHub Pages settings](https://github.com/IRS-group/socrobwebsite/settings/pages). For additional deployment details, click on "Last deployed" for logs.

4. **Helpful Resources**: We used the following tutorials to set up GitHub Pages deployment for Nuxt 3:
- [lucpotage/nuxt-github-pages](https://github.com/lucpotage/nuxt-github-pages)
- [darioTecchia/nuxt3-ghpages](https://github.com/darioTecchia/nuxt3-ghpages/tree/main)
- [Alejandro Suárez's Blog](https://alejandrosuarez.eu/blog/how-to-deploy-nuxt3-app-in-github-pages/)



## Future Work
- [ ] Fix night mode display issues
- [ ] Resolve image path and ```v-for``` issues on deployment
- [ ] Improve the "Publications" section with better styling and layout