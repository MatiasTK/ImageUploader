<h1 align="center">Image Uploader Challenge</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://matiastk-image-uploader.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
  - [Demos](#demos)
  - [Important note about file uploading](#important-note-about-file-uploading)
- [Features](#features)
- [How To Use](#how-to-use)

<!-- OVERVIEW -->

## Overview

![Main](https://i.imgur.com/DBfZEFJ.png)

![Uploading](https://i.imgur.com/zaoFWAS.png)

![Success](https://i.imgur.com/4eMH1NJ.png)

This is a fullstack challenge, the goal is to create a simple image uploader app with its own API.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs)

### Demos

- [API Demo](https://matiastk-image-uploader.herokuapp.com/)
- [Web Demo](https://matiastk-image-uploader.netlify.app/)

### Important note about file uploading

Because the api is hosted in [Heroku](https://www.heroku.com/) each dyno uses [Ephemeral System](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem) meaning the uploaded images are temporary and will last until dyno lifetime.

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) and [PNPM](https://pnpm.io/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Run the server
$ cd server
$ pnpm install
$ pnpm run build
$ pnpm start

# Run the app
$ cd client
$ pnpm install
$ pnpm run build
$ pnpm run preview
```

**Note: In order to use the local server API you need to change the .env `VITE_API_URL` to your local server URL**.
