// Write your solution below:

const tshirtSort = string => {
    let charArr = [];
    for(let char of string) {
        charArr.push(char);
    }
    return charArr.sort().reverse().join('');
}

console.log(tshirtSort('slsmmsllsmsmlmsls'));
console.log(tshirtSort('smlsmllsmslsmlmslsmslmslmmlssmlssmlllllmsmmslsmslmlsmsmslmsmmlsl'));
console.log("\n----------------------------------\n");

//additional functionality for large numbers of tshirts
const numTshirts = string => {
    let sorted = tshirtSort(string);
    let small = Array.prototype.filter.call(sorted, char => char === 's').length;
    let medium = Array.prototype.filter.call(sorted, char => char === 'm').length;
    let large = Array.prototype.filter.call(sorted, char => char === 'l').length;
    return `You need ${small} small, ${medium} medium, and ${large} large tshirts.`;
}

console.log(tshirtSort("smllmlmlmsslmmlmlmlmssssmlmssmslmslmslsmlsmslmslmslmslsmlsmlsmmslmmslsmlsmlsllslmlmslslllsmslmslmsssmslmlsmslml"));
console.log(numTshirts("smllmlmlmsslmmlmlmlmssssmlmssmslmslmslsmlsmslmslmslmslsmlsmlsmmslmmslsmlsmlsllslmlmslslllsmslmslmsssmslmlsmslml"));