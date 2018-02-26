const cookieController = {};

cookieController.setSSIDCookie = setSSIDCookie;


function setSSIDCookie(req, res, next) {
  // console.log('in cookieC', res.locals.user);
   res.cookie('ssid', res.locals.user._id, {httpOnly: true});
  //  res.setHeader('Set-Cookie', [`${key}=${value}`, `HttpOnly=true`]);
   next();
}

module.exports = cookieController;