
## Overview

### Task 1: Kaprekar number challenge
Write a function which accepts two integers and returns all modified Kaprekar numbers which lie between those two numbers. 

#### Output
The app show the obtained Kaprekar numbers between two given numbers (250, 5000).

### Task 3: Universal Drug Codes
Using the publicly available API: [https://sussol.github.io/universal-drug-codes-server](https://sussol.github.io/universal-drug-codes-server) and given a list of drug codes: 

`const codes = ['369844bf', '64d064bf', '32d064bf', '372ce4bf', 'bbfcf518'];`

#### Challenge
Write code to call the API, using it to lookup each drug code given above and display the name of the drug.

#### Output
Based on requirements, the app shows three different results:

- **Task 3.1:** Show results as each call is made and each response processed 
- **Task 3.2:** Results shown when all have been processed 
- **Task 3.3:** Results obtained asynchronously, cheking all drugs in parallel

All results show the Drug Name along with their corresponding Drug Code (unless an error is found).

## Test
Task 1 main functions are tested using Jest.

## Setup
To run this app [nodejs](https://nodejs.org/en/download/) should be installed. Then run these commands in your terminal:

#### Clone the repository

    git clone https://github.com/diegoevangelisti/sussol-tasks.git

#### Enter the projects folder

    cd sussol-test

#### Install the dependencies

    npm install
    npm i jest --save-dev

#### Run the server

    npm start

#### Run the tests 

    npm test
