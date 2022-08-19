FROM node:16-alpine

WORKDIR /blog

# add deps
ADD pnpm-lock.yaml package.json /blog/
RUN npm install --registry=https://registry.npmmirror.com

# add files
ADD . /blog
RUN npm run docs:build
# RUN npm run docs:serve

EXPOSE 5000

