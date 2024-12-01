const circle = document.getElementById('circle');

function changeColor(color) {
    circle.style.backgroundColor = color;
}

const colorInput = document.getElementById('colorInput')

colorInput.addEventListener('input', function() {
    changeColor(this.value);
});

const randomColorBtn = document.getElementById('randomColorBtn');

randomColorBtn.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    changeColor(randomColor);
})

const circleWidth = document.getElementById('circleWidth');
const circleHeight = document.getElementById('circleHeight');
const circleRadius = document.getElementById('circleBorderRadius');

circleWidth.addEventListener('input', function() {
    circle.style.width = this.value + 'px';
})

circleHeight.addEventListener('input', function() {
    circle.style.height = this.value + 'px';
})

circleRadius.addEventListener('input', function() {
    circle.style.borderRadius = this.value + '%';
})

const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', function() {
    circleWidth.value = '';
    circleHeight.value = '';
    circleRadius.value = '';
    colorInput.value = '';
    circle.style.backgroundColor = "";
})