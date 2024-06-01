`use strict`;

// Acessing the form element
// document.getElementById(`signup`);
// document.forms[0] // acess by Index//first form

// document.forms[`formName`] // acess by the form name
// document.forms[`formId`]; // acessing by form Id

// JavaScript Form Handling
// JavaScript uses the HTMLFormElement object to represent a form. This object has properties corresponding to the HTML attributes action and method.

// Methods like submit() and reset() are used for submitting and resetting forms.

// const form = document.getElementById('signup');
// form.action; // returns the action attribute
// form.method; // returns the method attribute
// form.submit(); // submits the form

// Acess form fields
// You can access form fields using DOM methods like getElementsByName(), getElementById(), querySelector(), and so on

// The form.elements property stores a collection of form elements. You can access these Elements by index, id, or name.

// const form = document.getElementById('signup');
// const nameField = form.elements['name']; // accessing element by name
// const emailField = form.elements['email']; // accessing element by name
// const firstElement = form.elements[0]; // accessing first element by index n
