function getMyDay(birthday) {
    let allDate = new Date();
    let today = allDate.getDate();
    let thisMonth = allDate.getMonth()+1;
    let thisYear = allDate.getFullYear();
    let oldDay = 0;
    let oldMonth = 0;
    let oldYear = 0;
    if(today < birthday.day && thisMonth<birthday.month){
        
        oldDay = (today + 30)-birthday.day;
        oldMonth = (thisMonth+11)-(birthday.month);
        oldYear = (thisYear-1)-birthday.year;
    
        
        
    }
    
else if(today < birthday.day && thisMonth>birthday.month){
            oldDay = (today + 30)-birthday.day;
            oldMonth = thisMonth-birthday.month;
            oldYear = thisYear-birthday.year;
}

else if(today > birthday.day && thisMonth<birthday.month){
    oldDay = today-birthday.day;
    oldMonth = (thisMonth+12)-(birthday.month);
    oldYear = (thisYear-1)-birthday.year;
}


    else{
       oldDay = today - birthday.day;
       oldMonth = thisMonth - birthday.month;
       oldYear = thisYear-birthday.year;
    }



return `${oldYear}  + ${oldMonth} + ${oldDay}`;
   

}
const birthday = {
    day: 1,
    month: 1,
    year: 1999
};

console.log(getMyDay(birthday));
