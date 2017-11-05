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
    saveCart();
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
    saveCart();
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
    saveCart();
}
function clearCart()
{
    cart.splice(0,cart.length);
    saveCart();
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
    var cartCopy = [];
    for(var j in cart)
    {
        var item = cart[j];
        var itemCopy = {};
        for(var p in item)
        {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}
function saveCart()
{
    localStorage.setItem('shoppingCart',JSON.stringify(cart));
}
function loadCart()
{
    JSON.parse(localStorage.getItem('shoppingCart'));
}
