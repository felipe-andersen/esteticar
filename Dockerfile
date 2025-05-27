FROM node:current-alpine
RUN apk update && apk add --no-cache openssl=3.3.3-r0
WORKDIR /usr/share/app
COPY package.json ./ 
RUN npm install && npm install --dev
COPY . .
RUN npx prisma generate
CMD ["npm","run","dev"]
EXPOSE 3000
