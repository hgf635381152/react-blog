/* eslint-disable no-unused-vars */
// eslint-disable-next-line strict
module.exports = () => {
  return async function adminauth(ctx, next) {
    console.log('------------');
    console.log(process.openId);
    if (process.openId) {
      await next();
    } else {
      ctx.body = { data: '没有登录' };
    }
  };
};
