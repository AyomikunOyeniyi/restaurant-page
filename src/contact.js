export default function addContact() {
    const container = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = 'Send your love to:';
    container.appendChild(header);

    const name = document.createElement('p');
    name.textContent = 'AZ Cooker';
    container.appendChild(name);

    const number = document.createElement('p');
    number.textContent = '(000)-000-0000';
    container.appendChild(number);
}