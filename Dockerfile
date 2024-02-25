# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /my-app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code to the working directory
COPY my-app/package.json ./


# Expose port 3000 to the outside world
EXPOSE 3000

# Define the command to run your React app
CMD ["npm", "start"]
