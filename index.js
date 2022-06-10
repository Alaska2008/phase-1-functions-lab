// Code your solution in this file!
function distanceFromHqInBlocks(x){
    
        return Math.abs(x-42)
}

function distanceFromHqInFeet(x){
   return distanceFromHqInBlocks(x)*264
}
function distanceTravelledInFeet(x,y){
    
    return Math.abs(y-x)*264

}
function calculatesFarePrice(x,y){
    let feet =(distanceTravelledInFeet(x,y))
    if (feet <=400){
        return 0
    }
    else if (400<feet && feet<=2000){
        feet = feet-400
        return 0.02*feet
    }
    else if (2000<feet && feet<=2500){
        feet= feet-400
         return 25
    }
    else {
        return 'cannot travel that far'
    }
       
}
