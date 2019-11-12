# Brakkit

Brakkit is a Reddit-style news aggregation app that utilises the wisdom of the crowds by prioritising content that has been upvoted. 

The app has three main topics - Football, Coding and Cooking. The user is able to filter through these topics, or by default, display them all. The app also allows for sorting by date and popularity.

The app will always by default be logged in as user <b>jessjelly</b>, meaning any votes and/or comments made will be by said user. The user also has the ability to delete their own comments.

The hosted version can be found at:

[https://brakkit-fks.netlify.com/](https://brakkit-fks.netlify.com/)

The repo for the RESTful API I built to serve the data can be found here:

[https://github.com/flyingkitlets/be-nc-news](https://github.com/flyingkitlets/be-nc-news)

The hosted version of said API can be found here:

[https://nc-news-tes.herokuapp.com/api](https://nc-news-tes.herokuapp.com/api)

Please follow the instructions below to set up a local copy of this app.

## Step 1

First, you must use your terminal to navigate to a location on your computer where you would like to install the repo. Then, run the following line:

```bash
git clone https://github.com/flyingkitlets/nc-news-brakkit
```

## Step 2

This app has several dependencies for it to function:

- @material-ui/core: ^4.6.0,
- @material-ui/icons: ^4.5.1,
- @reach/router: ^1.2.1,
- @svgdotjs/svg.js: ^3.0.14,
- axios: ^0.19.0,
- chai: ^4.2.0,
- mocha: ^6.2.2,
- netlify-cli: ^2.20.2,
- react: ^16.11.0,
- react-burger-menu: ^2.6.12,
- react-dom: ^16.11.0,
- react-scripts: 3.2.0,
- react-transition-group: ^4.3.0

To install these, run the following line once you have opened the repo in your IDE:

```bash
npm i
```

## Step 3

After all dependencies are installed, you can launch a local version of the app by running: 

```bash
npm start
```

Thanks, I hope you enjoy the app!