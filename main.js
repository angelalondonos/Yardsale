const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.destop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.shopping-cart-detail'); //Aside
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail-info'); //Aside
const productDetailCloseIcon = document.querySelector('.product-detail-info-close');


/*Evento to click*/
menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

/* Functions for addEventListener */
function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
    productDetailContainer.classList.add('inactive');
}

function toggleCartAside(){
    aside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add('inactive');
}

/*Function to open and closed the product detail in the HTML - aside */
function openProductDetail(){
    productDetailContainer.classList.remove('inactive');
    aside.classList.add('inactive');
}

function closeProductDetail(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

/* Info for products list */
const productList =[];
productList.push({
    name: 'Bike',
    price: 3270000,
    image: 'https://cdn.shopify.com/s/files/1/0604/4637/6123/products/rock-3-bk-green_540x.png?v=1658156853',
});
productList.push({
    name: 'Inflator',
    price: 129900,
    image: 'https://cdn.shopify.com/s/files/1/0604/4637/6123/products/charegerbntosd.jpg?v=1654812485',
});
productList.push({
    name: 'Gloves',
    price: 145000,
    image: 'https://tiendabicicol.vteximg.com.br/arquivos/ids/164879-250-300/830001104.jpg?v=637800216544170000',
});
productList.push ({
    name:'Bicycle helmet',
    price: 366000,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});
productList.push ({
    name:'Bicycle helmet',
    price: 150000,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});
productList.push ({
    name:'Seat',
    price: 150000,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 920000,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
});
productList.push ({
    name:'Sunglasses',
    price: 635000,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
});
productList.push ({
    name:'Sunglasses',
    price: 340000,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
});
productList.push ({
    name:'Bicycle seat bag',
    price: 250000,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
}); 
productList.push ({
    name:'Bicycle helmet',
    price: 256000,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
});


/* Insert products in HTML*/
function insertProducts(productList){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info-home');
    
        const productInfoDiv = document.createElement('div');
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
    
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

insertProducts(productList);

