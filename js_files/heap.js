async function heapSort() {
    const ele = document.querySelectorAll(".bar");

    const ele = ele.length;

    for(let i = Math.floor(n / 2) - 1; i >- 0; i--){
        heapify(ele, n, i);
    }

    for(let i = n - 1; i > 0; i--){

        swap(ele[0], ele[i]);

        heapify(ele, i, 0);
    }
}

async function heapify(ele, n, i) {

    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if(l < n && ele[l] > ele[largest])
        largest = l;

    if(r < n && ele[r] > ele[largest])
        largest = r;

    if(largest != i){
        swap(ele[i], ele[largest]);

        heapify(ele, n, largest);
    }

}

const heap = document.querySelector(".heapSort");
heap.addEventListener('click', async function(){
    console.log("CLICKED!!");
    // let ele = document.querySelectorAll('.bar');
    // let l = 0;
    // let r = parseInt(ele.length) - 1;
    disableSortingButtons();
    disableSizeSlider();
    disableNewArrayBtn();
    await heapSort();
    enableSortingButtons();
    enableSizeSlider();
    enableNewArrayBtn();
});