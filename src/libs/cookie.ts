export const setCookies = (name: string, value: string, expDays: number) => {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  return (document.cookie = `${name}=${value};${expires};path/`);
};

// data: {
//     status: 'success',
//     username: 'john-smith6',
//     spoonacularPassword: 'stuffedcrabon39reddeliciousapple',
//     hash: '39096f644f811bc2cdefc9864c81b0fb07aad305'
//   }
export const getCookies = (cname: string) => {
  const name = `${cname}=`;
  if (typeof document === 'undefined') {
    console.log('server side');
  } else {
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(i);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  }
  return '';
};

export const checkCookies = (name: string) => {
  const user = getCookies(name);
  if (user != '') {
    console.log('username is ', user);
    return '';
  } else {
    console.log('no username in cookies found');
    const user = prompt('Please enter your name:', '');
    if (user != '' && user != null) {
      return setCookies('username', user, 365);
    }
  }
};
export const eraseCookies = () => {
  const user = prompt('Please enter cookies you want to erase:', '');
  if (user != '' && user != null) {
    console.log('your ' + user + ' cookies have been deleted');
    return setCookies(user, '', -1);
  }
};
