// let lastName = 'Shree'
// let firstName = new String("Rahul")

// console.log(typeof lastName);
// console.log(typeof firstName);

// console.log(lastName.length);

// let message = 'This is my first message';

// let words = message.split(' ');
// console.log(words);

// let date = new Date();

// let date2 = new Date('June 20 1998 07:15')
// let date3 = new Date(1998, 11, 19, 7);
// console.log(date3);

// date3.setFullYear(1947)
// console.log(date3);

// let numbers = [1,4,5,7]

// console.log(numbers);

// numbers.unshift(9);
// console.log(numbers);

// numbers.splice(2,0,'a', 'b', 'c') 
// console.log(numbers);
//end -> push
//middle -> splice
//beginning -> unshift

//Searching

// let numbers = [1,4,5,7]
// console.log(numbers.indexOf(9));

// //we want to check if a number exist in an array
// if(numbers.indexOf(4) !=-1){
//     console.log("present");
// }
// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4, 2));


let courses = [
    {no:1, naam:'Rahul'},
    {no:2, naam:'Pamdey'},
]
// console.log(courses);
// console.log(courses.indexOf( {no:1, naam: 'Rahul'}));

// let course = courses.find(function(course){
//     return course.naam === "Rahul";
// })
// console.log(course);

// arrow fxn for above eg

// let course = courses.find(course => course.naam === 'kilvish')
// function(course) {
//     return course.naam === 'Rahul';
// }
// console.log(course);

// let numbers = [1,2,3,4,5,6,7,8]
// //end
// numbers.pop()
// console.log(numbers);
// //beginning
// numbers.shift()
// console.log(numbers);
// //middle
// numbers.splice(2,1)
// console.log(numbers);

// let numbers = [1,2,3,4,5]
// let number2 = numbers
// //Emptying an array
// // numbers = []
// //numbers.length = 0
// numbers.splice(0, numbers.length)
// console.log(numbers);
// console.log(number2);


//Combining and Slicing Arrays
// let first = [1,2,3]
// let second = [4,5,6]

// let combined = first.concat(second)
// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80]
// let sliced2 = marks.slice(2,6)
// console.log(sliced2);

// let sliced = combined.slice(2,3);
// console.log(sliced);



//Spread Operator 

// let first = [1,2,3]
// let second = [4,5,6]
// // let combined = [...first, ...second]
// let combined = [...first, 'a', 'b', ...second, 'c']
// console.log(combined);

// //create copy
// let another = [...combined]
// console.log(another);

//for of and for-Each loop
// let arr = [10,20,30,40,50]

// // for(let value of arr){
// //     console.log(value);
// // }

// arr.forEach(number=> console.log(number));

//Joining Arrays 
// let numbers = [1,2,3,4,5,6]
// const joined = numbers.join(',');
// console.log(joined);

//Split Method
// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join(' ')
// console.log(joined);

//Sorting of an array
// let numbers = [40,30,10,20,50]
// numbers.sort();
// console.log(numbers);

// numbers.reverse()
// console.log(numbers);

//Filtering an arrays
// let numbers = [1,2,-1,-4];

// let filtered = numbers.filter(value => value >=0);
// console.log(filtered);

//Mapping Arrays
// let arrays = [7,8,9,10]
// let items = arrays.map(function(value){
//     return 'student_no' + value;
// })
// console.log(items);

//Mapping with objects

// let numbers = [1,2,-6,-9]
// let filtered = numbers.filter(value => value >=0);

// let items = filtered.map(function(num){
//     return {value: num}
// })
// console.log(items);