import ProductItem from "./components/productItem";

function ProductList({ listOfProduct }) {
  return (
    <div>
      <h3 className='bg-red-500 text-yellow-300 p-2.5 rounded-md font-bold my-5'>Ecommerce Project</h3>
      {/* <ul> */}
      {/*Dynamic data */}
      {/* {dummyProductData.map((items, index) => (
          <li key={index}>{items}</li>
        ))} */}
      {/* </ul> */}

      <ul>
      {/*Dynamic data */}
      {listOfProduct.map((items, index) => (
          <ProductItem singleProductItems={items} keyIndex={index} />
        ))}
      </ul>

      {/*Nested Components*/}
      

      {/* <h4>Company Name : {companyName} & City Name : {city}</h4> */}
    </div>
  );
}

export default ProductList;
