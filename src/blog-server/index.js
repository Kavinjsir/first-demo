import Koa from 'koa';
import Router from 'koa-router';
import send from 'koa-send';

const router = new Router();

const STATIC_PATH = `${__dirname}/../../public`;

router.get('/(.*)', async ctx => {
  const path = ctx.path === '/' ? '/index.html' : ctx.path;

  try {
    await send(ctx, path, { root: STATIC_PATH });
  } catch (error) {
    console.error(error);

    ctx.status = error.status;
    ctx.body = ctx.status === 404 ? 'Not found.' : 'Error';
  }
});

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Blog server is listening at 3000...'));
