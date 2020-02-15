import Koa from 'koa';
import Router from 'koa-router';

import weatherApi from './api';

const router = new Router();

router.get('/weather', async ctx => {
  const info = await weatherApi();
  ctx.body = JSON.stringify(info,null,4);
})

const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => console.log('App is listening at 3000...'));

