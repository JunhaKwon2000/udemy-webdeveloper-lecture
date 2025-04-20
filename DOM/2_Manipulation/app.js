// // Manipulating by js

// const h1 = document.querySelector('h1');

// // innertext: shows the inner text
// console.log(document.querySelector('p').innerText);

// // textcontent: shows every text(element) (even non-disply)
// console.log(document.querySelector('p').textContent);

// // manipulation
// document.querySelector('p').innerText = 'LOL';

// const allLinks = document.querySelectorAll('a');
// for (let link of allLinks) {
//     link.innerText = 'LINK!!!!!!!!!!!!!!!!!!!!!!!!!!!1';
// }

// // innerHTML: shows all html syntax, used when changing
// console.log(document.querySelector('p').innerHTML)
// document.querySelector('h1').innerHTML = '<a href="#">GOGOGO</a>';
// document.querySelector('h1').innerHTML += '<span>GOGOGO</span>';

// // accessing attributes
// // document.querySelector('#banner').id = 'Whoops';
// console.log(document.querySelector('#banner').src);

// const link = document.querySelector('a');
// console.log(link.href);
// console.log(link.getAttribute);

// // you can add attributes using setAttribute
// link.setAttribute('href', 'http://www.google.com');

// const inp = document.querySelector('input[type="text"]');
// inp.setAttribute('type', 'color');


// // style: remeber, the - becomes camal(background-color = backgrounColor)
// // does not contain any styles from the css sheet, but inline style(which is NOT recomended)
// // all values should be written in string('50px')
// document.querySelector('h1').style.backgroundColor = 'orange';

// const allLinks = document.querySelectorAll('a');
// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 134, 188)';
//     link.style.textDecorationColor = 'magenta';
// }

// // tip: how to see the actual computed style
// h1 = document.querySelector('h1');
// console.log(window.getComputedStyle(h1).color);
// console.log(window.getComputedStyle(h1).fontSize);


// // style applies changes directly inline, which is not a good idea
// // BETTER OPTION: create classes(utility class) and apply that class
// // classlist is recommended(. not needed)
// const h2 = document.querySelector('h2');
// h2.classList.add('purple', 'border');
// h2.classList.remove('border');
// console.log(h2.classList.contains('border'));
// // toggle: when the class is in, it removes it, and when it isn't, it includes it! Super Important
// // test the following on devtools!
// // h2.classList.toggle('border');


// // properties
// // when someone clicks on a button, we can make changes to the parent/child
// const bold = document.querySelector('b');
// console.log(bold.parentElement.parentElement);

// const p = bold.parentElement;
// console.log(p.children); // childern can be more than 1

// const firstSquare = document.querySelector('.square');
// console.log(firstSquare.previousSibling); // returns DOM node, not what we intended
// console.log(firstSquare.nextSibling); // returns DOM node, not what we intended
// console.log(firstSquare.previousElementSibling); // use this
// console.log(firstSquare.nextElementSibling); // use this



// // append: creating new element and appending it to the page
// const newImage = document.createElement('img'); // img element created, but missing source
// // set the source, but we need to put this on the page
// newImage.setAttribute('src', 'https://plus.unsplash.com/premium_photo-1672743593121-ddc2fee0e62b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8');
// document.body.appendChild(newImage); // append this as the last child
// newImage.classList.add('square');
// const newH3 = document.createElement('h3');
// newH3.innerText = 'NEWNEWNEW';
// document.body.appendChild(newH3);

// // append is more flexible than appendChild (can apply more than one)
// const par = document.querySelector('p');
// par.append('i am ME!!!!!!!!!', 'The other text'); // last child of p
// const newB = document.createElement('b');
// newB.append('HIHIHIH'); // we can use this as well as inner-text
// par.prepend(newB); // first child of p

// // inserting to adjacent
// const h2 = document.createElement('h2');
// h2.append('ARE CUTE!!!!!!!!!!!!!!');
// const h1 = document.querySelector('h1');
// h1.insertAdjacentElement('afterend', h2); // beforebegin, afterend is used
// const h3 = document.createElement('h3');
// h3.innerText = 'I AM JUNHA!!!!';
// h1.after(h3); // this can be possible too (before exists too)


// remove: remove an element
const fstLi = document.querySelector('li');
// removeChild: must use it on the parent of the remove item
fstLi.parentElement.removeChild(fstLi);

// newer method: remove, use it on the actual item
const img = document.querySelector('img');
img.remove();