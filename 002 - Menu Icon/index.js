var menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', function() {
    if (menuIcon.classList.contains('active')) {
      menuIcon.classList.toggle('deactive')
    } else {
      menuIcon.classList.toggle('active')
    }
  })
