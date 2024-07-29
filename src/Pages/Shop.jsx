import React from 'react'
import ShopBanner from '../Components/ShopBanner/ShopBanner'
import Popular from '../Components/Popular/Popular'
import ExclusiveOffers from '../Components/ExclusiveOffers/ExclusiveOffers'
import NewCollection from '../Components/NewCollection/NewCollection'
import Newsletter from '../Components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
        <ShopBanner/>
        <Popular/>
        <ExclusiveOffers/>
        <NewCollection/>
        <Newsletter/>
    </div>
  )
}

export default Shop