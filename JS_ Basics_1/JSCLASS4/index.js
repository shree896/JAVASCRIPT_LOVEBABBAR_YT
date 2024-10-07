//function declaration

// function run(){
//     console.log('running');
// }
// run();

// //function assignment

// let stand = function walk(){
//     console.log('walking');
// }
// stand();

// let jump = stand;
// jump();

//Anonymous function assignment
// let stand2 = function(){
//     console.log('anonymous fxn here');
// }
// stand2();

// function sum(a,b){
//     let total =0;
//     for(let value of arguments)
//         total =total + value
//     return total;
// };
// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5));
// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

// //Rest Operator
// function sum(...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6)

//Default Parameters
// function interest(p,r,y){
//     return p*r*y/100;
// }
// console.log(interest(1000, 10, 5));


//getter -> access properties
//setter -> change or mutate properties

// let person = {
//     fName: 'Rahul',
//     lName: 'Pandey',
//     get fullName(){
//         return `${person.fName} ${person.lName}`
//     },
//     set fullName(value){
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];

//     }
    
// };
// // console.log(person);
// // person.fullName = "Shreeyans Shree";
// try{
//     person.fullName = true;
// }
// catch(e){
//     alert('You have sent a number in fullname')
// }
// console.log(person.fullName);

// {
//     var a = 5;
//     console.log(a);
// }
// console.log(a);

function walk(){
    var a = 5;
}
console.log(a);