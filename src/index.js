import Koa from "koa";
import Router from "koa-router";
import send from "koa-send";

const STATIC_FILE_PREFIX = `${__dirname}/../public`;

const app = new Koa();

const router = new Router();

router.get("/(.*)", async ctx => {
  const path = ctx.path === "/" ? "/index.html" : ctx.path;
  console.log("coming request's path:", path);
  await send(ctx, path, { root: STATIC_FILE_PREFIX });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("App is listening at 3000..."));
