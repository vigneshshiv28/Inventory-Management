# Use an existing base image with Node.js 20.11.0
FROM node:20.11.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 3000 to allow external access
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
