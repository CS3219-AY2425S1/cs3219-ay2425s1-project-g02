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

4. **You can find the server started at localhost:5004**

