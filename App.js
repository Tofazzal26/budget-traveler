





const addSelectBtn = document.getElementsByClassName('add-btn');

let count = 0;

for (let index = 0; index < addSelectBtn.length; index++) {
    const element = addSelectBtn[index];

    element.addEventListener('click', function(event) {

        // shopping cart count
        count = count + 1;
        addElementId('cart-count', count);


        // place and price name
        const placeName = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

        // cart add element
        const cartAdd = document.getElementById('selected-place-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;
        li.appendChild(p);
        li.appendChild(p2);
        cartAdd.appendChild(li);

        // total cost 

        const totalCost  = document.getElementById('total-cost').innerText;
        const convertTotalCost = parseInt(totalCost);
        const sum = convertTotalCost + parseInt(price);
        addElementId('total-cost', sum);

        // grand total
        grandTotal();

    });
    
}



function addElementId(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

function grandTotal(category) {
    const total = document.getElementById('total-cost').innerText;
    const totalConvert = parseInt(total);
    addElementId('grand-total', totalConvert);
}



