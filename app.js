'use strict';
console.log('Here\'s a hidden message!');
let today = new Date();
let formatDate = today.toDateString();
//let selectElement = document.getElementById('date');
let selectElement = document.getElementsByClassName("list");
selectElement.innerHTML = formatDate;
