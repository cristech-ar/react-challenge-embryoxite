FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-slim

RUN npm install -g serve

COPY --from=build /app/dist /app/dist


EXPOSE 2500


CMD ["serve", "-s", "/app/dist", "-l", "2500"]