const product = [
    {
        id: 0,
        image: 'shop3.jpg',
        title: 'Mens Sneakers',
        price: 4000,
    },
    {
        id: 1,
        image: 'photo2.jpg',
        title: 'Leather Shoes',
        price: 6000,
    },
    {
        id: 2,
        image: 'photo.jpg',
        title: 'Vans Sneakers',
        price: 5500,
    },
    {
        id: 3,
        image: 'shop4.jpg',
        title: 'Womens sneakers',
        price: 5200,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML =categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div>
            <label>SIZE</label>
            </div>
            <select>
                <option>41</option>   
                <option>43</option>
                <option>45</option>
            </select>
            <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa-solid fa-star"></i>
                      <i class="text-warning fa-solid fa-star"></i>
                      <i class="text-warning fa-solid fa-star"></i>
                      <i class="text-warning fa-solid fa-star"></i>
                      <i class="text-warning fa-solid fa-star-half-stroke"></i>
                    </li>
                    <li class="text-muted text-right">Rating:(4.5/5) </li>
                  </ul>
                  <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, quas vero. Amet rem itaque ut. Harum expedita suscipit quod ipsa fugit similique labore, ratione illo blanditiis aspernatur perspiciatis. Magnam, iste!</p>
                  <p class="muted">Reviews (99)</p>
                </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₱ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+ 
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₱ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₱ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 12px;'>₱ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}