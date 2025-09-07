let aux_mais = 3;
function ir_esquerda(){
}
function ir_direita(){
    let aux = document.querySelector(".cards");
    let aux_cards = aux.querySelectorAll(".card");
    let total = aux_cards.length;
    if(aux_mais >= total){
        for(let i = 0; i < total; i++){
            aux_cards[i].style.display = "none";
        }
        for (let i = 0; i < 3; i++) {
            aux_cards[i].style.display = "block";
        }
        aux_mais = 3;
    } else {
        let card_mais = aux_mais - 3;
        aux_cards[card_mais].style.display = "none";
        aux_cards[aux_mais].style.display = "block";
        aux_mais++;
    }
}

const card = document.querySelectorAll(".card");

card.forEach(el => {
    el.addEventListener("mouseenter", (evento) => {
        card.forEach(cards => {
            cards.classList.remove("mouse_nao_aqui");
        });
        card.forEach(cards => {
            if (cards !== evento.target) {
                cards.classList.add("mouse_nao_aqui");
            }
        });
    });
    el.addEventListener("mouseleave", (evento) => {
        card.forEach(e => e.classList.remove("mouse_nao_aqui"));
    });
});