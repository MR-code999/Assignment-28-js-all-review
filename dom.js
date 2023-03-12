document.getElementById('container').addEventListener('click', function () {
    const div = document.createElement('h1');
})

function BGcolor() {
    const numbers = document.getElementsByClassName('second');
    for (const number of numbers) {
        number.style.backgroundColor = 'green';
    }
}