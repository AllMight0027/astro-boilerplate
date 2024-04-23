import { defineMiddleware } from "astro/middleware";

export const validate = defineMiddleware(({ locals }, next) => {
  locals.user = { name: "Pratyaksh Saxena" };
  console.log("In validate middleware");
  return next();
});
