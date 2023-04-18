




const sectionProducts = document.querySelector('#articulos');
const chartBtn = document.querySelector('#chart-btn');
const chartResult = document.querySelector('#chart-result');


let chartArr = [];

class Chart {
    addItemChart(product) {
        const { id } = product;
        if(verifyItemIDLS(id) || null) {
            product.quantity++;
            const res = chartArr.map( el => {
                if(el.id === id) {
                    return product;
                }
                return el;
            })
            chartArr = [...res]
            updateLS();
            return;
        }
        product.quantity = 1;
        chartArr = [...chartArr, product];
        updateLS();
    }

}

class UI {

    printProductsMain(data) {
        data.forEach( product => {
            const { id, title, price, description, category, image, cuantity } = product;

            const card = document.createElement('DIV');
            card.classList.add('card');

            const cardImg = document.createElement('IMG');
            cardImg.classList.add('card-img-top');
            cardImg.src = image;
            cardImg.alt = category;

            const cardBody = document.createElement('DIV');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('H5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = title;

            const cardPrice = document.createElement('P');
            cardPrice.classList.add('card-text', 'card-price');
            cardPrice.textContent = price + '$';
            /*
            const cardText = document.createElement('P');
            cardText.classList.add('card-text');
            cardText.textContent = description;
            */
            const btnAddChart = document.createElement('BUTTON');
            btnAddChart.classList.add('btn', 'btn-primary');
            btnAddChart.textContent = 'Añadir al carrito';
            btnAddChart.onclick = function() {
                chart.addItemChart(product);
                ui.printChartProducts(); 
            }

            const cardDescription = document.createElement('P');
            cardDescription.classList.add('card-text');
            cardDescription.textContent = description;
            
            
            card.appendChild(cardImg);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardPrice);
            //cardBody.appendChild(cardText);
            cardBody.appendChild(cardDescription);
            cardBody.appendChild(btnAddChart);
            sectionProducts.appendChild(card);
            
        });
    }

    printChartProducts() {
        cleanHTML(chartResult);
        // Comprueba si hay algo en el carrito para print
        if(!verifyLSChart()) { return }
        // Si pasa la verificacion:
        const products = getLSChart();
        products.forEach( product => { // Print products
            
            

            const {id, title, price, category, image, quantity } = product;

            const contenedor = document.createElement('DIV');
            contenedor.classList.add('chart-product');
            
            const imgChart = document.createElement('IMG');
            imgChart.src = image;
            imgChart.classList.add('chart-img');
            imgChart.alt = category;

            const cardChart = document.createElement('H5');
            cardChart.classList.add('chart-title');
            cardChart.textContent = title;

            const priceChart = document.createElement('P');
            priceChart.classList.add('chart-price');
            priceChart.textContent = price + '$';

            const quantityContainer = document.createElement('DIV');
            quantityContainer.classList.add('chart-qty');

            const buttonMinus = document.createElement('BUTTON');
            buttonMinus.classList.add('btn', 'btn-primary' ,'button-minus'); 
            buttonMinus.textContent = '-1';
            buttonMinus.onclick = function() {
                product.quantity -= 1
                changeQuantityChart(id, product.quantity);
                quantityP.textContent = product.quantity;
                updateLS();
                if(product.quantity <= 0) {
                    chartRemove.parentElement.remove();
                    removeChartProduct(id);
                    updateLS();
                    return;
                }
            }

            const quantityP = document.createElement('P');
            quantityP.classList.add('qty-value');
            quantityP.textContent = quantity;

            const buttonPlus = document.createElement('BUTTON');
            buttonPlus.classList.add('btn', 'btn-primary' ,'button-plus');
            buttonPlus.textContent = '+1';
            buttonPlus.onclick = function() {
                product.quantity += 1
                changeQuantityChart(id, product.quantity);
                quantityP.textContent = product.quantity;
                updateLS();
            }

            const chartRemove = document.createElement('A');
            chartRemove.classList.add('btn', 'btn-danger', 'chart-remove');
            chartRemove.textContent = 'X'
            chartRemove.onclick = function(e) {
                chartRemove.parentElement.remove();
                removeChartProduct(id);
                updateLS();
            }

            const resultsChart = document.querySelector('#chart-result');
            
            resultsChart.appendChild(contenedor);
                contenedor.appendChild(imgChart);
                contenedor.appendChild(cardChart);
                contenedor.appendChild(priceChart);
                contenedor.appendChild(quantityContainer);
                    quantityContainer.appendChild(buttonMinus);
                    quantityContainer.appendChild(quantityP);
                    quantityContainer.appendChild(buttonPlus);
                contenedor.appendChild(chartRemove);

        })
    }



}
// Instance

const ui = new UI();
const chart = new Chart();
initProducts();



// Functions


function updateLS() {
    localStorage.setItem('chart', JSON.stringify(chartArr));
}

function verifyLSChart() {
    const productosLS = getLSChart();
    if( productosLS === null || productosLS === undefined || productosLS === false){
        return false;
    }
    return productosLS.some(e => {return e});
}

function getLSChart() {
    return JSON.parse( localStorage.getItem('chart') );
}

function verifyItemIDLS(id) {
    const productosLS = getLSChart() ?? [];
    return productosLS.some(el => el.id === id);
}

async function initProducts() {
    chartArr = getLSChart() ?? [];
    const url = 'https://fakestoreapi.com/products/category/jewelery';

    await $.ajax(url,   // request url
			{            
				success: function (data) {    // success callback function
                    ui.printProductsMain(data)
				}
			});

    ui.printChartProducts()
}

function changeQuantityChart(id, quantity) {
   
    const arrTemp = chartArr.filter( el => {
        if(el.id === id) {
            el.quantity = quantity;
            return el;
        }
        console.log('pass')
        return el;
    })
    chartArr = [...arrTemp];
}

function cleanHTML(parentE) {
    while(parentE.firstChild) {
        parentE.removeChild(parentE.firstChild);
    }
}

function removeChartProduct(id) {
    chartArr = chartArr.filter(el => {
        if(el.id === id) {
            return
        }
        return el;
    })
}

//function onclick
chartBtn.onclick = function () {
    const result = document.querySelector('#chart-result');
    
    if(result.classList[0] === 'd-none') {
        result.classList.remove('d-none');
    } else {
        result.classList.add('d-none');
    }
    
}



