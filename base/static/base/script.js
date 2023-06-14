const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 300) {
    navbar.classList.add('fixed-navbar');
  } else {
    navbar.classList.remove('fixed-navbar');
  }
});



// function activateLink(link) {
//   // remove active class from previous active link
//   var prevActiveLink = document.querySelector('.active');
//   prevActiveLink.classList.remove('active');
  
//   // add active class to current link
//   link.classList.add('active');
// }

// var links = document.querySelectorAll('.blog-nav li a');

// links.forEach(function(link) {
//   link.addEventListener('click', function(event) {
//     // Remove the 'active' class from all links
//     links.forEach(function(otherLink) {
//       otherLink.classList.remove('is-active');
//     });

//     // Add the 'active' class to the clicked link
//     link.classList.add('is-active');
//   });
// });

var links = document.querySelectorAll('.blog-nav li a');
var contentSections = document.querySelectorAll('.content');

links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Remove the 'active' class from all links
    links.forEach(function(otherLink) {
      otherLink.classList.remove('is-active');
    });

    // Add the 'active' class to the clicked link
    link.classList.add('is-active');

    // Hide all content sections
    contentSections.forEach(function(section) {
      section.classList.remove('is-active');
    });

    // Get the ID of the target content section
    var targetId = link.getAttribute('href').substring(1);

    // Show the content section with the matching ID
    var targetSection = document.getElementById(targetId);
    targetSection.classList.add('is-active');
  });
});

