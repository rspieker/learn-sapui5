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


### Wrapping up

This is probably a good moment to commit what you've done so far in your git version control, first make sure you don't add anything from the node_modules folder that was created during the installation of `@ui5/cli` (and were more things will be added to)

```bash
$ echo node_modules>>.gitignore                    # ignore the node_modules folder
$ git add .gitignore webapp package.json ui5.yaml  # add the files we've created
$ git commit -m "Base UI5 Project"                 # commit the changes
```


## Tutorials

We will be following the [Getting Started with SAPUI5](https://sapui5.hana.ondemand.com/#/) and the README will track the the course/step followed, everything in a branch of it own, making it easy to start at any point.

