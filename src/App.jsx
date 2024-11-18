import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyClassComp from './components/class-base-components'
import MyFunctionComp from './components/func-component'
import ProductList from './components/products/index'

const dummyProductData = ["product 1", "product 2", "product 3", "product 4"];

function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <h1>React tutorial day 1</h1>
      {/*<MyClassComp/>
      <MyFunctionComp/>*/}
      <ProductList listOfProduct = {dummyProductData} />
    </div>
  )
}

export default App
