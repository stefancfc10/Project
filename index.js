
document.querySelector("#filter-coding").addEventListener("change",filterCoding);
document.querySelector("#filter-design").addEventListener("change",filterDesign);
document.querySelector("#filter-marketing").addEventListener("change",filterMarketing);



window.addEventListener("load", function () {
    document.querySelector(".d-icon").style.visibility = "hidden";
    document.querySelector(".c-icon").style.visibility = "hidden";
    document.querySelector(".m-icon").style.visibility = "hidden";
});




function filterCoding() {
    hideAllCards();

    if(document.querySelector("#filter-coding").checked){
        
        let codingCards = document.querySelectorAll(".coding");
        codingCards.forEach(codingCards => {
        codingCards.style.display = "inline-block";

    });

        document.querySelector("#filter-design").checked = false;
        document.querySelector("#filter-marketing").checked = false;

        document.querySelector(".coding-1").style.backgroundColor = "#ff1300";
        document.querySelector(".marketing-1").style.backgroundColor = "#302f38";
        document.querySelector(".design-1").style.backgroundColor = "#302f38";


        document.querySelector(".c-icon").style.visibility = "visible";
        document.querySelector(".m-icon").style.visibility = "hidden";
    document.querySelector(".d-icon").style.visibility = "hidden";
        

    }else{

        showAllCards()
        
    }

    
}



function filterDesign() {
    hideAllCards();

    if(document.querySelector("#filter-design").checked){
        
        let designCards = document.querySelectorAll(".design");
        designCards.forEach(designCards => {
            designCards.style.display = "inline-block";

    });

    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-marketing").checked = false;

    document.querySelector(".design-1").style.backgroundColor = "#ff1300"; 
    document.querySelector(".coding-1").style.backgroundColor = "#302f38";
    document.querySelector(".marketing-1").style.backgroundColor = "#302f38";


    document.querySelector(".d-icon").style.visibility = "visible";
    document.querySelector(".c-icon").style.visibility = "hidden";
    document.querySelector(".m-icon").style.visibility = "hidden";

    }else{

        showAllCards()
    }
   
}


function filterMarketing() {
    hideAllCards();

    if(document.querySelector("#filter-marketing").checked){
        
        let marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach(marketingCards => {
        marketingCards.style.display = "inline-block";
        
    });

    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-design").checked = false;

    document.querySelector(".marketing-1").style.backgroundColor = "#ff1300";
    document.querySelector(".coding-1").style.backgroundColor = "#302f38";
    document.querySelector(".design-1").style.backgroundColor = "#302f38";


    document.querySelector(".m-icon").style.visibility = "visible";
    document.querySelector(".c-icon").style.visibility = "hidden";
    document.querySelector(".d-icon").style.visibility = "hidden";


    }else{

        showAllCards()
    }



   
}

function hideAllCards() {
   

    let allCards = document.querySelectorAll(".card_1");

    allCards.forEach(card => {
        card.style.display = "none";
        
    });
}

function showAllCards() {
   
    
    let allCards = document.querySelectorAll(".card_1");
    
    allCards.forEach(card => {
        card.style.display = "inline-block";
        document.querySelector(".m-icon").style.visibility = "hidden";
        document.querySelector(".d-icon").style.visibility = "hidden";
        document.querySelector(".c-icon").style.visibility = "hidden";

        document.querySelector(".marketing-1").style.backgroundColor = "#302f38";
        document.querySelector(".coding-1").style.backgroundColor = "#302f38";
        document.querySelector(".design-1").style.backgroundColor = "#302f38";
        
    });


}

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
 
