# Next.js Project with Docker

This is a Next.js project bootstrapped with `create-next-app`.

## Running with Docker

To run this Next.js project using Docker, follow these steps:

1. Ensure you have Docker installed on your machine.

2. Clone this repository to your local machine.

3. Navigate to the project directory in your terminal.

4. Build the Docker image using the provided Dockerfile:

   ```bash
   docker build -t nextjs-app ./frontend

5. Run the Docker container:

    ```bash
    docker run -d -p 3000:3000 nextjs-app

6. Access your Next.js application in your web browser at http://localhost:3000.

### Dockerfile
The Dockerfile in this project defines the environment for running the Next.js application within a Docker container. It includes all necessary dependencies and configurations.

### Learn More
To learn more about Next.js, visit the Next.js Documentation.

For more information on Docker, refer to the Docker Documentation.
