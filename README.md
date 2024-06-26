# PWA: Text Editor

# Description

This is a text editor that is a single-page application meeting PWA criteria and deployed on Render. Starting with an existing application, methods have been implemented for getting and storing data to an IndexedDB database.

# Table of Contents

- [Description](#description)
- [The Challenge](#the-challenge)
- [Technologies-Used](#technologies-used)
- [Installation](#installation-instructions)
- [Author](#the-author)

# The Challenge

## User Story

        AS A developer
        I WANT to create notes or code snippets with or without an internet connection
        SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

        GIVEN a text editor web application
        WHEN I open my application in my editor
        THEN I should see a client server folder structure
        WHEN I run `npm run start` from the root directory
        THEN I find that my application should start up the backend and serve the client
        WHEN I run the text editor application from my terminal
        THEN I find that my JavaScript files have been bundled using webpack
        WHEN I run my webpack plugins
        THEN I find that I have a generated HTML file, service worker, and a manifest file
        WHEN I use next-gen JavaScript in my application
        THEN I find that the text editor still functions in the browser without errors
        WHEN I open the text editor
        THEN I find that IndexedDB has immediately created a database storage
        WHEN I enter content and subsequently click off of the DOM window
        THEN I find that the content in the text editor has been saved with IndexedDB
        WHEN I reopen the text editor after closing it
        THEN I find that the content in the text editor has been retrieved from our IndexedDB
        WHEN I click on the Install button
        THEN I download my web application as an icon on my desktop
        WHEN I load my web application
        THEN I should have a registered service worker using workbox
        WHEN I register a service worker
        THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
        WHEN I deploy to Render
        THEN I should have proper build scripts for a webpack application

# Technologies Used

- The application will use the following npm packages:

        npm install express (express.js)
        npm install --save-dev webpack (Webpack)
        npm install webpack-dev-server --save-dev (webpack-dev-server)
        npm install --save-dev webpack-pwa-manifest (WebpackPwaManifest)
        npm install babel (Babel)
        npm install --save-dev css-loader (CSS-loader)
        npm install concurrently --save (run multiple commands concurrently.)
        npm npm install idb (IndexedDB)

# Installation Instructions

- To initiate the application, first install the required npm packages
- Then run the following command in your terminal:

        npm run start

- Under the client side folder, a "dist" folder will automatically populate. Open the "index.html" file in the dist folder to start using your text editor!

- You can visit the Live Application through Render [HERE](https://pwa-text-editor-oicu.onrender.com/)

# The Author

My Github profile is Linked Here! Additional questions or concerns? feel free to contact me at toshiemaraki@gmail.com.
