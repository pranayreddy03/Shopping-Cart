var cart = [];
var Item = function (name, author, year, rating, price, count) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.rating = rating;
    this.price = price;
    this.count = count;
};
function addItemToCart(name, author, year, rating, price, count)
{
    for(var j in cart)
    {
        if(cart[j].name === name)
        {
            cart[j].count += count;
            return;
        }
    }
    var i = new Item(name, author, year, rating, price, count);
    cart.push(i);
}
function removeItemFromCart(name)
{
    for(var j in cart)
    {
        if(cart[j].name === name)
        {
            cart[j].count --;
            if(cart[j].count ===0)
            {
                cart.splice(j,1);
            }
        }
    }
}

function removeItemFromCartAll(name)
{
    for(var j in cart)
    {
        if(cart[j].name === name)
        {
            cart.splice(j,1);
            break;
        }
    }
}

function clearCart()
{
    cart.splice(0,cart.length);
}

function countCart() {
 var totalCount = 0;
    for(var j in cart)
 {
     totalCount += cart[j].count;
 }
 return totalCount;
}

function totalCart() {
    var totalCount = 0;
    for(var j in cart)
    {
        totalCount += cart[j].price;
    }
    return totalCount;
}

function listCart()
{

}

console.log(cart);
addItemToCart('dsc','rfv',3,5,6,7);
addItemToCart('dsced','rfvt5ged',34,57,60,74);
addItemToCart('dscww','rfset5gv',36,54,62,71);
addItemToCart('apple','rvcdvfv',36,54,62,71);
// removeItemFromCartAll('apple');
// clearCart();
console.log(totalCart());

