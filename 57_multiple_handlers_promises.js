// multipal handlers ak he  promise sa kasa attach kya jta hai
let p1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        alert("Hey i am resolv")
        resolve(1);
    },2000)
})
p1.then(()=>{
    alert("Hurray")
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(4)
        },6000)
    })
}).then((value)=>{console.log(value)})

p1.then(()=>{
    console.log("congrtulations this  ofile is now resolved")
})
