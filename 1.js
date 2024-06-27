const CreateHelloWorld = function(){
    return function(){
        return 'Hello World';
    }

};

const helloWorldFunction = CreateHelloWorld();
const result = helloWorldFunction();
console.log(result); 