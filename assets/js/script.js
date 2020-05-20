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






let infobutton = document.querySelectorAll('.getinfo');
let i = 0;
let articles = [];
infobutton.forEach(function (element) {

    let d = 1;
    element.onclick = function () {

        let ref = element.dataset.ref;

        if (articles.includes(ref)) {
            alert('Le produit sélectionné est déjà dans le panier');
        } else {
            let typeid = element.dataset.id;
            let typeprice = element.dataset.price;
            let info = document.createElement('tr');
            info.id = 'trCart' + ref;
            info.className = 'trow'
            info.innerHTML =
                `<td><img style='width:50px; height:50px;' src='${element.dataset.img}'></td>
            <td> ${typeid} </td>
            <td id="price${ref}" data-pricearticle="${typeprice}"> ${typeprice} €</td>
            <td><button class="btn btn-primary removeQty buttonQuantities" data-idarticle="${ref}"> - </button><span id="qtyref${ref}">1</span><button class="btn btn-primary addQty buttonQuantities" data-idaddarticle="${ref}"> + </button></td>
            <td><span class="totalrow${ref} soustotal" id="sousTotal${ref}"></span></td>
            <td class="text-right"><button type="button" class="btn btn-primary buttonModalCart" data-buttonid="${element.dataset.ref}">Supprimer du panier</bouton></td>`;
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
            console.log(buttonCliked);
            let idRowProduct = event.target.dataset.buttonid;
            articles.splice(articles.indexOf(idRowProduct), 1);
            buttonCliked.parentElement.parentElement.remove();
            addition();
            console.log(idRowProduct);
            console.log(articles);
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
                totalprice.style.color = 'white';
                totalprice.style.backgroundColor = '#7971ea';
                totalprice.style.padding = '5px';
                totalprice.style.fontWeight = 'bold';
                totalprice.style.borderRadius = '5px';
            }
        }

        // je sélectionne le bouton du produit que je viens de créer
        let idRemoveQty = document.querySelectorAll('.removeQty');

        // j'attribue une fonction onclick à tous les boutons
        idRemoveQty.forEach(element => {
            element.onclick = function () {
                let spanId = document.getElementById('qtyref' + this.dataset.idarticle);
                let sousTotalId = document.getElementById('sousTotal' + this.dataset.idarticle);
                let priceId = document.getElementById('price' + this.dataset.idarticle);
                let qtySpan = spanId.innerHTML;

                qtySpan--;
                if (qtySpan <= 0) {
                    let trToRemove = document.getElementById('trCart' + this.dataset.idarticle);
                    articles.splice(articles.indexOf(this.dataset.idarticle), 1);
                    trToRemove.parentNode.removeChild(trToRemove);
                } else {
                    spanId.innerHTML = qtySpan;
                    sousTotalId.innerHTML = +qtySpan * +priceId.dataset.pricearticle;          
                }
                addition();
            }
        });


        let idAddQty = document.querySelectorAll('.addQty');

        idAddQty.forEach(element => {
            element.onclick = function () {
                let spanId = document.getElementById('qtyref' + this.dataset.idaddarticle);
                let sousTotalId = document.getElementById('sousTotal' + this.dataset.idaddarticle);
                let priceId = document.getElementById('price' + this.dataset.idaddarticle);
                let qtySpan = spanId.innerHTML;

                qtySpan++;
                if (qtySpan > 10) {
                    alert('Commande de maximum 10 fois par produit')
                } else {
                    spanId.innerHTML = qtySpan;
                    sousTotalId.innerHTML = +qtySpan * +priceId.dataset.pricearticle;          
                }
                addition();
            }
        });

    }

});

let buttonConfirmCart = document.getElementById('confirmCart');
buttonConfirmCart.addEventListener('click', function () {
    alert('Votre panier a bien été commandé');
})