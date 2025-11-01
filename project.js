console.log('Project JS loaded');



const imgElement = document.getElementById('img');
const btnElement = document.getElementById('actionButton');

const img_sources = [
    '/assets/yasmin.jpg',
    '/assets/yasmine.jpg',
    '/assets/yas2.jpg',
    '/assets/yas3.jpg'

];

btnElement.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * img_sources.length);
    imgElement.src = img_sources[randomIndex];

    console.log('Button clicked, image changed to:', img_sources[randomIndex]);
});


//document.getElementById('img').src = img_sources[Math.floor(Math.random() * img_sources.length)];

