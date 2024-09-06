FROM node:20.17.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run application
CMD ["npm", "run", "dev"]
