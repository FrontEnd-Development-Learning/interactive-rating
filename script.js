let rating = "";
let rating1 = document.getElementById('one');
let rating2 = document.getElementById('two');
let rating3 = document.getElementById('three');
let rating4 = document.getElementById('four');
let rating5 = document.getElementById('five');

rating1.addEventListener('click', ()=>{
    ratedNumber(rating1);
});
rating2.addEventListener('click', ()=>{
    ratedNumber(rating2);
});
rating3.addEventListener('click', ()=>{
    ratedNumber(rating3);
});
rating4.addEventListener('click', ()=>{
    ratedNumber(rating4);
});
rating5.addEventListener('click', ()=>{
    ratedNumber(rating5);
});


function ratedNumber(ratingCircle){
    rating = ratingCircle.textContent;
}

let thankImage = document.createElement('img')
thankImage.setAttribute("src", "./images/illustration-thank-you.svg");
thankImage.classList.add("thankimage");

let ratedDiv = document.createElement('div');
ratedDiv.classList.add('thankRating');



let thank = document.createElement('h1');
thank.innerHTML = "Thank you!"

let thankMessage = document.createElement('p');
thankMessage.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!"


document.getElementById('submit').onclick = () => {
    clearContent();
    generateContent();
}

const clearContent = () => {
    document.getElementById('mainC').replaceChildren();
}

const generateContent = () => {
    let container = document.getElementById('mainC');
    container.classList.add("thankContent");
    container.appendChild(thankImage);
    let rated = document.createElement('p');
    rated.innerHTML = `You selected ${rating} out of 5.`
    ratedDiv.appendChild(rated);
    container.appendChild(ratedDiv)
    container.appendChild(thank);
    container.appendChild(thankMessage);
}

