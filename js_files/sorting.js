function newArray() {
    const array = [];
    var div = document.createElement('DIV');
    // console.log('*********')

    for(let i = 0; i < 100; i++){
        array.push(Math.floor(Math.random() * 100));
        document.body.appendChild(div);
    }

    console.log(array);
}