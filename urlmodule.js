import url from 'url';

const myURL = new URL('http://ahmedlink.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL);
console.log(myURL.href);