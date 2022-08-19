function createCounter(initialValue, min, max) {

    let count = initialValue ?? 0;
    const wrapperEl = document.getElementById('counter');
    const incrementEl = document.createElement('button');
    const decrementEl = document.createElement('button');
    const counterEl = document.createElement('span');
    const counterWrapperEl = document.createElement('div');
    incrementEl.innerHTML = '+';
    decrementEl.innerHTML = '-';
    counterEl.innerHTML = 'counter: ' + count;

    const decrement = () => {
        if (!min || count > min) {
            count -= 1;
            counterEl.innerHTML = 'counter: ' + count;
            incrementEl.disabled = false;
        } else {
            decrementEl.disabled = true;
        }

    };

    const increment = () => {
        if (!max || count < max) {
            count += 1;
            counterEl.innerHTML = 'counter: ' + count;
            decrementEl.disabled = false;
        } else {
            incrementEl.disabled = true;
        }
    };

    const getCount = () => count;

    decrementEl.onclick = decrement;
    incrementEl.onclick = increment;

    counterWrapperEl.append(decrementEl);
    counterWrapperEl.append(incrementEl);
    counterWrapperEl.append(counterEl);
    wrapperEl.append(counterWrapperEl);

    return { counter: getCount, decrement: decrement, increment: increment }
}

const counter_1 = createCounter(15, 13, 17);
const counter_2 = createCounter(-6, -8, -4);
const counter_3 = createCounter(10, 8, 12);

console.log(counter_1.counter());
console.log(counter_2.counter());
console.log(counter_3.counter());

counter_1.decrement();
console.log(counter_1.counter());
counter_3.increment();
console.log(counter_3.counter()); 
