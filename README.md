# Summary

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Implemanted the required features as per the document shared.
- On the Left side of the screen the employee list will be shown along with Filter option(Search Input & Dropdown).
- On the right side of the screen the employee hierarchy chart wiil be shown with Drag & Drop functionality.
- Used **Jest** & **React testing library** for writing Unit tests for both helper functions and presentational components.
- Used **miragejs** to create mock GET & POST API for getting and updating Employee List respectively.
- Used **react-drag-hierarchy-tree** to create the Employee hierarchy chart along with Drag & Drop functionality.
- Used **lodash** for util functions.
- Used **SASS** a CSS preprocessor for styling, which makes our code clean & readable.
- when we modifying the employee hierarchy chart using drag & drop, a **POST API** call will be made to update the data.

## Demo

This project hosted on vercel platform.[Demo Link](https://employee-chart.vercel.app/)

## Installation

`npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### External Packages Used

- [miragejs v0.1.47](https://www.npmjs.com/package/miragejs)
- [lodash v4.17.21](https://www.npmjs.com/package/lodash)
- [react-drag-hierarchy-tree v0.3.2](https://www.npmjs.com/package/react-drag-hierarchy-tree)
- [react-select v5.7.3](https://www.npmjs.com/package/react-select)
- [sass v1.62.1](https://www.npmjs.com/package/sass)
