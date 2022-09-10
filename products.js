// get the area
let CartsContainer = document.querySelector(".carts-container")


function GetData() {
    let myRquest = new XMLHttpRequest

    myRquest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let Data = JSON.parse(this.responseText)

            CreateCarts(Data[0])
        }
    }

    myRquest.open("Get" , "./products.json" , true)
    myRquest.send()
}
GetData()

function CreateCarts(obj) {
    for (let i = 1; i <= 12; i++) {
        // create the div cart container
        let Cart = document.createElement('div')
        Cart.classList.add("cart")
        Cart.classList.add("position-relative")

        // create the image div container
        let ImageDiv = document.createElement('div')
        ImageDiv.classList.add('cart-image')

        // create the image 
        let Img = document.createElement('img')
        let ImgSrc = obj[`cardImage_${i}`]
        Img.src = ImgSrc

        // append the image to the image div
        ImageDiv.appendChild(Img)

        // append the image div to cart container div
        Cart.appendChild(ImageDiv)

        // create the product name 
        let CartInfo = document.createElement('div')
        CartInfo.classList.add('cart-info')
        CartInfo.classList.add('position-relative')
        CartInfo.classList.add('font-weight-bold')
        CartInfo.classList.add('text-capitalize')
        CartInfo.classList.add('d-flex')
        CartInfo.classList.add('flex-column')

        // create the text
        let H4 = document.createElement('h4')
        H4.classList.add('text-center')
        H4.classList.add('mb-4')
        H4.innerHTML = obj[`cardinfo_${i}`]
        
        // append the text to Cart Info Div
        CartInfo.appendChild(H4)

        // append the Cart Info div to Cart Div
        Cart.appendChild(CartInfo)

        // create the price div
        let Price = document.createElement("div")
        Price.classList.add('price')
        Price.classList.add('position-absolute')
        Price.classList.add('py-2')
        Price.classList.add('px-4')

        // create th price text
        let Pspan = document.createElement('span')
        Pspan.innerHTML = obj[`price_${i}`]

        // append the price text to the price div
        Price.appendChild(Pspan)

        // append the Price div to the cart div
        Cart.appendChild(Price)

        // create the button
        let Button = document.createElement('button')
        Button.innerText = 'View'

        // append the button to the cart info div
        CartInfo.appendChild(Button)

        // append the Button to the card

        // append the cart to CartsContainer
        CartsContainer.appendChild(Cart)
    }
}
