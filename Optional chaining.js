// ?.
const user = {
    name: 'Alice',
    address: {
      street: '123 Main St',
      city: 'Wonderland',
    },
  };
const {name:n1, address} = user;
console.log(user.address?.a)
const user1 = {
    name: 'Bob',
    greet() {
      return 'Hello!';
    },
  };
console.log(user1?.greet1?.())

const users = [{ name: 'Charlie' }, { name: 'Dave' }];
console.log(users?.[1]?.name1)

const apiResponse = {
    data: {
      user: {
        profile: {
          name: 'Eve',
          age: 28,
        },
      },
    },
  };
console.log(apiResponse?.data?.user?.profile?.name)  ;

const greeter = (name) =>{
    const name4 = name || 'Guest' ;
    return () => console.log(name4);
}
const f1 = greeter('aneesh') ; 
f1();