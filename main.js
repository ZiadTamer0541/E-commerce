let nav_link = document.querySelectorAll(".nav-link")
let img =document.getElementById("avatar")
let cart = document.getElementById("cart")
let count = document.getElementById("count")
let big_img = document.getElementById("bg-img")
let thumbnail = document.querySelectorAll(".thumb")
let decrease = document.querySelector(".decrease")
let count_product = document.querySelector(".count-product")
let increase = document.querySelector(".increase")
let total_price = document.querySelector(".total-price")
let old_price = document.querySelector(".old-price")
let cart_box = document.querySelector(".cart-box")
let add_cart = document.getElementById("cart-btn")
let content_cart =document.querySelector(".content-pro-cart-box")
let cart_in_price = document.getElementById("price")
let times = document.querySelector(".times")
let total_in_cart = document.querySelector(".total-in-cart")
let cart_empty = document.querySelector(".cart-empty")
let img_in_cart = document.querySelector(".img_in_cart")
let active = true;
let number = 1
let price = 125

for(let i =0 ; i<nav_link.length ; i++){
    nav_link[i].addEventListener("click" , (e)=>{
        let line = document.querySelector(".line")
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
        line.style.bottom = e.target.offsetBottom + "px";
    })
}
img.addEventListener("click" ,()=>{
    if(active == true){
        img.classList.add("active-img")
        active= false
    }
    else{
        img.classList.remove("active-img")
        active=true
    }
})
cart.addEventListener("click" , ()=>{
    if(active == true){
        if(count.innerHTML == ""){
            count.style.display = "block"
            count.innerHTML = "0"
            cart_box.style.display = "block"
            active = false
        }
        else{
            count.style.display = "block"
            cart_box.style.display = "block"
            active= false
        }
    }
    else{
        count.style.display = "none"
        cart_box.style.display = "none"
        active=true
    }
})
let tmp =1;
for(let i = 0 ; i<thumbnail.length ; i++){
    thumbnail[i].addEventListener("click" , ()=>{
        for(let j=0 ; j<thumbnail.length ;j++){
            thumbnail[j].classList.remove("selected-img")
            thumbnail[i].classList.add("selected-img")
            big_img.src = `images/image-product-${i+1}.jpg`
        }
        tmp= i+1
    })
}
increase.addEventListener("click" , ()=>{
    number++
    count_product.innerHTML = number
    total_price.innerHTML = `$${price * number}.00`
    old_price.innerHTML = `$<del>${(price * number) * 2 }.00</del>`

})
decrease.addEventListener("click" , ()=>{
    if(number == "0"){
        count_product.innerHTML = "0"
    }
    else{

        number--
        count_product.innerHTML = number
        total_price.innerHTML = `$${price * number}.00`
        old_price.innerHTML = `$<del>${(price * number) * 2 }.00</del>`
    }
})

let data = ""


add_cart.addEventListener("click" , ()=>{
    if( count_product.innerHTML == "0"){
        count.innerHTML = "0"
        cart_empty.style.display = "block"
        content_cart.style.display = "none"
    }
    else{
        cart_empty.style.display = "none"
        count.innerHTML = number
        content_cart.style.display = "block"
        data += `<div class="info text-black-50 d-flex flex-wrap gap-3 py-3 justify-content-between">
                                  <img src= "images/image-product-${tmp}-thumbnail.jpg" class="img_in_cart" style="width: 60px;">
                                  <div class="details">

                                    <p>Fall Limited Edition Sneakers</p>
                                    <p id="price">
                                      $125.00 x <span class="times">${number}</span> <span class="total-in-cart text-black fw-bolder ms-3">"$${price * number}.00"</span>
                                    </p>
                                  </div>
                                    </div>` 
        content_cart.innerHTML = data + `<button type="button" class="btn">Check Out</button>`

    }
})
