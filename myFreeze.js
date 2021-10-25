//object.freeze()只能冻结引用数据类型的浅层对象，
//如果是嵌套深层对象，无法冻结，可以采用递归对象来处理



function myFreeze(obj){
  Object.freeze(obj)
  Object.keys(obj).forEach((key)=>{
    if(typeof obj[key] === 'object'){
      myFreeze(obj[key])
    }
  })
}


const esObj = {
  name:'aaa',
  year:'2021',
  extension:[1,2,3]
}
myFreeze(esObj)
esObj.extension[3] = 4
esObj.name = 'bbb'
console.log(esObj)