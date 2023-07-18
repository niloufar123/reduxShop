import { useState } from 'react'
import MainLayout from './components/layouts/mainLayout'
import { Helmet } from 'react-helmet'
import Header from './components/Header'
import ProductList from './components/ProductList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Helmet>
        <title>
          Sticker Shop
        </title>
      </Helmet>
      <div className="mx-auto max-w-6xl">
    <Header></Header>
    <ProductList />
      </div>
    </MainLayout>
  )
}

export default App
