/* OOP

What is oop ?
Object oriented programming

what is the three types of programming ?
1- Procedural programming
2- Functional programming 
3- Object oriented programming
*/

// Procedural programming
// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const form = document.getElementById('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   if (!username.value || !password.value) {
//     alert('Please enter your username and password');
//     return;
//   }
//   const user = {
//     username: username.value,
//     password: password.value,
//   };
//   alert('Welcome');
// });

// Functional programming
// const checkValues = () => {
//   const username = document.getElementById('username');
//   const password = document.getElementById('password');
//   return !username.value || !password.value;
// };
// const handleFormSubmit = (e) => {
//   e.preventDefault();
//   if (checkValues()) {
//     alert('Please enter your username and password');
//     return;
//   }
//   const user = {
//     username: username.value,
//     password: password.value,
//   };
//   alert('welcome');
// };
// const connectForm = () => {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', handleFormSubmit);
// };
// connectForm();

// Object oriented programming
// class Form {
//   constructor() {
//     this.form = document.getElementById('form');
//     this.username = document.getElementById('username');
//     this.password = document.getElementById('password');
//     this.form.addEventListener('submit', this.handleSubmit);
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (!this.username.value || !this.password.value) {
//       alert('Please enter your username and password');
//       return;
//     }
//     const user = new User(this.username, this.password);
//     console.log(user);
//     alert('welcome !');
//   };
//   getUserName = () => {
//     console.log(this.username);
//   };
// }
// class User {
//   constructor(username, password) {
//     this.username = username;
//     this.password = password;
//   }
//   login = () => {
//     alert('User logged in successfully');
//   };
//   logout = () => {
//     alert('User logged out successfully');
//   };
// }
// const form1 = new Form();
// form1.getUserName();
