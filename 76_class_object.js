class railwayForm{
    submit(){
        alert(this.name +":your form is form submitted for train no "+this.trainno)
    }
    cancel(){
        alert(this.name+":this form is cancelled for train no "+ this.trainno)
    }
    fill(givename , trainno){
        this.name = givename
        this.trainno= trainno
    }
}
let harryForm = new railwayForm()
harryForm.fill("harry",123420)
let rohanForm = new railwayForm()
rohanForm.fill("rohan",12349211)

harryForm.submit()
rohanForm.submit()
rohanForm.cancel()