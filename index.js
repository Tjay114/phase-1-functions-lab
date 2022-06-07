// Code your solution in this file!
function distanceFromHqInBlocks(somevalue){
return  Math.abs (somevalue-42);
}

function distanceFromHqInFeet(somevalue){

    return distanceFromHqInBlocks(somevalue)*264
}
function distanceTravelledInFeet(destination,start){
    const blocks = destination - start;
    return Math.abs(blocks * 264)
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance<=400);
}