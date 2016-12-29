FROM ubuntu:14.04

# update source
RUN sudo apt-get update
RUN sudo apt-get install -y wget
RUN sudo apt-get install -y curl

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN sudo apt-get install -y build-essential

# install redis
#RUN sudo apt-get install -y tcl8.5
#RUN wget http://download.redis.io/releases/redis-stable.tar.gz
#RUN tar xzf redis-stable.tar.gz
#RUN cd /redis-stable; make
#RUN cd /redis-stable; make test
#RUN cd /redis-stable; sudo make install

# 或者 RUN apt-get install -y redis-server

# start redis
#RUN cd /redis-stable/utils; sudo ./install_server.sh
#RUN sudo service redis_6379 start

# add source file
ADD . /src

# Install apnodep dependencies
RUN cd /src; npm install

EXPOSE 6060
CMD ["node", "/src/bootstrap.js"]