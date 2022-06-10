// Code your solution in this file!
function distanceFromHqInBlocks(x){
    if (x<0){
        x = Math.abs(x)
    }

    return x-42
}

function distanceFromHqInFeet(x){
   return distanceFromHqInBlocks(x)*264
}
function distanceTravelledInFeet(x,y){
    y =Math.abs(y);
    return (y-x)*264

}
function calculatesFarePrice(x,y){
    let feet =(distanceTravelledInFeet(x,y))-400
    if (feet <=400){
        return 0
    }
    else if ((400<feet) & (feet>=2000)){
        return 0.02*feet
    }
    else if ((2000<feet) & (feet>=2500)){
         return 25
    }
    else {
        return 'Cannot travel that far'
    }
       
}
