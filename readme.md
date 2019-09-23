
## Overview

### Task 1: Kaprekar number challenge
A modified Kaprekar number is a positive whole number with a special property. If you square it, then split the number into two integers and sum those integers, you have the same value you started with.

Consider a positive whole number n with m digits. We square n to arrive at a number that is either 2d digits long or 2d-1 digits long. Split the string representation of the square into two parts,l and r. The right hand part, r, must be d digits long. The left is the remaining substring. Convert those two substrings back to integers, add them and see if you get .


#### Challenge
Write a function which accepts two integers and returns all modified Kaprekar numbers which lie between those two numbers. 

#### Output
The app show the obtained Kaprekar numbers between two given numbers minNumber(250) and maxNumber(5000).

### Task 3: Universal Drug Codes
Sustainable Solutions has created a website which allows searching for Universal Drug Codes.  
This makes use of a publicly available API, the details for which can be found here:
[https://sussol.github.io/universal-drug-codes-server](https://sussol.github.io/universal-drug-codes-server)

Given a list of drug codes: 
`const codes = ['369844bf', '64d064bf', '32d064bf', '372ce4bf', 'bbfcf518'];`

#### Challenge
Write code to call the API, using it to lookup each drug code given above and display the name of the drug.

#### Output
Based on requirements, the app shows three different results:

- **Task 3.1:** Show results as each call is made and each response processed 
- **Task 3.2:** Results shown when all have been processed 
- **Task 3.3:** Results obtained asynchronously, cheking all drugs in parallel

All results show the Drug Name along with their corresponding Drug Code. In case an error is found it is going to be display.

## Test
Task 1 main functions are tested using Jest.

## Setup
To run this app [nodejs](https://nodejs.org/en/download/) should be installed. Then run these commands in your terminal:

#### Clone the repository

    git clone https://github.com/diegoevangelisti/sussol-test.git

#### Enter the projects folder

    cd sussol-test

#### Install the dependencies

    npm install
    npm i jest --save-dev

#### Run the server

    npm start

#### Run the tests 

    npm test
