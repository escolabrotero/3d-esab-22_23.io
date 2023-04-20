const instance = basicLightbox.create('', {
    className: 'lightbox',
});

// In order to change the content later, we need the DOM-element of the instance:
const elem = instance.element();
    
function makeLightbox(url) {
    elem.innerHTML = '<figure class="lightbox-figure"><img class="lightbox-img" src="' + url + '"></figure>';
    instance.show();
}

// Select all elements with the class .imagem
document.querySelectorAll('.imagem').forEach((item) => {
    item.addEventListener('click', (event) => {
        makeLightbox(item.dataset.img);
    });
});