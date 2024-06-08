const Year = document.querySelector('#Year');
const options = {
year: "numeric"
};
Year.innerHTML = new Date().toLocaleDateString("en-US", options);

const lastModified = document.querySelector('#lastModified');

lastModified.innerHTML = new Date(document.lastModified);