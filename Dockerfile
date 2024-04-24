FROM node:18 AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV PORT=4322
EXPOSE 4322
CMD node ./dist/server/entry.mjs