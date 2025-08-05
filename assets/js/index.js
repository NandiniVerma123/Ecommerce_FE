var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  



  // Select all the tabs and tab content
const tabs = document.querySelectorAll('.tabs li');
const tabContents = document.querySelectorAll('.tab_content');

// Add a click event listener to each tab
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove the 'active' class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    
    // Hide all tab contents
    tabContents.forEach(content => content.style.display = 'none');
    
    // Add 'active' class to the clicked tab
    tab.classList.add('active');
    
    // Show the corresponding tab content
    tabContents[index].style.display = 'block';
  });
});

  