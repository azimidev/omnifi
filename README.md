# omnifi

## Description

-   I have used _Vue standard library_ with a few components to achieve this.
-   I have used _Google Maps_ along with my own Google API Key as Google Maps implementation needs an API key to work with. I usually use `.env` file for environment variables for that but since you cannot have access to environment files via GitHub as they are ignored in `.gitignore` files, I just pasted the key in `main.js` file for you to use.
-   I have pulled Axios to work with your API endpoint in AWS but because of [CORS issue (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) I downloaded the JSON file and placed it in `api` directory. However, the concept is the same. You can uncomment my comments in `App.vue` file and see how I would achieve this with Axios if there was no CORS issue.
-   I could have used Vuex, Nuxt-SSR, Jest and typescript but this test was builed with standard Vue library which can be installed with `@vue-cli` version 3.
-   _I can build this with Vanilla Javascript and jQuery without any frameworks. Please let me know if you want me to do that._

# Requirements

-   [x] Web application must run in Google Chrome on desktop and Safari on mobile.
-   [x] Application loads the map data from an external endpoint.
-   [x] The app must display a map with a pin for each location in the remote JSON feed using ​latitude​ and ​longitude​ from the feed.
-   [x] Once a pin is tapped the popup should show the country ​name​ from the feed. _(Displayed country name + capital)_
-   [x] You are allowed to use any 3rd party libraries you prefer to help carry out the task - please look to follow best practices around any 3rd party libraries you utilise. _(Used vue2-google-maps)_

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
