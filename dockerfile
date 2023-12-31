FROM node:14-alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]