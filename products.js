// get the area
let CartsContainer = document.querySelector(".carts-container")



function GetData() {
    let myRquest = new XMLHttpRequest

    myRquest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let Data = JSON.parse(this.responseText)

            let Cartsq = Data.length

            CreateCarts(Data , Cartsq)
        }
    }

    myRquest.open("Get" , "./products.json" , true)
    myRquest.send()
}

function CreateCarts(obj , num) {
    for (let i = 1; i <= num; i++) {
        // create the div cart container
        let Cart = document.createElement('div')
        Cart.classList.add("cart position-relative")

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
        CartInfo.classList.add('cart-info position-relative text-capitalize text-center d-flex flex-column font-weight-bold')

        // create the text
        let H4 = document.createElement('h4')
        H4.classList.add('text-center mb-4')
        H4.innerText = document.createTextNode(obj[`cardinfo_${i}`])
        
        // append the text to Cart Info Div
        CartInfo.appendChild(H4)

        // append the Cart Info div to Cart Div
        Cart.appendChild(CartInfo)

        // create the price div
        let Price = document.createElement("div")
        Price.classList.add('price position-absolute py-2 px-4')

        // create th price text
        let Pspan = document.createElement('span')
        Pspan.innerText = document.createTextNode(obj[`price_${i}`])

        // append the price text to the price div
        Price.appendChild(Pspan)

        // append the Price div to the cart div
        Cart.appendChild(Price)

        // create the button
        let Button = document.createElement('button')
        Button.innerText = 'View'

        // append the Button to the card
        Cart.appendChild('Button')
    }
}