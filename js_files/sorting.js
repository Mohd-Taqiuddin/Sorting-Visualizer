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
// newArray.addEventListener("click", function(){
//     console.log("From newArray " + arraySize.value);
//     console.log("From newArray " + delay);
//     enableSortingBtn();
//     enableSizeSlider();
//     getArray(arraySize.value);
// });
console.log(newArray);
newArray.addEventListener("click",getArray);