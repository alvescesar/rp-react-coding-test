# Replay Poker Code Challenge - Client (React.js)

## Candidate's Notes

During this challenge I often opted for simple solutions using CSS and existing code. Adapting styles to 4-card games and/or 4-player games are such examples that utilized existing classnames.

The next step from where I stopped would be to update to the latest React version to use functional components and hooks, as well as take advantage of the Context API.
Since this is a project meant to scale, moving the table object to a context would be beneficial to avoid prop-drilling.
Also, in order to fetch from the given endpoint, I'd employ a useEffect() hook that would call a setState() function to update a local state object. This could function inside the project's context or directly in the <App /> component.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
