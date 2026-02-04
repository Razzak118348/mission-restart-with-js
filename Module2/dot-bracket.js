const student={
    name:"John Doe",
    marks:85,
    1:20,
    'short-name':"John"

}
//dot notation
const studentName=student.name;
console.log(studentName);
console.log(student)
// console.log(student.'short-name'); this will give error

//bracket notation hansle spacial character and number as key
const student1 = student["1"]
console.log(student1);
console.log(student['short-name']);


//loop through object keys
console.log("Loop through object keys");
for(const key in student){
    const value=student[key];
    console.log(`Key is ${key} and value is ${value}`);
}