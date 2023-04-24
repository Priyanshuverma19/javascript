let promise = new Promise(function(resolve,reject){
    resolve(56)

})
console.log("Hello1")
setTimeout(function(){
    console.log("hello2 in 2 sec")
},2000)
console.log("my name is"+"hello3")
console.log(promise)