import React from 'react'
import './CSS/ShopCategory.css'
import all_product from '../Components/Assets/all_product'
import Item from '../Components/Item/Item'

const ShopCategory = ({banner,category}) => {
  return (
    <div className='shopcategory'>
        <div className="shopcategory-banner">
            <img src={banner} alt="" />

        </div>
        <div className="shopcategory-sorting">
            <div className="shopcategory-sorting-left">
                <span>Showing</span>1-12 out of 36 products

            </div>
            <div className="shopcategory-sorting-right">
                <form id="sizeForm">
                    <label for="sizes">Choose size:</label>
                    <select id="sizes">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </form>

            </div>
        </div>
        <div className="shopcategory-products">
            {all_product.map((item)=>{
                if (item.category===category){
                    return <Item id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                }
            })}
        </div>


    </div>
  )
}

export default ShopCategory