
// utility function : swap
function swap(a , b) {
    let temp = a.style.height;
    a.style.height = b.style.height;
    b.style.height = temp;

}

// function for disabling sorting buttons
function disableSortingButtons() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".heapSort").disabled = true;
}

// function for enabling sorting buttons
function enableSortingButtons(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".heapSort").disabled = true;
}

// disable size slider
function disableSizeSlider() {
    document.querySelector("#arr_sz").disabled = true;
}

// enable size slider
function enableSizeSlider() {
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray button
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray button
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Used in async function so that we can see animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#arr_sz');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    getArray(parseInt(arraySize.value));
});

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});


let array = [];
// document.getElementById("newArr").addEventListener("click", newArray);

// this display array when first opened 
getArray();

// generate new array
function getArray(noOfBars = 70) {
    // deleting old bars
    deleteChild();

    array = [];
    for(let i = 0; i < noOfBars; i++){
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    const bars = document.querySelector("#bars");

    for(let i = 0; i < noOfBars; i++){
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = "";
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingButtons();
    enableSizeSlider();
    getArray(arraySize.value);
});


// console.log(newArray);
// newArray.addEventListener("click",getArray);
