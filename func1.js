let  a = ['a','a','b','b','c']
let b = ['x','b','b','c','c','d']
let a1 =  Array.from(new Set(a))
let b1 =  Array.from(new Set(b))
let res =  b.filter(el=> !a.some(a => a === el))
console.log(res)