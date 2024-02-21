function initVisitorHomePage() {

    auctionIcon.classList.remove('d-none')
    hamburgerMenu.classList.add('d-none');
  
    const movingImages = document.querySelectorAll('.slide_img');
    movingImages.forEach((e) => {
        e.addEventListener('click', () => {
            location.hash = '#visitorListingPage';
        })
    })
  }
  
  items.forEach(image => {
    upperSlide = document.querySelector('.upper_slide');
    lowerSlide = document.querySelector('.lower_slide');
  
    if (image.id < 10) {
        upperSlide.innerHTML += `
                <div class="slide_img">
                  <img src="${image.image}" alt="${image.title}" />
                </div>
            `
    } else {
        lowerSlide.innerHTML += `
                <div class="slide_img">
                  <img src="${image.image}" alt="${image.title}" />
                </div>
            `
    }
  })
  
  findArtBtn = document.querySelector('.art_btn');
  findArtBtn.addEventListener('click', () => {
    location.hash = '#visitorListingPage'
  })