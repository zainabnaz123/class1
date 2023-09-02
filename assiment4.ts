//Develop a program that calculates 
//and prints the sum of the first n even numbers using a for loop.
//var sum:number=0
// var list:number[]=[]
// for(let index =1;index<=20;index++){if( index%2==0){
//         sum=sum+index;
//         list.push(index)
//     }
//console.log("sum",sum ,list)
// Write a program that uses a function
//  to find the largest element in an array of numbers.
// var index:number=0
// var list:number[]=[0,1,2,3,4,5,6,7,8,9]

// while(index<=10){
//     index++
//     if(list[index]>list.length){

//     }
//     console.log(index,list)
//     }
// console.log(index)

// implement a program that uses a for loop to iterate through an array of numbers
//  and print only the even numbers

// var list:number[]=[1,2,3,4,5,6,7,8,9]
// console.log(list)
// var sum:number=0
// for(let index:number=1;index<=10;index++){
//     if(index%2==0){
//         sum=sum+index
// list.push(index)

//         console.log(index,list)

//     }
// }

//Implement a program that uses a loop to iterate through an array of numbers and remove all the even 
//numbers from them and just leave the odd ones

var list:number[]=[11,13,14,15,16,17,18,19,20];
var index=0
while(index<list.length){
    index++;
    if(list[index]%2==0){
        list.splice(index,1);
    }
}
console.log(list)
