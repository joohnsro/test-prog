export const getCookie = (cookieName: string): (string | null) => {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieArr: string[] = decodedCookie.split(';');

  for ( let cookie of cookieArr ) {
    cookie = cookie.trim();

    if ( cookie.indexOf(name) == 0 ) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return null;
};
