// // let a =[1,2,3,4,5];
// // for(let i=0;i<a.length;i++){
// //     console.log(a[i]);
// // }

// let student={
//     id:10,
//     age:19,
//     add(){
//         console.log("function of student class");
//     },
//     display:function(){
//         console.log("another way");
//     }
// }

// console.log("id= "+student.id);
// console.log("age= "+student.age);
// student.add();

let employee = {
  id: 10,
  age: 18,
  contactNumber: 987654321,
  working(){
    console.log("Employee is working")
  },
  sleeping: function () {
    console.log("Employee is sleeping")
  },
};
employee.company = "kodnest";

employee.working();
employee.sleeping();
console.log(
  `the id of the employee is  ${employee.id} and the age of the employee is ${employee.age} and the contact number of the employee is ${employee.contactNumber}  and the company where the employee is working is ${employee.company}`
);

let employee1={
    name:"jogi",
    working(){
        console.log("employee1 is working");
    }
}


let employee2={
    name:"yogi",
    working(){
        console.log("employee2 is also working");
    }
}

let employee_array=[employee1,employee2]

for (let index = 0; index < employee_array.length; index++) {
    const element = (employee_array[index].name) ;
    employee_array[index].working();
    
}