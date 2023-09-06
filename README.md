# Documentation regarding the codehall interview project

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### Features developed

1. Fetched movies list from a open source api and listed them 
2. Added a search bar to search through the movies and implement own debounce function to the search input
   for optimization.
3. Added a multi select dropdown for filtering based on genre.
4. Added pagination to select through various pages.
5. Written unit tests for rendering test and result of the search input correctness.


### Tech stack used

React, Redux, react-testing-library, react-select

### Best practices

1. Maintained proper folder structure.
2. Used separate folder and file for utility functions and constants.
3. Used debounce to optimize number of events fired with the api calls.
4. Used scss that comes with styled-components for writing css neatly.






