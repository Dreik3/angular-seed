# For the test i used `angular-seed` — the seed for AngularJS apps


This project is a single page web application using AngularJS v1.5.11.
The application is a simple chart widgets dashboard. On a dashboard user can put 1 to 4 charts.
At the top of the page there is a button that shows the possible settings of the graphs like:
 - user can show/hide any of charts (by default user see all 4);
 - user can set date he wants to start (in this version data on charts is randomly created
 and not tied to the date period, so this option is not very useful);
 - user can select type of charts - line or bar;
 - user can select color of lines/bars (series);
User can select to show or hide any lines/series (by default 3 series are shown).
User can select colors for lines.


## Getting Started

To get you started you can simply clone the `angular-seed` repository and install the dependencies:

### Prerequisites

You need git to clone the `angular-seed` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `angular-seed`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `angular-seed`

Clone the `angular-seed` repository using git:

```
git clone https://github.com/Dreik3/angular-seed.git
cd angular-seed
```


### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].
