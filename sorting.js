const container = document.getElementById('container');

const numItems = 50;

let arr = [];
for (let i = 1; i <= numItems; i++) {
    arr.push(i);
}
shuffle(arr);

let interval;
let end = arr.length - 1;
let i = 0;

function step() {

    if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }

    i++;
    if (i === end) {
        i = 0;
        end--;
        if (end === 0) {
            console.log('finished');
            container.style.color = 'green';
            clearInterval(interval);
        }
    }

}

// ---

function draw() {
    container.innerHTML = '';
    for (let num of arr) {
        for (let i = 0; i < num; i++) {
            container.innerHTML += '#';
        }
        container.innerHTML += '\n';
    }
}

interval = setInterval(function () {
    step();
    draw();
}, 10);


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}