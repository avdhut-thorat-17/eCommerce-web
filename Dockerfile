# Stage 1: Build the React app
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY my-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY my-app .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the app runs on (optional, since Nginx is serving static files)
EXPOSE 80

# Command to run nginx
CMD ["nginx", "-g", "daemon off;"]
