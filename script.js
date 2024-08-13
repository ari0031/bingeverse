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
