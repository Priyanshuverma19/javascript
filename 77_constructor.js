class railwayForm{
    constructor(givename,trainno,address){
        console.log("CONSTRUCTOR CALLED......"+ givename  +" "+ trainno)
        this.name= givename
        this.trainno= trainno
        this.address= address
    }
    sunbmit(){
        alert(this.name + ":your form is submited for train number"+ this.trainno)
    }
    cancel(){
        alert(this.name +": this  form is cancel by train no :"+ this.trainno)
    }
}
let harryForm = new railwayForm("harry",12344,"gola")
harryForm.sunbmit()