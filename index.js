// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if(blocks<42){
        return 42 - blocks;
    }
    else{
        return blocks - 42;
    }
}
console.log(distanceFromHqInBlocks(43));


function distanceFromHqInFeet(distance){

    return distanceFromHqInBlocks(distance) * 264;
}
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(x, y){

    if (x > y){
        return (x - y) * 264;
    }
    else{
        return (y - x) * 264;
    }
}
console.log(distanceTravelledInFeet(43,48));

function calculatesFarePrice(start, destination){

    let distance = distanceTravelledInFeet(start, destination);

    if(distance<400){
        return 0;
    }
    else if(distance>=400 && distance<=2000){
        return (distance - 400) * 0.02;
    }
    else if(distance>=2000 && distance<=2500){
        return 25;
    }
    else if(distance>2500){
        return "cannot travel that far";
    }
}
console.log(calculatesFarePrice(43,48));


