import { sequence } from "astro/middleware";
import { auth } from "./auth";
import { validate } from "./validate";

export const onRequest = sequence(validate, auth);

//https://blog.logrocket.com/working-astro-middleware/
