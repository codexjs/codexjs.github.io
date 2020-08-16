# Vuefolio

Vuefolio is a statick webpage converted in to a dynamic webpage using VueJs.

## What makes Vuefolio special?

The interisting thing about this project is how the components are made, all of them can be changed just changing one file letting you make a entire new webpage just changing some variables, even the routing is dynamic.

In all the pages you can find a edit button which let you change this variables letting you experiment with the dynamic components.

You can learn more about how this works in the documentation above.

## The purpose of this project?

The main purpose of this project was to learn more about VueJs, the original idea was to make a portfolio that is easy to edit and scale, and end up beeing a editable dynamic components museum.

## Documentation

### env.js

If you decide to download the project you can see that changing the entire webpage is as simple as change the file env.js just changing the variables inside that file.
You will be able to create a complete new webpage with the content that you want just changing this variables.

### Edit Button

Every page has an Edit button which let you change practically everything you see on the screen, all the changes that you make are just local changes, that mean's that if you reload the page or go to another one the values will return to it's original values.

### Home

In the Edit Home Menu you can find 3 options:

- Home - Let you edit the Home Config object.
- First Message - Let you edit the first message of the page.
- Second Message - Let you edit the array of messages of the second message. (This message was made with typed.js)

#### firstMssg

This property change the first title text in the page.

```js
{
    firstMssg: "Hi,", // String
}
```

#### mssgArray

An array of messages to config typed.js

```js
{
  // Array of String
  mssgArray: ["Welcome", "To this page"];
}
```

### Works

In the Edit Work Menu you will find at least the Works Button which let you edit the entire config object and also the list of all the projects / works in the Works Config Object.

> ⚠️ Whe changes that you make in the Works Config is going to change the menu options depending on current value.

I encourage you to play with the objects and see how easy is to add delete or changes any object and see the change reflected on the screen.

#### Work Options

Inside the works object you will find all the works objects created at the moment, you can config this object whit:

#### title

This property change the title of that "work" in the carousel and also in the page.

```js
{
  title: "Project example"; // String
}
```

#### description

This property change the description showed in the carousel.

```js
{
  description: "Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper."; // String
}
```

#### image

> ⚠️ This option is just useful in env.js file letting you changing the image fast.
> The image that is going to charge for that work.

```js
{
  image: "work01-hover.jpg"; // String
}
```

#### content

In this property I'm going to introduce you the DynamicText component which is a simple component which let you show a title or a text depending on a configuration where you have two parameters type and content:

##### DynamicText.type:

This parameter let you chose what type of text you want to create:

- In order to create a big title (h1) set this property to "title"
- In order to create a middle title (h2) set this property to "title2"
- In order to create a small title (h3) set this property to "title3"
  If the value is empty or none on the listed above the component is going to create a simple text (p)

##### DynamicText.content

Just the property to specify what text do you want to show.

> ⚠️ You can also just set a string instead of creating an object, the component will create a simple text.

Inside of the content property you need an Array of DynamicText Config Objects or strings.

```js
{
  content: [
    {
      type: "title3",
      content: "Consectetur adipiscing elit",
    },
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at sem quis varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultrices hendrerit nisl.",
  ];
}
```

### About Me

This Menu work the same as The Works Menu, you will always find the About Me option which let you change the About Me Config Object and also the list of all current properties inside the About Me Config Object.

The configuration of this object works exactly as the content property on the Work section, the difference is that here you have to specify a key for the DynamicText Config.

```js
// About Me Object example
{
  title1: {
    type: "title3",
    content: "Consectetur adipiscing elit"
  },
  text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at sem quis varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultrices hendrerit nisl."
}
```

### Contact

In this page you will find a simple Contact form, information and social media buttons.
In this moment you can only change the information or the social media links, you just have to change the value of the property that you want to change.

```js
{
    phone: "+34 000 00 00 00", // String
    email: "example@portfolio.com", // String
    location: "Spain", // String
    social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
    }
}
```

Also you can click in a specific option and change it.
"Phone", "Email", "Location" can be just strings and social must be an object as showed in the example above.

### The Editor

In the editor you have 3 options:

- The left button (Format the text in the editor)
- The Edit button (Edit the selected object to the value in the textbox)
- The right button (Set the value of the selected object to it's original value)

### env.js file

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

## License

MIT
