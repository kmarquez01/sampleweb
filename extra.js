


{CardInfo.map( (food, id) => (
    <div key = {id}>
        {food.name}
        {food.price}
    </div>
)
)}



const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
        setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty : exist.qty + 1} : x))
    }
    else{
        setCartItems([...cartItems, {...product, qty: 1}])
    }
}