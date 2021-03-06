# Flash-Cards


## Abstract 

Flash-Cards is a Turing School of Software and Design Mod 2 project which included contributing code to an partially constructed object-oriented application. The Flash Cards program will prompt a user with questions in the terminal and allow them to answer. Using a basic structure of class files, tests suites were written and then classes were built out to create the desired functionality. 

## Take a look

![](https://media.giphy.com/media/T4ucaVsbIBrmaXHFkQ/giphy.gif)

## Setup

- Clone down the repo
- Node.js is used to run this progam and will need to be installed
- Run `node index.js` from the root directory in the terminal. 
- A message should appear: 

> Node server running on port 3000
> Welcome to FlashCards! You are playing with 30 cards.


- The first card question should also appear with possible answers
- The user can now select a number and press enter to submit an answer:

> ? What allows you to define a set of related information using key-value pairs? **Select a number, hit enter**
>  1) object
>  2) array
>  3) function
>  Answer: 
  
- feedback will be provided and the user will need to hit enter again to see the next question

> ? Your answer of object is correct! **Hit enter**

- when enter is pressed again a new question will appear: 

> ? What is a comma-separated list of related values? 
>  1) array
>  2) object
>  3) function
>  Answer:

- When all the cards have been quizzed, the program will prompt the user to answer incorrect guesses again for extra practice

> Let's review the ones you missed! 
>
>  ? What type of prototype method does not modify the existing array but returns a particular represent
>  ation of the array? 
>    1) mutator method
>    2) accessor method
>    3) iteration method
>    Answer: 

- The round will end when the user has gotten 100% of the questions correct
