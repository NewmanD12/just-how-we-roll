/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}




/*******************
 * YOUR CODE BELOW *
 *******************/
 let d6_img = document.querySelector('#d6-roll')
 let d6_mean = document.querySelector('#d6-rolls-mean')
 let d6_median = document.querySelector('#d6-rolls-median')
 let d6_mode = document.querySelector('#d6-rolls-mode')

 let double6Roll1 = document.querySelector('#double-d6-roll-1')
 let double6Roll2 = document.querySelector('#double-d6-roll-2')
 let doubleRollSection = document.querySelector('#double-d6')
 let doubleSectionMean = document.querySelector('#double-d6-rolls-mean')
 let doublesSectionMedian = document.querySelector('#double-d6-rolls-median')
 let doublesSectionMode = document.querySelector('#double-d6-rolls-mode')
 
 let d12 = document.querySelector('#d12-roll')
 let d12MeanSection = document.querySelector('#d12-rolls-mean')
 let d12MedianSection = document.querySelector('#d12-rolls-median')
 let d12ModeSection = document.querySelector('#d12-rolls-mode')
 
 let d20 = document.querySelector('#d20-roll')
 let d20MeanSection = document.querySelector('#d20-rolls-mean')
 let d20MedianSection = document.querySelector('#d20-rolls-median')
 let d20ModeSection = document.querySelector('#d20-rolls-mode')

 let reset = document.querySelector('#reset-button')

resetAll()
 
/*******************
 * EVENT LISTENERS *
 *******************/

 d6_img.addEventListener('click', roll6Die)
 doubleRollSection.addEventListener('click', rollDoubleDice)
 d12.addEventListener('click', roll12SidedDie)
 d20.addEventListener('click', roll20SidedDie)
 reset.addEventListener('click', resetAll)



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function roll6Die(){
    num = getRandomNumber(6)
    sixes.push(num)
    mean = findMean(sixes)
    median = findMedian(sixes)
    d6_img.src = `/just-how-we-roll/images/d6/${num}.png`
    d6_mean.innerText = mean
    d6_median.innerText = median
}

function rollDoubleDice(){
    die1 = getRandomNumber(6)
    die2 = getRandomNumber(6)
    double6Roll1.src = `/just-how-we-roll/images/d6/${die1}.png`
    double6Roll2.src = `/just-how-we-roll/images/d6/${die2}.png`
    doubleSixes.push(die1, die2)
    mean = findMean(doubleSixes)
    median = findMedian(doubleSixes)
    doubleSectionMean.innerText = mean
    doublesSectionMedian.innerText = median
}

function roll12SidedDie(){
    num = getRandomNumber(12)
    d12.src = `/just-how-we-roll/images/numbers/${num}.png`
    twelves.push(num)
    mean = findMean(twelves)
    median = findMedian(twelves)
    d12MeanSection.innerText = mean
    d12MedianSection.innerText = median
}

function roll20SidedDie(){
    num = getRandomNumber(20)
    d20.src = `/just-how-we-roll/images/numbers/${num}.png`
    twenties.push(num)
    mean = findMean(twenties)
    median = findMedian(twenties)
    d20MeanSection.innerText = mean
    d20MedianSection.innerText = median
}

function resetAll(){
    sixes = []
    doubleSixes = []
    twelves = []
    twenties = []

    d6_img.src = '/just-how-we-roll/images/start/d6.png'
    d6_mean.innerText = 'NA'
    d6_median.innerText = 'NA'
    d6_mode.innerText = 'NA'

    double6Roll1.src = '/just-how-we-roll/images/start/d6.png'
    double6Roll2.src = '/just-how-we-roll/images/start/d6.png'
    doubleSectionMean.innerText = 'NA'
    doublesSectionMedian.innerText = 'NA'
    doublesSectionMode.innerText = 'NA'
    
    d12.src = '/just-how-we-roll/images/start/d12.jpeg'
    d12MeanSection.innerText = 'NA'
    d12MedianSection.innerText = 'NA'
    d12ModeSection.innerText = 'NA'
    
    d20.src = '/just-how-we-roll/images/start/d20.jpg'
    d20MeanSection.innerText = 'NA'
    d20MedianSection.innerText = 'NA'
    d20ModeSection.innerText = 'NA'
}



/****************
 * MATH SECTION *
 ****************/

function findMean(array){
    sum = 0
    for(let i of array){
        sum += i
    }
    return parseFloat(sum / array.length).toFixed(2)
}

function findMedian(array){
    array.sort(function(a, b){return a - b})
    console.log(array)
    median = array[0]
    if(array.length % 2 === 1){
        midpoint = (array.length / 2) - .5
        median = array[midpoint]
    }
    else {
        midpoint = array.length / 2
        median = (array[midpoint] + array[midpoint - 1]) / 2
    }
    return median
}

function findMode(array){
    for(let num of array){
        console.log(num)
    }
}
