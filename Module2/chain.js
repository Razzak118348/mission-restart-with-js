const student={
    name:"John Doe",
    marks:85,
    1:20,
    'short-name':"John",
    family:{
        father:"Mr. koe",
        // mother:{
        //     name:"Mrs. moe",
        //     age:50
        // },
        sister:"Ms. foe",
        title:"bhuyan"

    }
}
//optional chaining operator ? to avoid error if any key is missing
console.log(student.family?.mother?.name);
console.log(student.family?.title);
// console.log(student['family']['mother']['age']);
