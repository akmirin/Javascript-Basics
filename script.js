// console.log('HI');

// variables------------------

// var
// let
// const

// var fname = "sam";

// function intro(){
//     var fname = "akhil";
// }
// intro()
// console.log(fname);

// var fname = "akhil";
// if (fname){
//     console.log(fname);
//     let lname = "gupta";
//     console.log(lname);
// }
// console.log(lname);

// let fname = "akhil";
// fname = "sam";

// console.log(fname);

// const fullName ;

// snake_case
// kebab-case
// camelCase

// console.log(fullName);


//datatypes

// let name  = 'Akhil' //string
// let age = 25 // number
// let car = true // boolean
// let married; //undefined
// let kids = null //null

// let age2 = '25'

// console.log(typeof age2);

//objects------------------

// let person = {
//     name: 'Akhil',
//     age : 25,
//     car: true,
//     married : false,
//     kids: 0 
// }
// console.log(person);

// var person1 = new Object();
// person1.fname = 'akhil';
// person1.lname = 'gupta';

// person1['fname'] =  " sam";
// console.log(person1.fname);

// Arrays---------------------


// sort 
// splice 
// filter 
// map 
// find 
// foreach

// let arr = [3,5,2,4,5]
// arr.sort()
// console.log(arr);



// for (i=0 ; i < items.length; i++ ){
//     console.log(items[i].name);
// }

// items.forEach((item) => {
//     console.log(item.name);
// })
 
// function task(x,y){
//     return x*y;
// }


// task = (x,y) => {
//     return x*y;
// }
// console.log(task(5,3));

// const items = [
//     {name: 'bike', price: 100 },
//     {name: 'Tv', price: 200 },
//     {name: 'Book', price: 10 },
//     {name: 'Mouse', price: 5 },
//     {name: 'Computer', price: 50 },
//     {name: 'Phone', price: 1000 },
// ]

// const filteredItems = items.filter((item) =>{
//     return item.price <= 100
// });
// console.log(filteredItems);


// DOM ----------------------------

// fname = document.getElementById('name');
// fname.style.color = 'red';
// fname.innerText = 'Sam';
// fname.innerHTML = '<h1>Sam</h1>;'
// console.log(fname.innerText);

// newElement = document.createElement('p');
// newElement.innerText = 'Hello From the other side';
// document.getElementById('name').append(newElement);

submitForm = () => {
    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    document.getElementById('fnameError').innerText = '';
    document.getElementById('lnameError').innerText = '';
    document.getElementById('email').innerText = '';
    document.getElementById('password').innerText = '';
    if(!fname){
        document.getElementById('fnameError').innerText = 'Please enter First name';
        document.getElementById('fnameError').style.color = 'red';
    }else if (!lname){
        document.getElementById('lnameError').innerText = 'Please enter Last name';
        document.getElementById('lnameError').style.color = 'red';
    }
    else if (!email){
        document.getElementById('email').innerText = 'Please enter Email';
        document.getElementById('email').style.color = 'red';
    }
    else if (!password){
        document.getElementById('password').innerText = 'Please enter Password';
        document.getElementById('password').style.color = 'red';
    }else{
        alert('form submitted');
        location.assign('demo.html');
    }
}

// ajax -- --------









