const itemTitleInput = document.querySelector('#item_input');
const artistInput = document.querySelector('#artist_input_select');
const minPriceInput = document.querySelector('#min_price_input');
const maxPriceInput = document.querySelector('#max_price_input');
const typeInput = document.querySelector('#type_input_select');

const visitorListingItemsContainer = document.querySelector('#visitorListingItems')

function initVisitorListingPage() {
  const doneBtn = document.querySelector('.button_done');
  const filterBtn = document.querySelector('.filter_button')
  const filterX = document.querySelector('.button_close')
  const filterMenu = document.querySelector('.filter_menu');

  const items_LS = JSON.parse(localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : items;
  

  visitorListingItemsContainer.innerHTML = '';
  const storageItemsToRender = items_LS.filter(item => item.isPublished)
  storageItemsToRender.forEach(({
    image,
    title,
    description,
    price,
    artist
  }, index) => {
    renderVisitorCard(index, image, artist, price, title, description)
  })

  if (filterMenu.classList.contains('menu_active')) {
    filterMenu.classList.remove('menu_active');
    filterBtn.style.display = 'block';
  }

  doneBtn.style.display = 'none';
  filterBtn.addEventListener('click', () => {
    filterMenu.classList.add('menu_active')
    filterBtn.style.display = 'none';
    doneBtn.style.display = 'block';
  })
  filterX.addEventListener('click', () => {
    filterMenu.classList.remove('menu_active');
    filterBtn.style.display = 'block';
    doneBtn.style.display = 'none';
  })

 
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    data.forEach(user => {
      artistInput.innerHTML += `
        <option value="${user.name}">${user.name}</option>
    `
    })
  })

  itemTypes.forEach((type) => {
    typeInput.innerHTML += `
        <option value="${type}">${type}</option>
    `
  })

  doneBtn.addEventListener('click', () => {
    filterMenu.classList.remove('menu_active');

    const filteredItemsToRender = items_LS.filter(item => item.isPublished &&
      (itemTitleInput.value ? item.title.toLowerCase().includes(itemTitleInput.value.toLowerCase()) : true) &&
      (artistInput.value ? item.artist === artistInput.value : true) &&
      (minPriceInput.value.toString() ? item.price > minPriceInput.value : true) &&
      (maxPriceInput.value.toString() ? item.price < maxPriceInput.value : true) &&
      (typeInput.value ? item.type === typeInput.value : true))

    visitorListingItemsContainer.innerHTML = '';
    filteredItemsToRender.forEach(({
      image,
      title,
      description,
      price,
      artist
    }, index) => {
      renderVisitorCard(index, image, artist, price, title, description)

      minPriceInput.value = '';
      maxPriceInput.value = '';
      itemTitleInput.value = '';
      typeInput.value = '';
      artistInput.value = '';
    })

    filterMenu.classList.remove('menu_active');
    filterBtn.style.display = 'block';
    doneBtn.style.display = 'none';
  })
}

function renderVisitorCard(index, image, artist, price, title, description) {
  if (index % 2 !== 0) {
    visitorListingItemsContainer.innerHTML +=
      `<div class="art_card inverse_card mb-4">
        <div class="image_div">
          <img src="${image}" />
        </div>
        <div class="content-div p-2">
          <div
            class="artist-price d-flex justify-content-between align-items-center my-2">

            <h3 class="reenie_font font_color_light">${artist}</h3>

            <div class="price dark_brown bg_color_light">$${price}</div>

          </div>

          <h6 class="font_color_light">${title}</h6>
          <p class="card_desc font_color_light">
            ${description}
           </p>
         </div>
       </div> `
  } else {
    visitorListingItemsContainer.innerHTML +=
      `<div class="art_card mb-4">
        <div class="image_div">
          <img src="${image}" />
        </div>
        <div class="content-div p-2">
          <div
            class="artist-price d-flex justify-content-between align-items-center my-2"
          >
            <h3 class="reenie_font dark_brown">${artist}</h3>
            <div class="price font_color_light bg_color_dark">$${price}</div>
          </div>
          <h6 class="dark_brown">${title}</h6>
          <p class="card_desc dark_brown">
            ${description}
           </p>
         </div>
       </div> `
  }
}
