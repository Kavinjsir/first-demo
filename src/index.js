import Koa from 'koa';
import Router from 'koa-router';
import send from 'koa-send';

const router = new Router();

const STATIC_PATH = '';

router.get('/(.*)', async ctx => {
  const path = ctx.path;
  await send(ctx, path, { root:  STATIC_PATH})

})

const app = new Koa();

const response = async ctx => {
  ctx.body = 'Hello world';
}

app.use(response);

app.listen(3000, () => console.log('App is listening at 3000...'));

