// Write your solution below:

const tshirtSort = string => {
    let charArr = [];
    for(let char of string) {
        charArr.push(char);
    }
    return charArr.sort().reverse().join('');
}

console.log(tshirtSort('slsmmsllsmsmlmsls'));