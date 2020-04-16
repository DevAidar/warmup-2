let arr = [4,-3,7,-1,12,-4,2];

let sumPositives = (arr) => {
    let sum = 0;
    for (num of arr)
        if (num > 0)
            sum += num;
    return sum;
}

console.log(sumPositives(arr));
