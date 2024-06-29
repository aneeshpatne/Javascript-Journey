console.log(true && 'hello');
console.log(false && 'hello');
const isPresent = true ; //same as false
console.log(isPresent && 'Student Name')
console.log(isPresent || 'Student Name')
const a = 0; 
console.log(a || 'Sorry doenst exist');
const unwanted = 1 ;
console.log(unwanted && 'error Exists')
const exists = null;
console.log(exists ?? 'doesnt Exists')

const hello = (firstName) => {
    let name = firstName ?? 'Guest' ; 
    console.log(`Hello ${name}`) ; 
};
hello();
hello('Aneesh');