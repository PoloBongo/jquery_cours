// window.alert('oly sheet');
// let nom = prompt("donne moi ton nom chacal !")
// document.write(nom)

const vert = document.getElementsByClassName("vert");

const h2_1 = document.getElementById("h2_1");

h2_1.style.backgroundColor = "red";

const h2_2 = document.getElementById("h2_2");

h2_2.innerHTML = "j'aime le Javascript <a href='https://releases.jquery.com/' target='_blank'> zbi</a>";

const h1 = document.querySelector("h1");

h1.addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = "green";
})

h1.addEventListener("mouseout", function(e){
    e.target.style.backgroundColor = "red";
})