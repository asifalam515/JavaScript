const person={
    firstName:"asibul",
    lastName :"alam",
    age:24,
    fullName:function(){
        return this.firstName +" "+this.lastName
    }
}
person.eyeColor = "black"
console.log(person.fullName());