// ! Filtreleme İşlemi için;

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

searchInput.addEventListener("input", function(){
    let searchTerm = searchInput.value.trim().toLowerCase();
    let cards = document.querySelectorAll(".col-4");

    // console.log(cards);

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.trim().toLowerCase();
        console.log(productName);



        if(productName.includes(searchTerm)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    }

    // searchInput.value = "";
})


// ! Sepeti Arttırıp Azaltmak için;

const row = document.querySelector(".row");
const sepet = document.querySelector("#result");

row.addEventListener("click", function(e){
    // console.log(e.target);
    if (e.target.className.includes("add-to-cart")) {
        sepet.innerHTML++;
    } else if (e.target.className.includes("remove-to-cart")){
        if (sepet.innerHTML != 0)
            sepet.innerHTML--;

    }
})

// ! Markalara göre ayıklama

const toyota = document.querySelector("#toyota");
const renault = document.querySelector("#renault");
const peugeot = document.querySelector("#peugeot");

toyota.addEventListener("click", function(){
    let cards = document.querySelectorAll(".col-4");

    // console.log(cards);

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.trim().toLowerCase();
        console.log(productName);



        if (productName.includes("toyota")) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
})

renault.addEventListener("click", function () {
    let cards = document.querySelectorAll(".col-4");

    // console.log(cards);

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.trim().toLowerCase();
        console.log(productName);



        if (productName.includes("renault")) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
})

peugeot.addEventListener("click", function () {
    let cards = document.querySelectorAll(".col-4");

    // console.log(cards);

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.trim().toLowerCase();
        console.log(productName);



        if (productName.includes("peugeot")) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
})