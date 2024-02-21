
const loadMore = document.getElementById('loadmore');
const hid = [...document.querySelectorAll('.card_1.hidden')];

hid.splice(0, 6).forEach(
  elem => elem.classList.remove('hidden')
);

loadmore.addEventListener('click', function(e) {
  e.preventDefault();
  
  hid.splice(0, 6).forEach(
    elem => elem.classList.remove('hidden')
  )
  
  if (hid.length == 0) {
    loadMore.classList.add('hidden');
  }

 
});
 



