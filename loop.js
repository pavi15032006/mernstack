//for loop
for(let i=0;i<10;i++){
    console.log(i);
}
// while loop
let i=0;
while(i<=10){
    console.log(i);
    i++;
}
// do while loop
i=1;
do{
    console.log('do while');
}while(i==0)

    // even number
    for(let i=0;i<=10;i++){
        if(i%2==0)
            console.log(i)
    }

    //if - else statement
    let mark=170
    if(mark>=90) console.log("O grade");
    else if(mark>=80) console.log("A grade");
    else console.log("fail")

    // switch
    let d=4
    switch(d)
    {
        case 1 : {console.log("sunday");
            break;
        }
        case 2 : {console.log("monday");
            break;
        }
        default : {console.log("invalid");
            break;
        }
    }
    // ternary operator
    i=8;
    let result = (i%2==0)?"Even":"Odd";
    console.log(result)

    mark =80
    let resul=(mark>=90)?"O grade":(mark>=80)?"A grade":"Fail";
    console.log(resul)
