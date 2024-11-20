//practice of the dom
//finding the children of the element

const parent = document.querySelector('.parent-c');
console.log(parent);

//let's find the children

const children = parent.children;
console.log(children);

//let 's find the first child 
const firstChild = parent.children[0];
console.log(firstChild);
//second method but not advisable
const firstChild2 = parent.firstChild;
console.log(firstChild2);

//let's find the last child

const lastChild = parent.children[4];
console.log(lastChild);

//or this method but not advisable

const lastChild2 = parent.lastChild;
console.log(lastChild2);

//let's find the next sibling
//next sibling is the element that comes after another element

const first = document.querySelector('.first');
const nextSibling = first.nextSibling.nextSibling;
console.log(nextSibling);

//lets find the previous sibling

const link = document.querySelector('.link');
const previous = link.previousSibling.previousSibling;
console.log(previous);

//lets find the parent element

const last = document.querySelector('.last');
const parentElement =  last.parentElement;
console.log(parentElement);

//getAttribute
const attributParent = parent.getAttribute('class');
console.log(attributParent);

//set attributel

const nouveau = last.previousSibling.previousSibling;
console.log(nouveau);
nouveau.setAttribute('class', 'last');
//console all elemetn that have the class attribute value of last
const last2 = document.querySelectorAll('.last')
//want to make a style on the last class value element
last2[0].style.color = 'red';
last2[1].style.color = 'blue';

console.log(last2);

//let 's change the content of the third item

nouveau.textContent = 'I alos have a last class value';
