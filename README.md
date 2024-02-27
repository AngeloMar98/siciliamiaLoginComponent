# Siciliamia Login Component
This the login component created using Tailwind and React. You can see the live site [here](https://siciliamia-login-component.vercel.app/)
## Instructions
If you want to take a look at the site, the live is up. But if you want to have the project on your computer you can either download the zip or
clone the repository. The techonologies I use ared Tailwind and React, so make sure to run ```npm i``` after you open the project in your code editor
to install all the dependencies.

After that you can run two commands to get tailwind and react to work:

```npm run tw```

```npm run start```

And the live server will start in the browser.
## Structure
The folder is structered really simply, at the root you have the configurations files, src contains all the javascript and CSS files and public contains
the HTML and resources such as images and icons.
The heart of the projects is the LoginBox.js, so it's better to start from there and read the explanations for every javascript file as you progress.

Other than that, it's a simple form that checks for two fields. On the click of the submit button the event is fired, if either of the two fields are valid you can't
progress further and an error message is displayed. 
