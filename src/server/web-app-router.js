import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../routes';
import Router from 'koa-router'

export default function webAppRouter () {

	const router = new Router()
  //   return (ctx, next) => new Promise((resolve, reject) => {
  //       match({ routes, location: this.request.url }, (error, redirectLocation, renderProps) => {
  //           ctx.body = renderToString(<RouterContext {...renderProps}/>)
  //           resolve()
  //           return next()
  //       })
  // })


router.get('*', function *(){
	match({ routes, location: this.request.url }, (error, redirectLocation, renderProps) => {
            this.body = renderToString(<RouterContext {...renderProps}/>)
    })
  })

return router.routes()


}