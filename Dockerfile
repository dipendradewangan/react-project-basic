#build stage

FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


#PRODUCTION STAGE
FROM node:24-alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]