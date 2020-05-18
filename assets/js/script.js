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


infobutton.forEach(function (element) {
    
    let articles = [];
    let d = 1;


        

    element.onclick = function () {
        
        let ref = element.dataset.ref;
        
        if (articles.includes(ref)) {
            console.log(articles);
            let idqty = document.querySelector('.qtyref'+ element.dataset.ref);
            d++
            idqty.innerHTML = d;
            console.log(idqty); 
         
        } 
        else {
            
            let typeid = element.dataset.id;
            let typeprice = element.dataset.price;
            let info = document.createElement('tr');
            info.className = 'trow'   
            info.innerHTML = `<td><img style='width:50px; height:50px;' src='${element.dataset.img}'></td><td> ${typeid} </td><td> ${typeprice} € </td><td><span class="qtyref${ref}"> 1 </span></td><td class="text-right"><button type="button" class="btn btn-primary buttonModalCart" data-buttonid="${element.dataset.ref}">Supprimer du panier</bouton></td>`;
            putinfo.appendChild(info);
            articles.push(ref);
            console.log(articles);
        } 
        let removeCartItemButtons = document.querySelectorAll('.buttonModalCart');
        for (let i = 0; i < removeCartItemButtons.length; i++) {
            let button = removeCartItemButtons[i]
            button.addEventListener('click', removeCartItem)
        }
        function removeCartItem(event) {
               let buttonCliked = event.target;
               let idTest = event.target.dataset.buttonid;
               articles.splice(articles.indexOf(idTest), 1);
               buttonCliked.parentElement.parentElement.remove();

        }
    }
});




        // let typeref = element.dataset.ref;
        // let typeimg = element.dataset.img;
        // let infoimg = document.createElement('img');
        // infoimg.setAttribute('src', typeimg);














        
// let infobutton = document.querySelectorAll(".getinfo");
// let i = 0;

// infobutton.forEach(function (element) {
  
    
//     element.onclick = function () {
//         let typeid = element.dataset.id;
//         let typeprice = element.dataset.price;
//         let info = document.createElement('tr');
        
//         info.className = 'trow'   
//         info.innerHTML = `<td> produit : </td><td> ${typeid} </td><td> ${typeprice} € </td><td><input type="number" min="1" max="10"></td><td><button type="button" class="btn btn-primary buttonModalCart">Supprimer du panier</bouton></td>`;
//         putinfo.appendChild(info);
        
//         let removeCartItemButtons = document.querySelectorAll('.buttonModalCart');
//         for (let i = 0; i < removeCartItemButtons.length; i++) {
//             let button = removeCartItemButtons[i]
//             button.addEventListener('click', removeCartItem)
//         }
//         function removeCartItem(event) {
//                let buttonCliked = event.target;
//                buttonCliked.parentElement.parentElement.remove()
//         }
//     }
// });

