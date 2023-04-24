let runAgain = true;
const canDrive =(age)=>{
    return age >= 18 ? true : false
}
while(runAgain){
    let age =prompt("Enter your age")
    age = Number.parseInt(age)
    
if(canDrive(age)){
    alert("you can drive")
}
else{
    alert("you cannot drive")
}
runAgain =confirm("Do ou want to play again")
}