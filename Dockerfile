FROM node:18-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --silent
RUN yarn global add react-scripts@5.0.1 --silent

# Add app
COPY . ./

# Start app
CMD ["yarn", "start"]
