# Brockfos

## Installation

To install the Project run `npm install` in your terminal.

## Run

To run the Project in dev-mode type `npm run dev` in your Terminal

You can visit it with the following URL 'http://localhost:3000/'

## Test

To run tests you can simply type `npm run test:e2e` in your Terminal

The script will start the Server and wait for it to return a status-code 200.
Afterwards it opens the Cypress UI.
In the Cypress UI you can click on the test you want to run, or run all together.

As a tip:

Sometimes Cypress has issues with Chrome and its testing.
If you run into an error like 'Failed to connect to chrome retrying()' open the UI and select on the top-right corner electron as a browser instead.

You can also run Cypress Headless.
Go to the package.json and change in the script `test:e2e` the value `cy:open` to `cy:run`
Now you can trigger the script again and Cypress will test each scenario headless.

After the tests are done it will save screenshots and videos of the tests in the Cypress folder.

When a test fails in Headless mode you can check the videos to see what exactly went wrong.