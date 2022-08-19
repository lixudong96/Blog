FROM node:16-alpine

WORKDIR /blog

# add deps
ADD pnpm-lock.yaml package.json /blog/
RUN npm install -g pnpm
RUN pnpm install

# add files
ADD . /blog
RUN pnpm run docs:serve

EXPOSE 5000

