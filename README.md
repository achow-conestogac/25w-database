# Flatfile

## Purpose

We want to be able to programmatically persist data and then retrive it.

**CRUD**

- We should be able to Create new data
    - program ~asks~ EXPECTS the user for an input
        - user needs to provide WHERE 
    - take the input, the persist in a blank file as a json object

We should be able to Read our existing data.

We should be able to Update our data.

We should be able to Delete it.

# Test Driven Development Flowchart

Can I run a test

    No. -> figure out how to run a test

    yes. -> action: run tests

No -> technical problem -> ask copilot/internet

yes. -> results

Option 1 -> passing test

Option 2 -> failing test

Option 3 -> error 

Passing test -> 3 questions
 - have i validated in my test
 - did i use (exercise) the production code (target code)
 - did I accomplish my goals

Failing test -> did soemthign change -> fix the failure
 - look at the failure & do the opposite
     - "no directory found" -> action: create directory

Error -> fix the error
 - look at the error
 - ask copilot/internet
 - ask a person
