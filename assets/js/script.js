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
let i = 0;
let articles = [];
infobutton.forEach(function (element) {

    let d = 1;
    element.onclick = function () {

        let ref = element.dataset.ref;

        if (articles.includes(ref)) {

            let idqty = document.querySelector('.qtyref' + element.dataset.ref);
            d++
            idqty.innerHTML = d;
            calculrow();
        } else {

            let typeid = element.dataset.id;
            let typeprice = element.dataset.price;
            let info = document.createElement('tr');
            info.className = 'trow'
            info.innerHTML = `<td><img style='width:50px; height:50px;' src='${element.dataset.img}'></td><td> ${typeid} </td><td> ${typeprice} € </td><td><span class="qtyref${ref}">1</span></td><td><span class="totalrow${ref} soustotal"></span></td><td class="text-right"><button type="button" class="btn btn-primary buttonModalCart" data-buttonid="${element.dataset.ref}">Supprimer du panier</bouton></td>`;
            putinfo.appendChild(info);
            calculrow();
            articles.push(ref);
            console.log(articles)
        }

        let removeCartItemButtons = document.querySelectorAll('.buttonModalCart');

        for (let i = 0; i < removeCartItemButtons.length; i++) {

            let button = removeCartItemButtons[i]
            button.addEventListener('click', removeCartItem)

        }

        function removeCartItem(event) {
            let buttonCliked = event.target;
            let idRowProduct = event.target.dataset.buttonid;
            articles.splice(articles.indexOf(idRowProduct), 1);
            buttonCliked.parentElement.parentElement.remove();
            addition();
            console.log(idRowProduct)
            console.log(articles)
            d = 1;


        }

        function calculrow() {
            let idTotalRow = document.querySelector('.totalrow' + element.dataset.ref);
            let calculprice = parseInt(element.dataset.price);
            let calcultqty = d;
            idTotalRow.innerHTML = calculprice * calcultqty;
            addition();
        }

        function addition() {
            let total = 0;
            let sousTotalArray = document.querySelectorAll('.soustotal');

            sousTotalArray.forEach(element => {
                total += +element.innerHTML;
            });

            if (articles.length < 0) {
                totalprice.innerHTML = 0;
            } else {
                totalprice.innerHTML = 'Prix Total du Panier : ' + total + '€';
            }
        }
    }

});