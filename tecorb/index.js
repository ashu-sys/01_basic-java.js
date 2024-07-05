const name ={
    fristname: "ashu",
    lastname: "sharma",
    printfullname: function(){
        console.log(this.fristname+""+this.lastname);

    }
}

name.printfullname();