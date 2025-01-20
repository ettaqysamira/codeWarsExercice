class FullName{
    
    constructor( firstName, lastName){
        this.firstName=firstName
        this.lastName=lastName
    }
    
    getFullName(){
         if (this.firstName && this.lastName) {
            return this.firstName + " " + this.lastName;  
        } else if (this.firstName) {
            return this.firstName;  
        } else if (this.lastName) {
            return this.lastName; 
        } else {
            return '';  
    }
    
  }
}
  let lastFirstName=new FullName("samira",)
  console.log(lastFirstName.getFullName())

  class Dog{
    constructor(name,breed,sex,age){
        this.name  = name;
        this.breed = breed;
        this.sex   = sex;
        this.age   = age;
    }
        bark(){
            return "Woof!"
        }
  }


