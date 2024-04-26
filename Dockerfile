FROM node:18 AS runtime
WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm i
RUN pnpm run build

ENV PORT=4323
EXPOSE 4323
CMD pnpm start

# To run - 
# docker run -p 4323:8080 astro-boilerplate 