Dynamic Endpoint to Perform Crude Operation

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Endpoints](#endpoints)
-[Prerequisite](#prerequisite)
-[Instruction](#introduction)


## Introduction
This is an endpoint that manages creation, featching, updatind and deleting of names 

## Features
Validation: Implement validation rules to ensure that data entered or modified by users meets specific criteria (unique names).
Database Integration: Store and retrieve data from a database.

## Usage

### Creating a New User

To create a new user, send a POST request to the `/api` endpoint with the following JSON

    Request Body
    {
        "name": "Wura"
    }
    It returns a Response Payload
    {
       {
             "responseCode": "00",
             "responseMessage": "name created successful",
             "data": {
             "name": " Wura",
             "_id": "6502393aa808affhey756d3",
             "__v": 0
       }
             }   
    }

 ### Getting a User by Id.
  To fetch a user by id, send a GET request to the `/api/user_id` endpoint with no request body

   It returns a Response Payload
    {
       {
             "responseCode": "00",
             "responseMessage": "name created successful",
             "data": {
             "name": " Wura",
             "_id": "6502393aa808affhey756d3",
             "__v": 0
       }
             }   
    }

 ### Updating a User by Id.
   To update a user by id, send a GET request to the `/api/user_id` endpoint with the following JSON

<!-- To modify a user -->
        Request Body
    {
        "name": "Wura Simi"
    }

    It returns a Response Payload 
        {
            "responseCode": "00",
            "responseMessage": "User updated successfully",
            "data": {
                 "_id": "65023e23a808afffe49695d9",
                 "name": " Wura Simi",
                "__v": 0
                 }
        }

    ### Deleting a User by Id.
        To delete a user by id, send a GET request to the `/api/user_id` endpoint with no request body

        It returns a Response Payload 

        {
            "responseCode": "00",
            "responseMessage": "User deleted successfully",
            "data": null
        }

   ## Endpoints

| HTTP Method | Endpoint              | Description                  |
|-------------|-----------------------|------------------------------|
| GET         | /api/user_:id         | Create a new resource        |
| POST        | /api                  | fetch a user by ID           |
| PUT         | /api/resource/:id     | Update a user by ID          |
| DELETE      | /api/resource/:id     | Delete a user by ID          |


## Prerequisite

Make sure you have node runtime running on your server
A MongoDB URI

## Instruction
If you are setting up the API locally or deploying on a server, provide a .env file with the variales of: PORT = your port number and MONDB_URI = your mongodb uri Run npm start command to start the server.