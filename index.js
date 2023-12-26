const checkboxParoles = document.getElementById('masquer-paroles');
const divParoles = document.getElementById('paroles');
const hrElement = document.querySelector('hr');
checkboxParoles.addEventListener('click', function (event) {
  if (event.target.checked) {
    divParoles.style.display = 'none';
    hrElement.style.display = 'none'
    checkboxParoles.nextSibling.textContent = "Afficher les paroles";
  } else {
    divParoles.style.display = 'block';
    checkboxParoles.nextSibling.textContent = "Masquer les paroles";
    hrElement.style.display = 'block'
  }
});

const definition = document.querySelectorAll('.definition');
const masquerRefrainsCheckbox = document.getElementById("masquer-refrains");
const refrains = document.querySelectorAll(".refrain");
const contenu = document.querySelectorAll(".contenu");
masquerRefrainsCheckbox.addEventListener('click', function (event) {
  if (event.target.checked) {
    for (let i = 1; i < contenu.length; i++) {
      contenu[i].classList.add("hidden");
      definition[i].classList.remove("hidden");
      masquerRefrainsCheckbox.nextSibling.textContent = "Afficher les refrains";
    }
  } else {
    for (let i = 1; i < contenu.length; i++) {
      contenu[i].classList.remove("hidden");
      definition[i].classList.add("hidden");
      masquerRefrainsCheckbox.nextSibling.textContent = "Masquer les refrains";
    }
  }
});


for (let i = 1; i < contenu.length; i++) {
  definition[i].addEventListener('mouseenter', function () {
    contenu[i].classList.remove("hidden");
    definition[i].classList.add("hidden");
  });
  definition[i].addEventListener('mouseleave', function () {
    contenu[i].classList.add("hidden");
    definition[i].classList.remove("hidden");
  });
}

const para = document.querySelectorAll('p');
for (let i = 0; i < para.length; i++) {
  para[i].style.margin = 0;
};