function isPrime(n) {
    let result = true;
    if (n<2){
        result = false;
    } else if (n>3){
        for (let i = 2; i < n; i++) {
            if (n%i === 0) {
                result = false;
            }
        }
    }
    return result;
}

function checkPrime(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])){
            count++;
        }
    }
    return count;
}

let arr1 = [1,5,3,7,6,10,17];
document.write(checkPrime(arr1));