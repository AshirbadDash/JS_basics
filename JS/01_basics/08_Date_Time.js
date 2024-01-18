//in js date starts from january 1,1970.
//date is calculated in mili seconds

let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString()); //makes it more readable
let myCreatedDate = new Date(2023, 0, 23); //month starts from 0 in javascript
let myCreatedDate2 = new Date("2023-01-23"); //month starts from 0 in javascript
let myCreatedDate3 = new Date("01-14-2023"); //month starts from 0 in javascript

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

//Timestamp

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //converting to milisecond and r rounding off

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);


// `${newDate.getMonth()+1} and the time is `

newDate.toLocaleString('default',{weekday: "long"
,timeZone: ''})

