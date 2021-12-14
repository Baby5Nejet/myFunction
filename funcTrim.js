var str = '  http:   //www.feiniaomy.com  ';
console.log('未处理之前');
console.log(str);
console.log('处理之后');
console.log(str.trim())



var str = '  baidu   .com  ';
var url = str.replace(/^\s+|\s+$/gm, '');
console.log(url);