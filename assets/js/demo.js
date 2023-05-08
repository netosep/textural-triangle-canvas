let myTriangle = new TexturalTriangleCanvas('myCanvas').draw();
let language = document.getElementById('language-value');
let clay = document.getElementById('clay-value');
let silt = document.getElementById('silt-value');
let sand = document.getElementById('sand-value');
let btn = document.getElementById('btn-generate');
let sum = document.getElementById('sum');

language.addEventListener("change", function () {
    myTriangle.setLanguage(this.value);
    myTriangle.refresh();
});

clay.addEventListener("input", function () {
    sum.innerHTML = `Sum: ${parseFloat(((clay.value / 100) + (silt.value / 100) + (sand.value / 100)) * 100)}%`;
});

silt.addEventListener("input", function () {
    sum.innerHTML = `Sum: ${parseFloat(((clay.value / 100) + (silt.value / 100) + (sand.value / 100)) * 100)}%`;
});

sand.addEventListener("input", function () {
    sum.innerHTML = `Sum: ${parseFloat(((clay.value / 100) + (silt.value / 100) + (sand.value / 100)) * 100)}%`;
});

btn.addEventListener("click", function () {
    if (parseFloat(((clay.value / 100) + (silt.value / 100) + (sand.value / 100)) * 100) != 100) {
        alert("The sum must be 100%");
        myTriangle.refresh();
        return;
    }
    myTriangle.drawWithValues(silt.value, sand.value, clay.value);
});