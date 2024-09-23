# PeerPrep Backend

## Project Overview
The PeerPrep backend provides a service for managing and querying questions used for technical interview practice. It supports creating, retrieving, and deleting questions.

## Prerequisites
- Docker: Ensure Docker is installed on your machine. [Download Docker](https://www.docker.com/products/docker-desktop)

## Getting the backend server up and running

1. **Copy & paste the firebaseCredentials.json file into the `/config` folder**

2. **Build the Docker Image** 

   Navigate to the backend directory and build the Docker image:

   ```sh
   cd path/to/backend/
   docker build -t peerprep-backend .
   ```

3. **Create and Run the Docker Container**
   
   ```sh
   docker run -d -p 5001:5001 --name peerprep-backend-app peerprep-backend
   ```

4. **You can find the server started at localhost:5001**

## Trying out the question service

1. **View the questions**
   
   Visit localhost:5001

2. **Create a question**
   
   You can test out the question service by using a tool such as postman to send HTTP requests alongside custom json data to the server. To create a question, go to localhost:5001/create-question on postman, select post type, and add the following json to the http post request body, feel free to edit freely:

   ```sh
   {
    "title": "Fibonacci Number",
    "description": "The Fibonacci numbers, commonly   denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is, F(0) = 0, F(1) = 1 and F(n) = F(n - 1) + F(n - 2), for n > 1. Given n, calculate F(n).",
    "difficulty": "Easy",
    "topics": [
        "Recursion"
    ]
   }
   ```


3. **Delete a question**
   

   To delete a question, go to localhost:5001 on postman, select delete type, and add the following json to the http request body:

   ```sh
   {
    "id": "THE_QUESTION_ID_THAT_YOU_SEE_ON_YOUR_BROWSER"
   }
   ```
