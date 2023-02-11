const API_URL= 'https://fakestoreapi.com/products';
const API_GET= 'https://fakestoreapi.com/products/';
const SEARCH_URL ='https://fakestoreapi.com/products/category/'

const form= document.getElementById('form');
const search = document.getElementById('search')
const main = document.getElementById('container')
const index = document.getElementById('index')
const detail = document.getElementById('detail');
const section = document.getElementById('section')


if ( index !== null)
{
    //get products

    getproducts(API_URL)

    async function getproducts(url)
    {
        const res= await fetch(url)
        const data = await res.json();
        showproduct(data)
    }
    


function showproduct(products)
{
    main.innerHTML=''
    products.forEach((product)=>{

        const {id,image,title}= product
        const productsElement = document.createElement('div')
        productsElement.classList.add('box')
        productsElement.setAttribute("id",`${id}`)
        productsElement.innerHTML=`
        <div class="image">
        <img src="${image}" alt="${title}"/>
        </div>
        <div class="content">
        <h3> ${title}</h3>
        </div>
        <div class="info">
        <ul >
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-solid fa-cart-shopping shop"></i>
        </ul>
        </div>
        
        `
        main.appendChild(productsElement) 
    }) 
    const btn = document.querySelectorAll('.box')

btn.forEach((e)=>
{

let ss= e.getAttribute('id')
e.addEventListener('click',(el)=>
{

localStorage.setItem('url',API_GET+ss)
window.location.href="details.html"
})

})
}



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const searchValue = search.value;
    console.log(searchValue)
    if(searchValue && searchValue !=='')
    {
        console.log(SEARCH_URL+searchValue)
        getproducts(SEARCH_URL+searchValue)
    }
    else
    {
        window.location.reload()
    }
})

//search
const strigger = document.querySelector('.open');
const close = document.querySelector('.close');

const addclass = document.querySelector('.site');

strigger.addEventListener('click',()=>
{
    addclass.classList.add('showsearch')
})
close.addEventListener('click',()=>
{
    getproducts(API_URL)
    addclass.classList.remove('showsearch')
})

}

if( detail !== null)
{
        //get products
    async function getproducts(url)
    {
        const res= await fetch(url)
        const data = await res.json();
        getdetails(data)
        
    }
    console.log(localStorage.getItem('url'))
    getproducts(localStorage.getItem('url'))

    function getdetails(info)
    {
        section.innerHTML=''
            const {category,description,id,image,price,title,rating,rate }= info
    
            const infoElement = document.createElement('div')
            infoElement.classList.add('product-div')
            infoElement.setAttribute("id",`${id}`)
            infoElement.innerHTML=`
            <div class = "product-div-left">
            <div class = "img-container">
                <img src = "${image}" alt = "">
            </div>
        </div>
            <div class = "product-div-right">
            <span class = "product-name">${category} - ${title}</span>
            <span class = "product-price">$ ${price}</span>
            <div class = "product-rating">
                <span>(${rating.rate} ratings)</span>
            </div>
            <div class="options">
            <select name="" id="">
            <option value="">select Size</option>
            <option value="">XL</option>
            <option value="">XXL</option>
            <option value="">Small</option>
            <option value="">Large</option>
            </select>
            <input type="number" value="1">
            <button class="btn">Add to Card</button>
            
            </div>
            <h6>Product Details</h6>
            <p class = "product-description">${description}</p>
            </div>
            `
            section.appendChild(infoElement) 
        
    }

}


const divtoshow = 'nav .menu';

const divpopup = document.querySelector(divtoshow);

const divtrigger =document.querySelector('.m-trigger');

divtrigger.addEventListener('click', () =>
{
    setTimeout(()=>{
        if(!divpopup.classList.contains('show'))
        {
            divpopup.classList.add ('show');
            document.body.classList.add('menu-visible');
        }
    },250);
})
//automatically close by click outside menu
document.addEventListener('click', (e)=>
{
    const isclosest =e.target.closest(divtoshow);
    if(!isclosest && divpopup.classList.contains('show'))
    {
        divpopup.classList.remove('show');
        document.body.classList.remove('menu-visible')
    }
})



