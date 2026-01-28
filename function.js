//functions
function add(){
    console.log(10+20);
}
add();
// parameter
function add(a,b){
    console.log(a+b);
}
add(10,20);

// Arrow Function
var add = ()=>{
    console.log(10+20);
}
add();
//parameter
var add = (a,b)=>{
    console.log(a+b);
}
add(10,20);


add(15,20);
var c;
function add(a,b){
    c=10;
    console.log(a+b+c);
}

//map function
let arr=[10,20,30,40];
var double_arr=arr.map((i)=>(i*2));
console.log(double_arr)

//filter
var even = arr.filter((i)=>(i%2==0))
console.log(even)

//reduce
var total=arr.reduce((sum,i)=>(sum+i),0);
console.log(total);

var total_sum = arr.map((num)=>num*2).filter((num)=>(num%2==0)).reduce((sum,num)=>(sum+num),0);
console.log(total_sum);

//prime number
let num = 21;
let count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        count++;
    }
}

if (count === 2) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}

//another program for prime number
var n=8
var flag=true;
if(n<=1)flag = false;
else{
    for(let i=2;i<=n/2;i++){
        if(n%i===0){
            flag=false;
            break;
        }
    }
}
console.log(flag?"Prime":"Not prime");


//using the '`' and '$' 
var name="pavi";
console.log(`my name is ${name}`);

//call back function
var add = (a,b,callback)=>{
    var result=a+b;
    callback(result);
}
add(10,20,(res)=>{console.log(res);
})

//function calling

var demo=()=>{
    console.log("I am callback")
}
demo()
var main=(myFunction)=>{
    myFunction()
}
main(demo)

//

var main=(callback)=>{
    console.log("I am main");
    callback()
}
var demo=()=>{
    console.log("I am callback")
}
main(demo);

//promise
var promise = new Promise((resolve,reject)=>{
    var success = false;
    if(success){
        resolve("Promise Resolved");
    }
    else{
        reject("Promise Rejected");
    }
})
promise.then((res)=>console.log(res))
.catch((err)=>console.log(err))

//another form of promise using setTimeout

var promise = new Promise((resolve,reject)=>{
    var success = true;
    if(success){
        setTimeout(()=>{
            resolve("Promise resolved")
        },5000)
    }
    else{
        reject("Promise Rejected");
    }
})
promise.then((res)=>console.log(res))
.catch((err)=>console.log(err))


//API 

// const getData =()=>{
//     return fetch("https://jsonplaceholder.typicode.com/posts")
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))

const getData = async () => {
    try{
        var res = await fetch("https://jsonplaceholder.typicode.com/posts")
    var data = await res.json();
    console.log(data);

    }
    catch(err){
        console.log(err)
    }
    
}
getData();
