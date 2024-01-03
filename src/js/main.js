window.addEventListener('scroll', function() {
    var navbar = document.getElementById('ctnNavbar');
    var scrollTop = window.scrollY;
  
    if (scrollTop > 100) {
      navbar.classList.add('scrolled-navbar');
    } else {
      navbar.classList.remove('scrolled-navbar');
    }
  });
  