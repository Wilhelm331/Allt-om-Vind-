function topnavFunction() {
  document.getElementById("top-lista-id").classList.toggle("show2");
}

function båtarnaFunction() {
  document.getElementById("båtarnainnehållid").classList.toggle("show");
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("logga").style.width = "5%";
    document.getElementById("sidhuvud").style.top = "0%";
    document.getElementById("sidhuvud").style.paddingTop = "10px";
    document.getElementById("sidhuvud").style.paddingBottom = "10px";
    document.getElementsByClassName("top-lista-id a").style.fontSize = "100px";
  } else {
    document.getElementById("logga").style.width = "10%";
    document.getElementById("sidhuvud").style.background = "";
    document.getElementById("sidhuvud").style.top = "4%";
    document.getElementById("sidhuvud").style.paddingTop = "";
    document.getElementById("sidhuvud").style.paddingBottom = "";
    document.getElementsByClassName("top-lista-text a").style.fontSize = "";
  }
}

function backtotopFunction() {
  window.scrollTo(0, 0);
}