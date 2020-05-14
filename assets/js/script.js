let idAll = document.querySelector('#allCategories');
let idReflex = document.querySelector('#Reflex');
let idAccessory = document.querySelector('#Accessory');
let idLens = document.querySelector('#Lens');

let idRowAccessory = document.querySelector('#sectionAccessory');
let idRowLens = document.querySelector('#sectionLens');
let idRowReflex = document.querySelector('#sectionReflex');

idAll.addEventListener('click', function() {
    idRowAccessory.style.display = 'block';
    idRowReflex.style.display = 'block';
    idRowLens.style.display = 'block';
});

idReflex.addEventListener('click', function() {
    idRowReflex.style.display = 'block';
    idRowAccessory.style.display = 'none';
    idRowLens.style.display = 'none';
});

idAccessory.addEventListener('click', function() {
    idRowAccessory.style.display = 'block';
    idRowLens.style.display = 'none';
    idRowReflex.style.display = 'none';
});

idLens.addEventListener('click', function() {
    idRowLens.style.display = 'block';
    idRowAccessory.style.display = 'none';
    idRowReflex.style.display = 'none';

  
});



// let refprix = recupere data-prix
// let refid = recupere data-id



// btnEclairagePhoto.addEventListener('click', () => {
    

//     let createRowEclairagePhoto = document.createElement('p');
//     createRowEclairagePhoto.textContent = refprix + refid;
//     modal-body.appendChild(createRowEclairagePhoto);
// }

// let refid = getid;
// let refprix = getprix

// click sur le bouton dunction {
//     let ajout = getid + get prix 
// }



// PAS OUBLIER FOR EACH POUR R2CUPERER DATA BOUTON !!!!!!!!!!!!!!!!!!!!!!!!!!!!!


let infobutton = document.querySelectorAll(".getinfo");
let elementP = document.querySelector("p");


infobutton.forEach(function (element) {
  element.onclick = function () {
    let typeid = element.dataset.id;
    let typeprice = element.dataset.price;
    let info = document.createElement('p');
    info.innerHTML = typeid + typeprice;
    putinfo.appendChild(info);
 
  }
});