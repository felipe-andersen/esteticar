FROM node:current-alpine
RUN apk update && apk add --no-cache openssl 
WORKDIR /usr/share/app
COPY package.json ./ 
RUN npm install
COPY . .

CMD ["npm","run","dev"]
EXPOSE 3000
