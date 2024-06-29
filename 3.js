// rest and spread
const hero = [1,2,3,4,5,5,6,6,7] ; 
const [first, second] = hero ; 
console.log(first,second) ; 
const [first1, second2, ...rest] = hero ; 
console.log(rest)
//speread
const new1 =[...hero,first]
new1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [arr1,arr2];
const arr4 = [...arr1,...arr2];
