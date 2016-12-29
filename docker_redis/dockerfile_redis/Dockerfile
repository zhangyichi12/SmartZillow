FROM ubuntu:14.04

# Update the repository and install Redis Server
RUN sudo apt-get update
RUN apt-get install -y redis-server

EXPOSE 6379
CMD ["redis-server"]
