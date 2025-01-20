var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

let addPropObjet=obj=>{
   
   
    for(let x of obj){    
       
            x.usersAnswer=null
        }
       return obj
    }
console.log(addPropObjet(questions))