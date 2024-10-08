# Use an official Node.js runtime as a parent image
FROM node:18-alpine

ARG VITE_API_ENDPOINT
ARG VITE_WS_ENDPOINT

ENV VITE_API_ENDPOINT=$VITE_API_ENDPOINT
ENV VITE_WS_ENDPOINT=$VITE_WS_ENDPOINT

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to the Nginx HTML directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]