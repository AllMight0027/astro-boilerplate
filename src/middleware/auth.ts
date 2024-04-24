import { defineMiddleware } from "astro/middleware";

export const auth = defineMiddleware((_, next) => {
  console.log(`env-${import.meta.env.DEV ? "dev" : "prod"}`);
  console.log(import.meta.env.DB_PASSWORD);
  console.log("In auth middleware");
  return next();
});
