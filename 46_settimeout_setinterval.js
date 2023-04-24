document.write("Hello")

let a =setTimeout(function(){
    alert("I am inside of set time out")
},5000)
let b = prompt("do you want to run the settimeout")
if("n"== b){
clearTimeout(a)}
console.log(a)


// setintervl meance kuch time ka baat continew chalta rhta hai