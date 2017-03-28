import Router from 'koa-router'

export default function () {
  const router = new Router()

  router.get('/api/(.*)', function *(){
    const urlParams = this.request.url.replace(/\/api\-proxy/, '')
     this.body = { id: 1, title: 'My first blog post' }
  })

  //  router.get('/api', function *(next) {
  //   console.log('this.request',this.request.url)
  //   this.body = 'Hello World!';
  // })

  /* - More examples:
  router.get('/api/count', async (ctx, next) => {
    ctx.body = serverCount
  })
  router.post('/api/count/inc', async (ctx, next) => {
    ctx.body = ++serverCount
  })
  */

  return router.routes()
}