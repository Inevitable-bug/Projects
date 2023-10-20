let svg1 = document.querySelector('.svg1');
let nav = document.querySelector('.nav');
let cart = document.querySelector('.cart');
let cartButton = document.querySelector('.cartb');
let svg2 = document.querySelector('.svg2');
//Cashing the DOM

//Function
function menu(){
  nav.classList.toggle('block');
  svg1.innerHTML=nav.classList.contains('block')?'<svg class="svg1" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="black" d="M17.414 6.586a2 2 0 0 0-2.828 0L12 9.172L9.414 6.586a2 2 0 1 0-2.828 2.828L9.171 12l-2.585 2.586a2 2 0 1 0 2.828 2.828L12 14.828l2.586 2.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586a2 2 0 0 0 0-2.828L14.829 12l2.585-2.586a2 2 0 0 0 0-2.828z"/></svg>':'<svg class="svg1" xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" viewBox="0 0 512 450"><path fill="black" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"/></svg>'
  ;
}


function carting(){
  cart.classList.toggle('show')
}
  var buttons = document.querySelectorAll('.cartb');

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    var imageSrc = document.querySelectorAll('.clothes')[index].getAttribute('src');
    var cartDiv = document.querySelector('.cart');
    var imageElement = document.createElement('img');
    imageElement.classList.add('cartimg')
    imageElement.src = imageSrc;
    cartDiv.appendChild(imageElement);
    alert('added')
  });
});
  

//Event listeners
svg1.addEventListener('click',menu);
svg2.addEventListener('click',carting);
