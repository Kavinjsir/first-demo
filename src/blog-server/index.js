import Koa from 'koa';
import Router from 'koa-router';
import send from 'koa-send';

const router = new Router();

const STATIC_PATH = `${__dirname}/../../public`;

router.get('/(.*)', async ctx => {
  const originalPath = ctx.path === '/' ? '/index.html' : ctx.path;
  const finalPath = decodeURIComponent(originalPath);

  try {
    await send(ctx, finalPath, { root: STATIC_PATH });
  } catch (error) {
    console.error(error);

    ctx.status = error.status;
    ctx.body = ctx.status === 404 ? 'Not found.' : 'Error';
  }
});

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Blog server is listening at 3000...'));
