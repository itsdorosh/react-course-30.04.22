const arr = [1,2,3,4,5,6,7];
const [first] = arr;

function greet(a, b) {
    return a + b;
}

if (greet(5, 10) === 15) {
    console.log(`test passed: expected reuslt ${15} equals ${greet(5, 10)}`);
}


//