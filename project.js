console.log('Project JS loaded');



const imgElement = document.getElementById('img');
const btnElement = document.getElementById('actionButton');

const img_sources = [
    "./assets/jas1.jpg",
    "./assets/jas2.jpg",
    "./assets/jas3.jpg",
    "./assets/jas4.jpg"

];

btnElement.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * img_sources.length);
    imgElement.src = img_sources[randomIndex];

    console.log('Button clicked, image changed to:', img_sources[randomIndex]);
});


//document.getElementById('img').src = img_sources[Math.floor(Math.random() * img_sources.length)];

