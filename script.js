//create empty array
let items = []

//FUNCTION 1

//display on html
const prodContainer = document.querySelector('#products')
//fetching data
fetch('https://fakestoreapi.com/products')
    .then(res => res.json()) //fetch data - phat function
    .then(data => {
        items = data //data must be items(stored in array) - phat function
        console.log(data); //to see reuired field in array for form
        showItems(items); //calling showItems function
    }) 
         
   //function to show items
function showItems(products){
    prodContainer.innerHTML = "" 

    //looping (will keep reshowing items)
    products.forEach(product => {
    prodContainer.innerHTML +=`
         <img src=${product.image}>,
         <h5>${product.description}</h5>,
         <h6>${product.price}<h6>
        `
    })
}

//FUNCTION 2

//array key-value areas
function addProduct(){
    const newProduct = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        rating: document.querySelector('#rating').value,
        description: document.querySelector('#description').value,
        id: items.lenth+1 
    }
    console.log(newProduct);
    items.push(newProduct);
    showItems(items);
}      