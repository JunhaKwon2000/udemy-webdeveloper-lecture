// -----------------------------------old-----------------------------------
// selectors: basic selector
const s1 = document.getElementById('toc');

// selectors: html collections(not an array, but looks like one, single values are called elements)
const s2 = document.getElementsByTagName('img');
for (let img of s2) {
    console.log(img.src);
    // img.src = 'https:qwieuooo';
}

const s3 = document.getElementsByClassName('square')
console.log(s3);

// -----------------------------------NEW-----------------------------------

// selectors: querySelector & querySelectorAll
// pass in the same syntax as css to access

// querySelector: only returns the first one
console.log(document.querySelector('p')) // tag
console.log(document.querySelector('.square')) // class
console.log(document.querySelector('#toc')) // id
console.log(document.querySelector('a[title="Java"]')) // css syntax can be applied

// querySelectorAll: returns all matching elements as a collection
const links = document.querySelectorAll('p a')
for (let link of links) {
    console.log(link.href);
}