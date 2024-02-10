import image from './food.jpg';

export default function addContent() {
    const container = document.querySelector('div');
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Barati! Award winning restaurant of the seas!';
    container.appendChild(heading);

    const myImage = new Image();
    myImage.src = image;
    container.appendChild(myImage);

    const text = document.createElement('p');
    text.textContent = 'Barati is an amazing restaurant headed by Celebrity Chef AZ. We make good food if we do say so ourselves. Our 3 Michelin stars attest to that!';
    container.appendChild(text);
}


