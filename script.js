$(document).ready(function () {
    let currentIndex = 0;
    const images = $('.gallery-img').toArray();
  
    function showLightbox(index) {
      const src = $(images[index]).attr('src');
      $('.lightbox-img').attr('src', src);
      $('#lightbox').removeClass('d-none');
      currentIndex = index;
    }
  
    function closeLightbox() {
      $('#lightbox').addClass('d-none');
    }
  
    $('.gallery-img').click(function () {
      const index = images.indexOf(this);
      showLightbox(index);
    });
  
    $('.close-btn').click(closeLightbox);
    $('#lightbox').click(function (e) {
      if (e.target === this) closeLightbox();
    });
  
    $('.prev').click(function (e) {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showLightbox(currentIndex);
    });
  
    $('.next').click(function (e) {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      showLightbox(currentIndex);
    });
  });