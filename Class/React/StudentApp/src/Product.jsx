// props example 1
function Product({data}){
    return(
        <div>
            <h3>Product details : </h3>
            <h3>Product: {data.name}</h3>
            <h3>Price: {data.price}</h3>
            <h3>Brand: {data.brand}</h3>
        </div>
    )
}
export default Product;