// script.js

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const carouselImages = carousel.querySelector('.carousel-images');
  const slides = carouselImages.querySelectorAll('img');
  const totalSlides = slides.length;
  const slideWidth = slides[0].clientWidth; // Ensure each slide width is considered
  let index = 0;
  const maxIndex = 5; // Change this to 3 to stop at the fourth image (0-based index)

  function showSlide(n) {
    // Ensure n is within bounds and set offset
    index = Math.max(0, Math.min(n, maxIndex)); // Limiting index to maxIndex
    const offset = -index * slideWidth; // Calculate offset in pixels
    carouselImages.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    if (index < maxIndex) { // Move to next slide until maxIndex
      index++;
    } else {
      index = 0; // Restart from the first image
    }
    showSlide(index);
  }

  function prevSlide() {
    if (index > 0) { // Ensure not going below the first slide
      index--;
    } else {
      index = maxIndex; // Go to the last image if at the first image
    }
    showSlide(index);
  }

  // Set up auto-slide every 5 seconds
  let autoSlideInterval = setInterval(nextSlide, 2000);

  // Pause auto-slide on hover
  carousel.addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
  });

  carousel.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(nextSlide, 2000);
  });

  // Navigation Buttons
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  }

  // Initial display of the first slide
  showSlide(index);

  // Search Functionality
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');

  function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
      console.log('Searching for:', query);
      // You can replace this with actual search logic
      // e.g., redirect to a search results page
      // window.location.href = `/search?q=${encodeURIComponent(query)}`;
    } else {
      alert('Please enter a search query.');
    }
  }

  searchButton.addEventListener('click', handleSearch);

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.icon-option');

  icons.forEach(icon => {
      icon.addEventListener('click', () => {
          // Remove the 'selected' class from all icons
          icons.forEach(i => i.classList.remove('selected'));
          // Add the 'selected' class to the clicked icon
          icon.classList.add('selected');
          // Optionally, you can save the selected icon or update the profile picture here
          // Example: updateProfilePicture(icon.src);
      });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const imagesContainer = document.querySelector('.carouseled-images');
  const slides = document.querySelectorAll('.carouseled-slide');
  const prevBtn = document.querySelector('.carouseled-control.prev');
  const nextBtn = document.querySelector('.carouseled-control.next');
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * (slides[0].clientWidth + 20); // Adjust for margin
    imagesContainer.style.transform = `translateX(${offset}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Optional: Auto-slide every 5 seconds
  setInterval(() => {
    nextBtn.click();
  }, 5000);
});
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.carouseled-slide');
  const dotsContainer = document.querySelector('.carouseled-dots');
  let currentIndex = 0;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carouseled-dot');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.carouseled-dot');

  function goToSlide(index) {
    const offset = -index * 100;
    document.querySelector('.carouseled-images').style.transform = `translateX(${offset}vw)`;
    currentIndex = index;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  // Initialize
});
// script.js
// script.js
document.addEventListener('DOMContentLoaded', function () {
  const iconOptions = document.querySelectorAll('.icon-option');
  const profileIcon = document.querySelector('.profile-icon'); // Profile icon in the header

  // Load saved icon from localStorage
  const savedIconSrc = localStorage.getItem('profileIconSrc');
  if (savedIconSrc) {
      profileIcon.src = savedIconSrc;
  }

  iconOptions.forEach(icon => {
      icon.addEventListener('click', function() {
          const newIconSrc = this.src; // Get the src of the clicked icon
          profileIcon.src = newIconSrc; // Update the profile icon's src

          // Save the selected icon to localStorage
          localStorage.setItem('profileIconSrc', newIconSrc);

          console.log(`Profile icon changed to: ${newIconSrc}`);
      });
  });

  document.querySelector('.edit-profile').addEventListener('click', function() {
      console.log('Edit Profile clicked');
      // Implement logic to edit the profile
  });

  document.querySelector('.logout').addEventListener('click', function() {
      console.log('Logout clicked');
      // Implement logic to logout
  });
});
