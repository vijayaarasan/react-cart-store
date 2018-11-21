import React from 'react';

import ProductListing from '../features/products-listing'
import data from '../data/products.json'

export default function HomePage(props) {
    return <div>
        <ProductListing products={data.products} />
    </div>
}