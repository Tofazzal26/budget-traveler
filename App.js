





const addSelectBtn = document.getElementsByClassName('add-btn');

let count = 0;

for (let index = 0; index < addSelectBtn.length; index++) {
    const element = addSelectBtn[index];

    element.addEventListener('click', function(event) {

        // shopping cart count
        count = count + 1;
        addElementId('cart-count', count);


        // total cost function
        const placeName = event.target.parentNode.childNodes[1].innerText;
        const price = parseInt(event.target.parentNode.childNodes[3].childNodes[1].innerText);
        const priceCost = document.getElementById('total-cost').innerText;
        

        // addElementId('total-cost', priceCost);
    })
    
}



function addElementId(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}





