const Koa = require('koa');
const app = new Koa();

const main = function (ctx) {
    console.log(ctx.request.url);
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';
};

app.use(main);
app.listen(3000);
//# sourceMappingURL=app.js.map