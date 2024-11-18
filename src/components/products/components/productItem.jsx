
function ButtonComponent(){
    return(
        <button>Click</button>
    )
}

function ProductItem({singleProductItems, keyIndex}){
    return(
        <div key={keyIndex}>
            <p>{singleProductItems}</p>
            <ButtonComponent/>
        </div>
    )
}

export default ProductItem;