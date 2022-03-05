# MERN Boilerplate w/ Layout & some basic pages

A MERN Boilerplate for anyone who wants to use it in their browser project.

It comes with a pre-set, responsive navigation, and basic pages.  The pages include the home/landing page, about, and contact pages, all will be blank, but they're just there as place holders for the navigation.  

Everything can be edited to suit your preferences.  I just made this one so I don't have to keep remaking it for my MERN browser projects. 

## Features
  - Google Fonts: I used poppins for this one, but you can change it. 
  - Express Server that listens on port set both on the server.js file & .env config for dotenv
  - Preset directories set up for controllers, routes, models, and config
  - create-react-app frontend 
  - scripts preset (see package.json)
  - React-router v6 route setup
  - Responsive Navigation
  - customizable
  - scalable 

## Acknowledgements
 - [Brad Traversy Udemy Course](https://www.udemy.com/share/101WIo3@66V0VcDfhzVyIAwG7vHEEqVFlCTus0K5Xr-gbkQw4sPXwdNZTH9cpdHmAwsKxhv6/)
 - [Academind Udemy Course](https://www.udemy.com/share/102g8S3@994-m03A3GqD84iBhDN-9po4Brn6wzAILBrp114OZ445cXFa2XdY70x4FaEcjJx9/)
 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## Generate Favicons

  1. [Generate your favicon files](https://realfavicongenerator.net/)
  2. Extract the package download into "./frontend/public" directory
  3. Insert the given code into the head section of the "./frontend/public/index.html" file


## Google Fonts

-[Google Fonts](https://fonts.google.com/) 
You can choose your fonts, then insert the code into the head section of the "./frontend/public/index.html" file


## DotEnv & Environment Variables

-[DotENV NPM](https://www.npmjs.com/package/dotenv)
Add your environment variables to the .env file.  See the 'env.md' file in '/backend/config/env.md'.  

## Install dependencies 

```
npm install
cd frontend
npm install
```

## Run Project

  ### frontend

  ```npm run frontend```

  ### backend

  ```npm run server```

  ### dev Concurrently run front and back

  ```npm run dev```

## Proxying API requests

(Proxying API requests in development)[https://create-react-app.dev/docs/proxying-api-requests-in-development/]
