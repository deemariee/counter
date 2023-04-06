const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const reset = document.getElementById("reset")
const plus = document.getElementById("plus")

minus.addEventListener('click', () => {
    counter.innerHTML--;
})

plus.addEventListener('click', () => {
    counter.innerHTML++;
} )

reset.addEventListener('click', () => {
    counter.innerHTML = 0;
})