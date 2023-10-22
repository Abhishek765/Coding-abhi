# This Application explains how to containerize your node.js application

## Why Use Docker for Containerizing Your Node.js Application

Docker is a powerful containerization technology that simplifies the deployment and management of applications. It offers several compelling benefits for developers and operations teams when it comes to packaging and running Node.js applications.

In this document, we'll walk you through the process of containerizing your Node.js application using Docker, taking advantage of these benefits to streamline your development and deployment workflows.

- Docker File

```dockerfile
FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY index.js index.js

RUN npm install

ENTRYPOINT [ "node", "index.js" ]
```

---

- <b><i>Commands</i></b>

  - To build the image

    ```bash
    docker build -t node-docker-example-app .
    ```

  - Run the image into container

    ```bash
    docker run -it node-docker-example-app
    ```

  - Run the image into container with PORT mapping (originally server is running at 8000 we're exposing it to port 9000)

    ```bash
    docker run -it -p 9000:8000 node-docker-example-app
    ```

  - To stop the container

    ```bash
    docker stop <your_container_id>
    ```

  - To pass the Environment Variables - we're passing port number 4000 for node server

    ```bash
    docker run -it -e PORT=4000 -p 4000:4000 node-docker-example-app
    ```

---

### Docker Compose

**Sample Docker compose yml file to run two container for postgres and redis**

```yml
version: "3"

services:
  postgres:
    image: postgres # from hub.docker.com
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_DB: review
      POSTGRES_PASSWORD: password

  redis:
    image: redis # from hub.docker.com
    ports:
      - "6379:6379"
```

- To run all containers

  ```bash
   docker compose up
  ```

- To run containers in detach mode (in background)

  ```bash
   docker compose up -d
  ```

- To remove containers

  ```bash
   docker compose down
  ```
