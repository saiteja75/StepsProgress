let prev = document.getElementById('Back');
let next = document.getElementById('Front');
let stepsChild = document.getElementById('steps').children;
let counter = 0

prev.addEventListener('click', function() {
    if (counter != 0) {
        counter -= 1
        stepsChild[2 * counter + 1].classList.remove('bar-active');
        stepsChild[2 * counter + 2].classList.remove('step-active');
        if (counter == 0) {
            prev.classList.add('disable-btn');
        }
    }
    if (counter < 3) {
        next.classList.remove('disable-btn');
    }
})

next.addEventListener('click', function() {
    if (counter < 3) {
        stepsChild[2 * counter + 1].classList.add('bar-active');
        stepsChild[2 * counter + 2].classList.add('step-active');
        prev.classList.remove('disable-btn');
        counter += 1
        if (counter == 3) {
            next.classList.add('disable-btn');
        }
    }
})