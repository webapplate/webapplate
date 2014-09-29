FROM ubuntu:14.04
MAINTAINER Author <name@mail.com>

# install our dependencies and nodejs
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install software-properties-common git build-essential -y
RUN add-apt-repository ppa:chris-lea/node.js -y
RUN apt-get update
RUN apt-get install -y nodejs
# install the dependencies
RUN npm install -g grunt-cli bower karma

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
ADD bower.json /tmp/bower.json
ADD .bowerrc /tmp/.bowerrc
RUN cd /tmp && npm install
RUN cd /tmp && bower install --allow-root
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /opt/app
ADD . /opt/app

# replace this with your application's default port
EXPOSE 8000

CMD ["node", "server.js"]
