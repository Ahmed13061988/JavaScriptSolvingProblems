// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 34;
// const calcAge = birthYear => 2022 - birthYear;
//console.log(calcAge(1988));

// We work for a company building a smart home thermometer. Our most recent task is this: " Given an array of tempretures of one day, calculate the tempretures amplitude. Keep in mind that sometimes there might be sensor error."

const tempretures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9];

//Understanding the problem
//1 - What is tempreture amplitude? Is the difference betweeen highest and lowest temp
// 2 - How to compute the max and min temretures?
//3- What a sensor error? And what to do?

// Breaking it up to sub-problems
//1- How to ignor errors
//2- find max value value in temp array
//3- find the minimum value in temp array
//4- subtract min from max
//5- return the results

const calcTempAmplitude = function (tempretures) {
  let max = tempretures[0];
  let min = tempretures[0];
  for (let i = 0; i < tempretures.length; i++) {
    if (typeof tempretures[i] !== 'number') continue;
    if (tempretures[i] > max) max = tempretures[i];
    if (tempretures[i] < min) min = tempretures[i];
  }
  //console.log(max);
  //console.log(min);
  const amplitude1 = max - min;
  //console.log(amplitude1);
};
calcTempAmplitude(tempretures);

// Problem 2:
//Function should now receive two arrays of tempretures

//Understanding the problem
//1-With 2 arrays, should we implement the functionality twice? No

// Divide to sub-problem
//Merge two arrays

const calcTempAmplitudeWith2Arrays = function (t1, t2) {
  const tempretures = t1.concat(t2);
  let max = tempretures[0];
  let min = tempretures[0];
  for (let i = 0; i < tempretures.length; i++) {
    if (typeof tempretures[i] !== 'number') continue;
    if (tempretures[i] > max) max = tempretures[i];
    if (tempretures[i] < min) min = tempretures[i];
  }
  //console.log(max);
  //console.log(min);
  const amplitude2 = max - min;
  console.log(amplitude2);
};
calcTempAmplitudeWith2Arrays([3, 5, 1], [9, 0, 5]);
