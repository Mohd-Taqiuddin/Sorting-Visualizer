async function heapSort() {
    const ele = document.querySelectorAll(".bar");
    console.log('heapsort');

    const n = ele.length;

    for(let i = Math.floor(n / 2) - 1; i >= 0; i--){
        await waitforme(delay);
        await heapify(ele, n, i);
    }

    for(let i = n - 1; i >= 0; i--){
        await waitforme(delay);
        ele[0].style.background = 'orange';
        ele[i].style.background = 'orange';

        swap(ele[0], ele[i]);

        ele[i].style.background = 'green';

        await heapify(ele, i, 0);
    }
}

async function heapify(ele, n, i) {

    console.log('heapify');
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    await waitforme(delay);

    if(l < n && parseInt(ele[l].style.height) > parseInt(ele[largest].style.height))
        largest = l;

    if(r < n && parseInt(ele[r].style.height) > parseInt(ele[largest].style.height))
        largest = r;

    if(largest != i){
        await waitforme(delay);
        ele[i].style.background = 'orange';
        ele[largest].style.background = 'orange';
        swap(ele[i], ele[largest]);

        await waitforme(delay);
        await heapify(ele, n, largest);
    }

}

const heap = document.querySelector(".heapSort");
heap.addEventListener('click', async function(){
    console.log("CLICKED!!");
    disableSortingButtons();
    disableSizeSlider();
    disableNewArrayBtn();
    await heapSort();
    enableSortingButtons();
    enableSizeSlider();
    enableNewArrayBtn();
});