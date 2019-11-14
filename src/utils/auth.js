import Cookies from 'js-cookie'

const tokenKey = "tokenkeyisme"

var getToken = function () {
    return Cookies.get(tokenKey)
}

var setToken = function (token) {
    Cookies.set(tokenKey,token);
}

var removeToken = function () {
    return Cookies.remove(tokenKey);
  }
  
export {getToken, setToken, removeToken}