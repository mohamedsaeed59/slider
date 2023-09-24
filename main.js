
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
let slideCount = sliderImages.length;
let currentSlide = 1;
let slideNumberElement = document.getElementById('slide-number');
let indicators = document.getElementById('indicators');

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');
for(let i = 1; i <= slideCount; i++){
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
    indicators.appendChild(paginationElement);
}

let paginationCreatedUl = document.getElementById('pagination-ul');
let paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for(let i = 0; i < paginationsBullets.length; i++){
    paginationsBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}
theChecker();

function nextSlide(){
   if(nextButton.classList.contains('disabled')){
    return false;
   }else{
    currentSlide ++;
    theChecker();
   }
}

function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        return false;
       }else{
        currentSlide --;
        theChecker();
       }
}

function theChecker(){
    slideNumberElement.textContent = 'Slide ' + (currentSlide) + ' of ' + (slideCount);
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add('active');
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
   
    if(currentSlide == 1){
        prevButton.classList.add("disabled");
    }else{
        prevButton.classList.remove("disabled");
    }

    if(currentSlide == slideCount){
        nextButton.classList.add('disabled');
    }else{
        nextButton.classList.remove('disabled');
    }
}

function removeAllActive(){
    sliderImages.forEach((img) => {
        img.classList.remove('active');
    });

    paginationsBullets.forEach((bullet) => {
        bullet.classList.remove('active');
    });
}