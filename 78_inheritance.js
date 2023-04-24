class animal{
    constructor(name ,color){
        this.name= name
        this.color= color
    }
    run(){
        console.log(this.name + "is running")
    }
    shout(){
        console.log(this.name + "is shouting")
    }
}
class monkey extends animal{
    eatBanana(){
        console.log(this.name +"is eating banana")
    }
}
let ani = new animal("bruno", "white")
let m = new monkey("chimpu", "orange")

ani.shout()
m.eatBanana()