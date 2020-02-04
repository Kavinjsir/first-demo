import Koa from 'koa';

const app = new Koa();

const response = async ctx => {
  ctx.body = 'Hello world';
}

app.use(response);

app.listen(3000, () => console.log('App is listening at 3000...'));