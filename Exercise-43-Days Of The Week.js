const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function returnDay(a){
    
    if (a < 1 || a > 7)
        return null;
   else
        return weekDays[a - 1]
        
    
}
