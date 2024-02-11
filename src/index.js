import addContent from "./add-content";
import addMenu from "./about";
import addContact from "./contact";

addContent();
const container = document.querySelector('#content');

//tab switching logic for the home button
const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', () => {
    container.textContent = '';
    addContent();
});

//logic for the menu button
const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', () => {
    container.textContent = '';
    addMenu();
});

//logic for the about button
const aboutBtn = document.querySelector('#about');
aboutBtn.addEventListener('click', () => {
    container.textContent = '';
    addContact();
})