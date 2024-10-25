# PeerPrep matching Service Backend

## Project Overview
The PeerPrep matching service backend provides a service for matching users in a queue.

## Prerequisites
- Docker: Ensure Docker is installed on your machine. [Download Docker](https://www.docker.com/products/docker-desktop)

## Getting the matching service backend server up and running

1. **Copy & paste the firebaseCredentials.json file into the `/config` folder**

2. **Build the Docker Image** 

   Navigate to the backend directory and build the Docker image:

   ```sh
   cd backend/matching_service/
   docker build -t peerprep-matching-service-backend .
   ```

3. **Create and Run the Docker Container**
   
   ```sh
   docker run -d -p 5003:5003 --name peerprep-matching-service-backend-app peerprep-matching-service-backend
   ```

4. **You can find the server started at localhost:5003**

## Trying out the matching service

1. **Ensure you are authenticated**

   You can do so by providing a valid token.
   For example, on postman, go to Auth, select Bearer Token as the Auth Type, and provide a valid token to pair it with your request.
    
2. **Testing a match**
   
   You can test out the matching service by logging into two different users and finding a match on the question bank apge on the frontend.
