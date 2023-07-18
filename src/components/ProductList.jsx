import React from 'react'
import { useGetAllProductsQuery } from '../slices/productApi';
import { useSelector } from 'react-redux';
import ProductCart from './ProductCart';

function ProductList() {
    const { status } = useSelector((state) => state.products);

    const { data } = useGetAllProductsQuery();

    return (
        <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            {status === "success" ? (
                <>
                    {data?.map((product, index) => (
                        <ProductCart key={index} product={product} />
                    ))}
                </>
            ) : status === "pending" ? (
                <p> Is Loading... </p>
            ) : (
                <p>There is some problems</p>
            )}
        </div>
    );
}

export default ProductList