import React, { useContext } from 'react'
import './CSS/Product.css'
import { ShopContext } from '../Components/ShopContext/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import ProductDescription from '../Components/ProductDescription/ProductDescription'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id===Number(productId))
  return (

    <div className='product'>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription/>
        <RelatedProduct/>


    </div>
  )
}

export default Product