// conditional statement
//if
let num=5;
let num2=10;
let num3=5;
if(num==5){
    console.log("if statement executed the number is:"+num);
}
//if-else
if(num%2==0){
    console.log("if statement of if-else statement executed")
}else{
    console.log("else statement of if-else executed")
}
//if-elseif-else
if(num===num2){
   console.log("if statement under if-elseif-else executed");
}else if(num===num3){
    console.log("elif statement under if-elseif-else executed ");
}else{
 console.log("else statement under if-elseif-else executed");
}

//looping statements
//for loop
console.log("for-loop printing numbers 1 to 5");
for(let num=1;num<=5;num++){
    console.log(num);
}
//while loop
console.log("while loop printing numbers1 to 5");
let a=1;
while(a<=5){
    console.log(a)
    a++;
}
//do-while loop
console.log("do-while loop printing number from 1 to 5");
let b=1;
do{
    console.log(b)
    b++;
}while(b<=5)

//for-each loop
let arr=['10','aaa',true];
console.log("for-each loop for printing elements in array");
arr.forEach(element => {
    console.log(element); 
});