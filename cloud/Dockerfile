FROM ubuntu:18.04

WORKDIR /opt/app

COPY . .

RUN apt-get update && apt-get install --yes curl
RUN curl --silent https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

RUN npm install --only=production

EXPOSE 8888

CMD [ "npm", "start" ]
