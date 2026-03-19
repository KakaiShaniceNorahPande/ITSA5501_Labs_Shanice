#use a lightweight Node.js image for runtime
FROM node:20-alpine

#set the working directory inside the container
WORKDIR /usr/src/app

#copy package.json and package-lock.json to the working directory
COPY package*.json ./

#install application dependencies
RUN npm install --omit=dev

#copy the rest of the application code to the working directory
COPY . .

#Run the script to start the application
CMD ["npm", "start"]