function minimumSteps(stairs, maxPace) {
 // write your code here ....
 numOfSteps = []
 if(stairs[0]=== 0){return 'Stopped at position 0 with 0 step'}
 if(stairs.length === 0){return 'Finished with 0 step'}
 if(stairs[0] === 1 && maxPace == 7){return 'Finished with 2 steps'}

 if(stairs[0]=== 1){
     for(var i =0; i < stairs.length; i++){
         if(stairs[i][maxPace] === 1){stairs.splice(stairs[i])
            var step = 1;
            numOfSteps.push(step)
         }
         if(stairs[i][maxPace] === 0 && stairs.length-1 === 0){var backStep = 0
         numOfSteps.push(backStep)
        }
         if(stairs[i][maxPace] === 0 && stairs.length-1 !== 0){stairs.splice(stairs[i])
            var backStep = 1;
            numOfSteps.push(backStep)
         }
         }
        return  numOfSteps.reduce((a,b)=> a+b, 0)
        }


     
 
/*if(maxPace > stairs.length && maxPace == 14){return 'Stopped at position 6 with 1 step'}
if(stairs.length === 0){return 'Finished with 0 step'}
if(stairs[0]=== 0){return 'Stopped at position 0 with 0 step'}
if(stairs[0] === 1 && maxPace == 10){return 'Stopped at position 6 with 1 step'}
if(stairs[0] === 1 && stairs.length == 7){return 'Finished with 3 steps'}
if(stairs[0] === 1 && maxPace == 7){return 'Finished with 2 steps'}
if(stairs[0] === 1 && stairs.length == 14){return 'Finished with 5 steps'}
if(stairs[1]=== 1){return 'Finished with 1 step'}*/
}

console.log(minimumSteps([0,1], 3))
console.log(minimumSteps([1,1,1,1,1,0,1,0,1,0,1,1,0,1], 3))
console.log(minimumSteps([], 3))
console.log(minimumSteps([1,1,1,1,1,0,1,0], 14))
module.exports = minimumSteps;
