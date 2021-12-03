console.log('Hey from jquery');

/* 

What is jquery ?
javascript library helps simplifie the AJAX calls and DOM manipulation.


what jquery solves ?

1- the complex code of ajax and dom is now easy
2- the browser compatibility
*/

function ajax(method, url) {
  if ('chrome') {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {};
    xhr.onerror = function () {};
    xhr.open(method, url);
    xhr.send();
  } else {
  }
}
ajax('get', 'google.com');
// fetch()

// Vanilla js
// const mainTitle = document.getElementById('main-title');
// mainTitle.innerHTML = 'Updated by dom';
// document.getElementById('main-title').classList.add('color-red');
// document.getElementById('main-title').style.backgroundColor = 'green';
// document.getElementById('clear-button').addEventListener('click', () => {
//   alert('Clear clicked');
// });

// Jquery
// $('#main-title').html('Updated by jQuery');
// $('#main-title').addClass('color-red');
// $('#main-title').css('background-color', 'green');
// $('#clear-button').on('click', () => {
//   alert('Clear clicked !');
// });
