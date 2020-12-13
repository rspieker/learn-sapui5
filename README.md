# Learning UI5

This is my playground project following tutorials and trying things out.

## Bootstrapping

If you're not interested in using this project (and rightfully so), but just want the bare minimum to get started, these are the steps to reproduce a working ui5 environment

### Create the base project

You will need a local installation of [node.js](https://nodejs.org/), try to be a recent version (latest current or LTS). 
For package management we'll be using `npm` that comes along with node.js, if you prefer `yarn` you can probably derive the command from the `npm` examples on your own.

```bash
$ mkdir your-project
$ cd your-project
$ npm init -y
```

### Install dependencies

```bash
$ npm install --save-dev @ui5/cli
```

### Start using version control

Having version control allows you to keep track of your progress easily, with the added benefit that you will be able to start over from a certain point in time (okay, if the progress was committed, the frequency is on you).

```bash
$ git init
```

### Create some `npm` scripts

I prefer to have any installed command to reside in a separate script category and then combine multiple ones as needed in new commands, this way the commands are easier to keep in line across different projects with different installed commands.

In the `package.json`, there is a `scripts` section, which I made to look like this:

(note that the `"test": "..."` was generated by `npm init`, we will be keeping it here)

```json
"scripts": {
	"dev:ui5": "ui5 serve",
	"dev": "npm run dev:ui5",
	"test": "echo \"Error: no test specified\" && exit 1"
},
```

Many tutorials will tell you to run `npm start` or `npm run start`, we haven't added this, so here that would be `npm run dev` or, as the number of commands grows over time `npm run <full-key-name>` (e.g. `npm run dev:ui5`).

If you want to have the `start` command too (which _does_ allow for the shorter `npm start` call) add a line like this:

```json
"start": "npm run dev"
```


### Create the folder structure

UI5 recommends to put everything into a directory `webapp`, as it makes it easier to follow tutorials, we recommend to do the same.

```bash
$ mkdir -p webapp
```

Next we need a file called `ui5.yaml` in the project root, we can ask the `@ui5/cli` to generate this us, as this is a one-off task, we don't create an `npm` script for it.

```bash
$ ui5 init    # initialze the ui5 project
```

The [@ui5/cli init](https://sap.github.io/ui5-tooling/pages/CLI/#ui5-init) will set up a minimal ui5.yaml, so we don't have to worry about it now.

What the `ui5 serve` command also need but isn't generated by `ui5 init` is a file calles `manifest.json`, which also contains information about the project, such as name and version.

The absolute minimum looks like this (where the id can be anything with dot separated words)

```json
{
	"sap.app": {
		"id": "sap.ui.quick-start"
	}
}
```

### Wrapping up

This is probably a good moment to commit what you've done so far in your git version control, first make sure you don't add anything from the node_modules folder that was created during the installation of `@ui5/cli` (and were more things will be added to)

```bash
$ echo node_modules>>.gitignore                    # ignore the node_modules folder
$ git add .gitignore webapp package.json ui5.yaml  # add the files we've created
$ git commit -m "Base UI5 Project"                 # commit the changes
```

## Typescript

After following the tutorials and implementing the example code, the transition to typescript was done and from this point on all scripts will be implemented in typescript.

The javascript sources will still be available on the `walkthrough/step-X` and `quick-start/step-X` branches.

Running the project has remained unchanged `npm run dev` will still boot up the application server, but will now also take care of the typescript compilation.


## Tutorials

We will be following the [Getting Started with SAPUI5](https://sapui5.hana.ondemand.com/#/) and the README will track the the course/step followed, everything in a branch of it own, making it easy to start at any point.

Some steps do not actually need you to run the `npm run dev` command, I would recommend to do this from the start.

So run the command

```bash
$ npm run dev
```

And wait for it to get started, you'll see something like

```
Server started
URL: http://localhost:8080
```

Open that URL in your browser and you'll be presented with the contents of your webapp folder, in general you'll want to click through to the index.html file, which contains your application.


### [Quick Start](https://sapui5.hana.ondemand.com/#/topic/592f36fd077b45349a67dcb3efb46ab1)

- [Step 1 - Ready...](https://sapui5.hana.ondemand.com/#/topic/851bde42e4e1410c96abbe402fa9128c)
- [Step 2 - Steady...](https://sapui5.hana.ondemand.com/#/topic/128214a9b2754b15aec5e365780b03fd)
- [Stap 3 - Go!](https://sapui5.hana.ondemand.com/#/topic/073d1073fc604beda94589d5c93b32e2)

### [Walkthrough](https://sapui5.hana.ondemand.com/#/topic/3da5f4be63264db99f2e5b04c5e853db)

- [Step 1: Hello World!](https://sapui5.hana.ondemand.com/#/topic/2680aa9b16c14a00b01261d04babbb39)
- [Step 2: Bootstrap](https://sapui5.hana.ondemand.com/#/topic/fe12df2e338e43598977d09f3d191b7b)
- [Step 3: Controls](https://sapui5.hana.ondemand.com/#/topic/ddbceecd7d3d42eea9cf78a820a238fb)
- [Step 4: XML Views](https://sapui5.hana.ondemand.com/#/topic/1409791afe4747319a3b23a1e2fc7064)
- [Step 5: Controllers](https://sapui5.hana.ondemand.com/#/topic/50579ddf2c934ce789e056cfffe9efa9)
- [Step 6: Modules](https://sapui5.hana.ondemand.com/#/topic/f665d0de4dba405f9af4294de824b03b)
- [Step 7: JSON Model](https://sapui5.hana.ondemand.com/#/topic/70ef981d350a495b940640801701c409)
- [Step 8: Translatable Texts](https://sapui5.hana.ondemand.com/#/topic/df86bfbeab0645e5b764ffa488ed57dc)
    - Make sure the application id is the same in the following files
        - webapp/controller/App.controller.js (both the `Controller.extend` and the `i18nModel` -> `bundleName`)
        - webapp/view/App.view.xml (`controllerName` attribute)
        - webapp/index.js (`viewName`)
        - webapp/index.html (`data-sap-ui-resourceroots` and `data-sap-ui-onInit` attributes, note that the latter uses '/' as separator instead of '.')
        - webapp/manifest.json (`sap.app` -> `id`)
- [Step 9: Component Configuration](https://sapui5.hana.ondemand.com/#/topic/4cfa60872dca462cb87148ccd0d948ee)
- [Step 10: Descriptor for Applications](https://sapui5.hana.ondemand.com/#/topic/8f93bf2b2b13402e9f035128ce8b495f)
- [Step 11: Pages and Panels](https://sapui5.hana.ondemand.com/#/topic/3b9d9f84930d43df90ad0789d99bd4a3)
- [Step 12: Shell Control as Container](https://sapui5.hana.ondemand.com/#/topic/4df1d914e52d4b1aa0805eb01522537e)
- [Step 13: Margins and Paddings](https://sapui5.hana.ondemand.com/#/topic/17b87fbafb5a4474982760d2a3a73e69)
- [Step 14: Custom CSS and Theme Colors](https://sapui5.hana.ondemand.com/#/topic/723f4b2334e344c08269159797f6f796)
    - The correct link to [CSS Classes for Theme Parameters](https://sapui5.hana.ondemand.com/#/topic/ea08f53503da42c19afd342f4b0c9ec7.html) referenced on the tutorial page
- [Step 15: Nested Views](https://sapui5.hana.ondemand.com/#/topic/df8c9c3d79b54c928855162bafcd88ee)
- [Step 16: Dialogs and Fragments](https://sapui5.hana.ondemand.com/#/topic/4da72985139b4b83b5f1c1e0c0d2ed5a)
- [Step 17: Fragment Callbacks](https://sapui5.hana.ondemand.com/#/topic/354f98ed2b514ba9960556333428d35e)
- [Step 18: Icons](https://sapui5.hana.ondemand.com/#/topic/776f7352807e4f82b18176c8fbdc0c56)
- [Step 19: Reuse Dialogs](https://sapui5.hana.ondemand.com/#/topic/19453962b8074b7399372c65cbe05370)
- [Step 20: Aggregation Binding](https://sapui5.hana.ondemand.com/#/topic/bf71375454654b44af01379a3c3a6273)
- [Step 21: Data Types](https://sapui5.hana.ondemand.com/#/topic/dfe04650afc046e0802abb1a1a90d2d9)
- [Step 22: Expression Binding](https://sapui5.hana.ondemand.com/#/topic/c98d57347ba444c6945f596584d2db45)
- [Step 23: Custom Formatters](https://sapui5.hana.ondemand.com/#/topic/0f8626ed7b7542ffaa44601828db20de)
- [Step 24: Filtering](https://sapui5.hana.ondemand.com/#/topic/5295470d7eee46c1898ee46c1b9ad763)
- [Step 25: Sorting and Grouping](https://sapui5.hana.ondemand.com/#/topic/c4b2a32bb72f483faa173e890e48d812)
- [Step 26: Remote OData Service](https://sapui5.hana.ondemand.com/#/topic/44062441f3bd4c67a4f665ae362d1109)
- [Step 27: Mock Server Configuration](https://sapui5.hana.ondemand.com/#/topic/bae9d90d2e9c4206889368f04edab508)
    - Don't forget to visit the /test/mockServer.html instead of index.html
- [Step 28: Unit Test with QUnit](https://sapui5.hana.ondemand.com/#/topic/e1ce1de315994a02bf162f4b3b5a9f09)
- [Step 29: Integration Test with OPA](https://sapui5.hana.ondemand.com/#/topic/9bf4dce43b7943d0909cd6c58a933589)
- [Step 30: Debugging Tools](https://sapui5.hana.ondemand.com/#/topic/1ff250c2038849f5991209f7e6c36f1f)
    - Open with `CMD/CTRL` + `SHIFT` + `OPTION/ALT` + `S`, select component with `CMD/CTRL` + `SHIFT` + `OPTION/ALT` + click
- [Step 31: Routing and Navigation](https://sapui5.hana.ondemand.com/#/topic/e5200ee755f344c8aef8efcbab3308fb)
- [Step 32: Routing with Parameters](https://sapui5.hana.ondemand.com/#/topic/2366345a94f64ec1a80f9d9ce50a59ef)
- [Step 33: Routing Back and History](https://sapui5.hana.ondemand.com/#/topic/8ef57cfd37b44f089f7e3b52d56597eb)
- [Step 34: Custom Controls](https://sapui5.hana.ondemand.com/#/topic/d12d2ee6a5454d799358d425f9e7c4db)
- [Step 35: Responsiveness](https://sapui5.hana.ondemand.com/#/topic/a96e18b4cd924196b255eb9623431dbb)
- [Step 36: Device Adaptation](https://sapui5.hana.ondemand.com/#/topic/d63a15e5eebb45cdada317bae5f45bc2)
- [Step 37: Content Density](https://sapui5.hana.ondemand.com/#/topic/d935dbf196d34997bf1ac42ac3e81579)
- [Step 38: Accessibility](https://sapui5.hana.ondemand.com/#/topic/ff7cab1f271a4181a86e5aa5c2f8d421)


