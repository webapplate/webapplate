# Pull base image.
FROM neo9polska/nodejs-bower-gulp

# modify from
# https://registry.hub.docker.com/u/dockerfile/nodejs-bower-grunt-runtime/

# install global command
#RUN npm install -g karma

# Define working directory.
WORKDIR /app

# Set instructions on build.
ADD package.json /app/
RUN npm install --production
ADD bower.json /app/
ADD .bowerrc /app/
RUN bower install --allow-root
ADD . /app

# Define default command.
CMD ["node", "server.js"]

# Expose ports.
EXPOSE 8000
