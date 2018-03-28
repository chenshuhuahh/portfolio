/* 用export把方法暴露出来 */
/* 设置cookie */
export function setCookie(userEmail, value, expire) {
  var date = new Date();
  date.setSeconds(date.getSeconds() + expire);
  document.cookie = userEmail + '=' + escape(value) + '; expires=' + date.toGMTString();
  console.log(document.cookie);
}

/* 获取cookie */
export function getCookie(userEmail) {
  if (document.cookie.length > 0) {
    let userStart = document.cookie.indexOf(userEmail + '=');
    if (userStart !== -1) {
      userStart = userStart + userEmail.length + 1;
      let userEnd = document.cookie.indexOf(';', userStart);
      if (userEnd === -1) userEnd = document.cookie.length;
      return unescape(document.cookie.substring(userStart, userEnd));
    }
  }
  return '';
}

/* 删除cookie */
export function delCookie(userEmail) {
  setCookie(userEmail, '', -1);
}
