const tinderUser = new Object(); //singleton object
// console.log(tinderUser); //{}
// const tinderUser ={ } //Not a singleton object

tinderUser.id = "123abc";
tinderUser.name = "John";
tinderUser.age = 25;
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "somename@gmail.com",
    fullName: {
        userFullName: {
            firstName: "somename",
            lastName: "lastname",
        },
    },
};

// console.log(regularUser.fullName.userFullName.firstName);

//combining objects

const user = {
    1: "a",
    2: "b",
};

const user2 = {
    3: "c",
    4: "d",
};

// const user3= { user, user2}

console.log(user3); //object with two objects inside

const user3 = Object.assign({}, user3, user2); //combining objects into one object
//{} is the target object and user3 is the source object and user2 is the source object

const obj4 = { ...user, ...user2 }; //combining objects into one object using spread operator

//database values
const dbUser = [
    {
        email: "ash@gmail.com",
        password: "123456",
    },
    {
        email: "john@gmail.com",
        password: "123456",
    },
    {},
    {},
];

// console.log(dbUser[0].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //returns an array of keys

console.log(Object.values(tinderUser)); //returns an array of values

console.log(Object.entries(tinderUser)); //returns an array of arrays of key value pairs

// console.log(Object.entries(tinderUser)[0][1]); //returns the value of the first key

console.log(tinderUser.hasOwnProperty("id")); //returns true if the object has the key