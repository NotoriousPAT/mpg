MPG
Ever been car shopping? Ever wish that you could compare your prospective car's stats with really old cars? Well now you can. You are going to write an application that imports auto data and allows users to compare cars.

Goals

Write a single page application
Write a responsive application
Load data via AJAX
Visualize data using C3 or other library
Render data as HTML via templates
The dataset

There is a publicly available set of data about cars described here:

A description of what the data means is available here
The data itself is available here
It's part of UCI's awesome dataset repository

Alternatively, you could use this dataset

The program

MVP

Show a list of all cars to the user
The user can select a car, and you'll show them a barchart (or other vizualization) indicating how their selected car's MPG compares to the overall average
Normal mode

MVP plust the following:

Instead of showing users the entire list, show them the first N (maybe 10 or 20) cars
Users should be able to search for a car, and you'll show them the matching results
Hard mode

Users should be able to paginate through the list of cars or search results
Keep the list of cars around as an array (or in a database) and serve them up using Node
Allow users to add new cars to the list of cars
Allow users to visualize cars by various categories:
vs cars with the same number of cylinders
vs all cars
Compare horsepower
Compare MPG
Compare acceleration



gulp-base

A base setup for gulp (to be updated as we go along)

Use it as a reference, or copy it to jump-start a gulp project.

## Getting set up

- Clone this project:
  - `git clone git@github.com:tiy-durham-fe-cohort4/gulp-base.git your-project-name`
  - `cd your-project-name`
  - `rm -rf .git`
  - `git init`
- Update `package.json`
  - You can do this by running `npm init` or by editing `package.json` directly.
  - Change the package name
  - Change the package description
- Check things in
  - `git add .`
  - `git commit -m "Initial checkin"`
- Install dependencies
  - `npm install`

You should be all set at this point!

## Building an app

This gulp configuration uses:

- Browserify to bundle your source
  - Includes jQuery, underscore, backbone, and parsley
  - `init.js` is currently the entry-point for your app
- SCSS to manage CSS dependencies and such
- Any `.html` files found in the `views` folder will be bundled
  - Available via `require('views')`
