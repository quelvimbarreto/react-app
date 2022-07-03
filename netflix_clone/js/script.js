//EVENTO DE CLICK - INFORMAÇÕES

const item = document.querySelectorAll("div.item, div.overlay");

for (i = 0; i < item.length; i++) {
  item[i].addEventListener("click", exibirInfo, false);
}

function exibirInfo(_e) {
  this.children[0].children[1].classList.toggle("open");
}
