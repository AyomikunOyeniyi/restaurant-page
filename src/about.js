export default function addMenu() {
    const container = document.querySelector('#content');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Delicious Offerings:';
    container.appendChild(heading);

    //div for holding the menu
    const menu = document.createElement('div');

    //heading for appetizers
    const appSub = document.createElement('h3');
    appSub.textContent = 'Appetizers!';
    menu.appendChild(appSub);

    //smaller div for appetizers to make styling easier
    const appetizers = document.createElement('div');
    const puffHeader = document.createElement('h4');
    puffHeader.textContent = 'Puff-Puff Platter';
    appetizers.appendChild(puffHeader);

    const puffPara = document.createElement('p');
    puffPara.textContent = ' Fluffy and lightly sweetened fried dough balls, served with a side of spicy pepper sauce.';
    appetizers.appendChild(puffPara);
    menu.appendChild(appetizers);


    //heading for main courses
    const mainSub = document.createElement('h3');
    mainSub.textContent = 'Main Courses!';
    menu.appendChild(mainSub);

    //smaller div for main courses
    const main = document.createElement('div');
    const riceHeader = document.createElement('h4');
    riceHeader.textContent = 'Jollof-Rice with Fried Plantains';
    main.appendChild(riceHeader);

    const ricePara = document.createElement('p');
    ricePara.textContent = 'Fragrant tomato-based rice cooked with onions and peppers, served with caramelized fried plantains.';
    main.appendChild(ricePara);
    menu.appendChild(main);


    //heading for beverages
    const bevSub = document.createElement('h3');
    bevSub.textContent = 'Beverages!';
    menu.appendChild(bevSub);

    //smaller div for beverages
    const beverages = document.createElement('div');
    const bevHeader = document.createElement('h4');
    bevHeader.textContent = 'Chapman Cocktail';
    beverages.appendChild(bevHeader);

    const bevPara = document.createElement('p');
    bevPara.textContent = 'A vibrant mix of fruity flavors including Fanta, Sprite, Angostura bitters, grenadine syrup, and slices of citrus fruits.';
    beverages.appendChild(bevPara);

    menu.appendChild(beverages);

    container.appendChild(menu);

}