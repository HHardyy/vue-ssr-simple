/*
 * @version: 
 * @Author: Hardy
 * @Date: 2020-11-11 22:32:18
 * @Descripttion: 
 */
import createApp from './app';

// 服务端渲染打包需要一个函数
export default () => {
  let {
    app
  } = createApp();

  // 服务端每次要拿到一个新的实例。， 访问服务器时执行创建
  return app;
}