import Koa from 'koa';
import Router from 'koa-router';
import send from 'koa-send';

const router = new Router();

const STATIC_PATH = `${__dirname}/../../public`;

const ARTICLE_URL_FORMAT = /\/(\d{4}\/\d{2}\/\d{2}\/)/;

function convertURLToFilePath(url) {
  if (url === '/') return '/index.html';

  const filePath = decodeURIComponent(url);

  const matchResult = filePath.match(ARTICLE_URL_FORMAT);

  if (matchResult === null || matchResult.index < 0 || matchResult.index >= url.length) {
    return filePath;
  }

  return `${filePath}/index.html`;
}

router.get('/(.*)', async ctx => {
  const filePath = convertURLToFilePath(ctx.path);
  try {
    await send(ctx, filePath, { root: STATIC_PATH });
  } catch (error) {
    console.error(error);

    ctx.status = error.status;
    ctx.body = ctx.status === 404 ? 'Not found.' : 'Error';
  }
});

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Blog server is listening at 3000...'));
