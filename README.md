# Social-Network-API

## Description

This Project involves the development of an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The following are used for the application build : Express.js for routing, MongoDB, a popular NoSQL database and the Mongoose ODM to enable a schema-based solution to model the application data. Day.js, a JavaScript library is used to parse, validate, and displays dates and times. 

## Features

Insomnia app: used for testing API and route functionality. For the implementation of "User Routes", functionality is shown below: 

1.To create a user:
HTTP method: POST
Route: /api/users
Action: Create a new user with the provided username and email in the request body. Assigns a unique userID to the user.

2.To retrieve all users:
HTTP method: GET
Route: /api/users
Action: Retrieve all users from the database. 

3.To retrieve a single user by ID:
HTTP method: GET
Route: /api/users/:userId
Action: Retrieve the user with the specified userId from the database. 

4.To update a user by ID:
HTTP method: PUT
Route: /api/users/:userId
Action: Update the user with the specified userId with the provided changes in the request body. Updates the username and/or email fields.

5.To delete a user by ID:
HTTP method: DELETE
Route: /api/users/:userId
Action: Delete the user with the specified userId from the database. Also, delete any associated thoughts or reactions. Return a message stating "User and thoughts deleted!" if the user is successfully deleted. If no user with the given userId exists, return a message stating "No user with this id!"


Implementation of "Friends Routes" functionality as below:

1.To add a friend:
HTTP method: POST
Route: /api/users/:userId/friends/:friendId
Action: Add the friendID to the specified user

2.To remove a friend:
HTTP method: DELETE
Route: /api/users/:userId/friends/:friendId
Action: Remove the friend with the specified friendId

Implementation of "Thoughts Routes" functionality as below:

1.To create a thought:
HTTP method: POST
Route: /api/thoughts
Action: Create a new thought with the provided thoughtText, username, and userID.

2.To retrieve all thoughts:
HTTP method: GET
Route: /api/thoughts
Action: Retrieve all thoughts created, including their unique IDs, and creation of timestamps

3.To retrieve a single thought by ID:
HTTP method: GET
Route: /api/thoughts/:thoughtId
Action: Retrieve the thought with the specified thoughtId.

4.To update a thought by ID:
HTTP method: PUT
Route: /api/thoughts/:thoughtId
Action: Update the thought with the specified thoughtId.

5.To delete a thought by ID:
HTTP method: DELETE
Route: /api/thoughts/:thoughtId
Action: Delete the thought with the specified thoughtId.

Implementation of "Reaction Routes" functionality as below:

1.To create a reaction:
HTTP method: POST
Route: /api/thoughts/:thoughtId/reactions
Action: Create a new reaction for the thought with thoughtId using the provided reactionBody and username.

2.To delete a reaction:
HTTP method: DELETE
Route: /api/thoughts/:thoughtId/reactions/:reactionId
Action: Delete the reaction with reactionId associated with the thought with thoughtId.


## Installation

Navigate to the source directory and run ``npm i`` to install required dependencies. 

## Usage

In the CLI at the project source, enter:
``npm start``
Once the server commences, mongoose schemas sync to the MongoDB.
Connect to the mongoDB URI: ``mongodg://localhost:27017``.
Click ``socialDB `` to view ``users and thoughts `` data.
Use Insomnia (https://insomnia.rest/) to both create seed data and to test API endpoints.


## Links TODO !!
Walk through Video Demos: https://drive.google.com/file/d/1rVy4tTPPJPcW8DUjwR8hmn2PwynUoTZJ/view

URL of Github repository:


## Acknowledgements

Bootcamp TAs, tutors, opensource code sites, W3 schools, MDN, stackoverflow, medium, full stack blog

## License

MIT License

Copyright © 2023 BeverleyTiare

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


