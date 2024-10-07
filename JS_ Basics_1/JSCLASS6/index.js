// function eventHappening(){
//     console.log('I am clicked');
// } 

//document.addEventListener('click', eventHappening);


// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(event){
//     console.log(event);
// })

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('mja aaya', 'accha lga');
    
// })
// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log('para' + event.target.textContent);
// }
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' +i;

//     newElement.addEventListener('click', paraStatus);
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv)

let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event){
    if(event.target.nodeName=== 'SPAN')
    console.log("span pr click kia hai " + event.target.textContent );
    
})