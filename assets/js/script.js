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



