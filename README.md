# Vuefolio

## env.js file

In this file is where all the configuration objects of the entire webpage are stored.
Here you can change and personalize the webpage as you like just changing the value of the objects as you wish.

In this file you will find objects with properties like "name" or "show" this properties are for customize menu and the dynamic routes.

#### homeConfig

This object store all the configuration of the Home Page

- The routing and menu configuration ("name" and "show")
- The textConfig object configuration.

#### worksConfig

This object store all the configuration of the Works Page

- The routing and menu configuration ("name" and "show")
- The property "text" wich is the text to display in the Works page.
- ##### projectsConfig
  - This object is the default projects configuration with 8 empty projects and the first one with a mockup example (contentExample)
- And last but not least the children configuration for the routing.

#### aboutConfig

This object store all the configuration of the About Me Page

- The routing and menu configuration ("name" and "show")
- The image to show in the page
- And the property "content" where you can set the text of the "About Page" as I explained before

#### contactConfig

This object store all the configuration of the Contact Page

- The routing and menu configuration ("name" and "show")
- And the property config where you can set the configuration of the contact information as I explained before.

#### templateConfig

This last object is one of the most important objects in order to make this webpage work.
The dynamic routes are going to be generated based on the content in this object using the key's as the path and the property name to specify which component charge, also if the property "children" exist it will be added too.

You can check how this works in the index.js where you can find the code to make the routing object.

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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).