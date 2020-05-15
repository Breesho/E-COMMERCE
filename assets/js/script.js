let idAll = document.querySelector('#allCategories');
let idReflex = document.querySelector('#Reflex');
let idAccessory = document.querySelector('#Accessory');
let idLens = document.querySelector('#Lens');

let idRowAccessory = document.querySelector('#sectionAccessory');
let idRowLens = document.querySelector('#sectionLens');
let idRowReflex = document.querySelector('#sectionReflex');

idAll.addEventListener('click', function () {
    idRowAccessory.style.display = 'block';
    idRowReflex.style.display = 'block';
    idRowLens.style.display = 'block';
});

idReflex.addEventListener('click', function () {
    idRowReflex.style.display = 'block';
    idRowAccessory.style.display = 'none';
    idRowLens.style.display = 'none';
});

idAccessory.addEventListener('click', function () {
    idRowAccessory.style.display = 'block';
    idRowLens.style.display = 'none';
    idRowReflex.style.display = 'none';
});

idLens.addEventListener('click', function () {
    idRowLens.style.display = 'block';
    idRowAccessory.style.display = 'none';
    idRowReflex.style.display = 'none';


});






let infobutton = document.querySelectorAll(".getinfo");

infobutton.forEach(function (element) {
    element.onclick = function () {
        let typeid = element.dataset.id;
        let typeprice = element.dataset.price;
        let info = document.createElement('tr');
        info.className = 'trow'   
        info.innerHTML = `<td>Produit :</td><td> ${typeid} </td><td> ${typeprice} </td><td><input type="number" min="1" max="10"></td><td><button type="button" class="btn btn-primary buttonModalCart">Supprimer du panier</bouton></td>`;
        putinfo.appendChild(info);








        let removeCartItemButtons = document.querySelectorAll('.buttonModalCart');
        
        for (let i = 0; i < removeCartItemButtons.length; i++) {
            let button = removeCartItemButtons[i]
            button.addEventListener('click', removeCartItem)
        }
        function removeCartItem(event) {
               let buttonCliked = event.target;
               buttonCliked.parentElement.parentElement.remove()
        }
    }
});





