# Techtime

This project is a task performed as part of the frontend developer application process for TalentPlus. It is developed with React.js with Reactstap/Bootstrap as css framework. It is containerized using Docker.

# Building with Docker

Run the below command in order to build the Docker image:

docker build -t techtime .

# Runing the app in a container

You can run the app in a container using the below command:

docker run -p 3000:3000 techtime

This runs a container based on the techtime Docker image on port 3000

The app is now accessible on http://localhost:3000 in the browser.

