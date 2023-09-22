import inquirer from "inquirer";
// //- Addition
// async function result5() {
//     const result5=await inquirer.prompt([{
//         type:"number",
//         name:"num1",
//         message:"enter num1"
//     },
//  {
//         type:"number",
//         name:"num2",
//         message:"enter num2",
//     }])
//    console.log ("result is",result5.num1+result5.num2)}
// result5()
// //-Subtraction
// async function result() {
//     const result=await inquirer.prompt([{
//         type:"number",
//         name:"num3",
//         message:"enter num3"
//     },
//  {
//         type:"number",
//         name:"num4",
//         message:"enter num4",
//     }])
//    console.log ("result is",result.num3-result.num4)}
// result()
// //MULTIPLICATION
// async function result2() {
//     const result2=await inquirer.prompt([{
//         type:"number",
//         name:"num3",
//         message:"enter num3"
//     },
//  {
//         type:"number",
//         name:"num4",
//         message:"enter num4",
//     }])
//   console.log( "result is",result2.num3*result2.num4) }
//  result2()
// //DIVISION
// async function result1() {
//     const result1=await inquirer.prompt([{
//         type:"number",
//         name:"num3",
//         message:"enter num3"
//     },
//  {
//         type:"number",
//         name:"num4",
//         message:"enter num4",
//     }])
//   console.log( "result is",result1.num3/result1.num4) }
// result1()
// //MODULES
// async function result3() {
//     const result3=await inquirer.prompt([{
//         type:"number",
//         name:"num3",
//         message:"enter num3"
//    },
//  {
//         type:"number",
//         name:"num4",
//         message:"enter num4",
//     }])
//   console.log( "result is",result3.num3%result3.num4) }
// result3()
// //EXPONENT
// async function result4() {
//     const result4=await inquirer.prompt([{
//         type:"number",
//         name:"num3",
//         message:"enter num3"
//     },
//  {
//         type:"number",
//         name:"num4",
//         message:"enter num4",
//     }])
//   console.log( "result is",result4.num3^result4.num4) }
// result4()
//All OPERATION
//import inquirer from "inquirer";
inquirer.prompt([{
        type: "number",
        name: "num3",
        message: "enter num3",
    },
    {
        type: "number",
        name: "num4",
        message: "enter num4",
    },
    {
        name: "operation",
        type: "list",
        message: "Enter the operation?",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "modules", "exponent"],
    },
])
    .then((answer) => {
    console.log(answer);
    switch (answer.operation) {
        case "Addition":
            console.log(answer.num1 + answer.num2);
            break;
        case "Subtraction":
            console.log(answer.num1 - answer.num2);
            break;
        case "Multiplication":
            console.log(answer.num1 * answer.num2);
            break;
        case "Division":
            console.log(answer.num1 / answer.num2);
            break;
        case "modules":
            break;
            console.log(answer.num1 % answer.num2);
        case "exponent ":
            console.log(answer.num1 / answer.num2);
            break;
        default:
            break;
    }
});
