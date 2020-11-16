/*
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-11 22:32:18
 * @Descripttion: 
 */
import createApp from './app';

// 1、 服务端每次要拿到一个新的实例。， 访问服务器时执行创建
// 2、服务端渲染打包需要一个函数, router.get('(.*)')的时候带过来的参数 = ctx
export default (ctx) => {
  // 可能在路由跳转之前，路由注册表对应的组件还没被渲染
  return new Promise((resolve, reject) => {
    let { app, router } = createApp();
    // 跳路由
    router.push(ctx.url)

    router.onReady(() => {
      // 跳路由之后匹配路径是否存在
    const matchs = router.getMatchedComponents()

    if (!matchs.length) return reject({ code: 404 }) 

      resolve(app)
    }, reject)
  })
}