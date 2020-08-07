<div align="center">
    <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1596482182/Omnistack/ykcfotyon6sacurdvht3.svg" width="300px"/>
</div>

<br />

<h2 align="center">
   📚 NextLevelWeek 2.0 📚
</h2>

<p align="center">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/count/StefanoSaffran/proffy?color=6842C2">
   <img alt="Repository size" src="https://img.shields.io/github/repo-size/StefanoSaffran/proffy?color=6842C2">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/StefanoSaffran/proffy?color=6842C2">
  <img alt="Made by Stefano" src="https://img.shields.io/badge/made%20by-StefanoSaffran-%20?color=6842C2">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/StefanoSaffran/proffy?color=6842C2">
  <img alt="GitHub license" src="https://img.shields.io/github/license/StefanoSaffran/proffy?color=6842C2">
</p> 

<p align="center">
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Get in touch</a>
  </p>

  <p align="center">🚧 Under Construction 🚧</p>

## :computer: Project 

 Proffy is an application that aims helping to bring together people who need help in some subject with those who like to teach.

 ## :rocket: Built with

This project was developed with the following technologies:

<details>
  <summary>Server</summary>

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [TypeORM](https://typeorm.io/)
-   [Typescript](https://www.typescriptlang.org/)
-   [TS-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
-   [Tsyringe](https://github.com/microsoft/tsyringe)
-   [uuidv4](https://www.npmjs.com/package/uuidv4)
-   [Cors](https://www.npmjs.com/package/cors)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Web</summary>

-   [React](https://pt-br.reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [@unform](https://unform.dev/)
-   [Styled Components](https://styled-components.com/)
-   [Context API](https://reactjs.org/docs/context.html)
-   [React-toggle](https://github.com/aaronshaf/react-toggle)
-   [Axios](https://www.npmjs.com/package/axios)
-   [React Icons](https://react-icons.netlify.com/#/)
-   [Yup](https://github.com/jquense/yup)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Mobile</summary>

-   [React](https://pt-br.reactjs.org/)
-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.io/learn)
-   [Styled Components](https://styled-components.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [React Navigation](https://reactnavigation.org/)
-   [Axios](https://www.npmjs.com/package/axios)
-   [Expo Google Fonts](https://github.com/expo/google-fonts)
-   [React Native Appearance](https://github.com/expo/react-native-appearance)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

## :information_source: How to run

### Requirements

To run the application you will need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) 

I strongly recommend using [Docker](https://www.docker.com/) to run the databases.
<br>
If you decide to use docker, follow this steps to install and run the docker image.

```bash
# install Postgres image (if you don't specify an username it will be postgres by default)
$ docker run --name imagename -e POSTGRES_PASSWORD=yourPassword -p 5432:5432 -d postgres

# start Postgres
$ docker start imageName

```
### Backend

Now clone the repository and install the dependencies.
```bash
# to clone the repository
$ git clone https://github.com/StefanoSaffran/proffy.git

# go into the server folder
$ cd proffy/server

#install the backend dependencies
$ yarn

```
In order to connect to the database, you will need to enter the access informations into a ormconfig.json. You can find more about it [here](https://typeorm.io/#/using-ormconfig).

```bash
# run migrations
$ yarn typeorm migration:run

# run api
$ yarn dev:server
```

### Frontend

```bash
# in another tab of the terminal install the web dependencies and run it 
$ cd web
$ yarn
$ yarn start
```

### Mobile

The Application was developed using Expo. It is a free and open source toolchain built around React Native to facilitate the process of running and testing applications. [Click here](https://expo.io/learn) to get start with Expo.

```bash
# install the dependencies
cd mobile
yarn
```

```bash
# to run the app
yarn start
```

Expo will open a page in your browser, scan the QRcode on the page and wait for the app to load.

> The Application was developed and tested on Iphone 6s and Android Studio Emulator.

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/StefanoSaffran/proffy/blob/master/LICENSE) for more information

## :mailbox_with_mail: Get in touch!

<a href="https://stefanosaffran.com" target="_blank" >
  <img alt="Website - Stefano Saffran" src="https://img.shields.io/badge/Website--%23F8952D?style=social">
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/stefanosaffran/" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:stefanoas@gmail.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 

---

Made with :coffee: and ❤️ by Stefano Saffran.