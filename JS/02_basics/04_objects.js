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


const course = {
    courseName: "js",
    price: 999,
    courseInstructor: "hitesh"
}

//course.courseName

// const{courseInstructor}=course //destructuring the object
const { courseInstructor: instructor } = course //destructuring the object

// console.log(courseInstructor); //hitesh
console.log(instructor);

// const navbar =() =>{

// }
// navbar.companyName="ashirbad"


//JSON --------------------------------------------------API
/**
 * JSON
 * json is like a object but it is a string format
 *  it has no name and no function and no date and no comments 
 * it has only key value pairs
 * 
 */

// {
//     "name":"ashirbad",
//     "age":18,
//     "isLoggedIn":true

// }

// {
//     { },
//     { },
//     { },
//     { },

// }


// {
//     "results": [
//         {
//             "gender": "female",
//             "name": {
//                 "title": "Miss",
//                 "first": "Jennie",
//                 "last": "Nichols"
//             },
//             "location": {
//                 "street": {
//                     "number": 8929,
//                     "name": "Valwood Pkwy",
//                 },
//                 "city": "Billings",
//                 "state": "Michigan",
//                 "country": "United States",
//                 "postcode": "63104",
//                 "coordinates": {
//                     "latitude": "-69.8246",
//                     "longitude": "134.8719"
//                 },
//                 "timezone": {
//                     "offset": "+9:30",
//                     "description": "Adelaide, Darwin"
//                 }
//             },
//             "email": "jennie.nichols@example.com",
//             "login": {
//                 "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//                 "username": "yellowpeacock117",
//                 "password": "addison",
//                 "salt": "sld1yGtd",
//                 "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//                 "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//                 "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//             },
//             "dob": {
//                 "date": "1992-03-08T15:13:16.688Z",
//                 "age": 30
//             },
//             "registered": {
//                 "date": "2007-07-09T05:51:59.390Z",
//                 "age": 14
//             },
//             "phone": "(272) 790-0888",
//             "cell": "(489) 330-2385",
//             "id": {
//                 "name": "SSN",
//                 "value": "405-88-3636"
//             },
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/men/75.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//             },
//             "nat": "US"
//         }
//     ],
//         "info": {
//         "seed": "56d27f4a53bd5441",
//             "results": 1,
//                 "page": 1,
//                     "version": "1.4"
//     }




