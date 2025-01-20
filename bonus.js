function bonusTime(salary, bonus) {
    return bonus==true?salary=`£${salary*10}`:`£${salary}`
    }
    console.log(bonusTime(250000,false))