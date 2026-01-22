// operators
// ternary operator
    i=8;
    let result = (i%2==0)?"Even":"Odd";
    console.log(result)

    mark =80
    let resul=(mark>=90)?"O grade":(mark>=80)?"A grade":"Fail";
    console.log(resul)

//Spread Operator(...)
var arr1 = [10,20,30];
var arr2 = [...arr1,40,50,60];
console.log(arr2);

//Destructuring Operator
var [m1,m2,m3,m4,m5] = [89,90,99,96,87]
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);

var {name,age,Dept,marks}={
    name:"rakshi",
    age:19,
    Dept:["CS","DS"],
    marks:{
        mern:90,
        java:89,
        python:76
    }
}
console.log(name);
console.log(age);
console.log(Dept);
console.log(marks);
