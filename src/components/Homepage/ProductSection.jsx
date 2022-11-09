import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProduct, productSelectors } from '../../features/ProductSlice'

const ProductSection = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
  useEffect(() => {
    dispatch(getProduct());
  },[dispatch]);

  return (
    <div>
        <div className="product-section">
          <h2 className='text-center font-head uppercase text-[2rem]'>New Arrivals</h2>
          <div className='grid grid-cols-3 gap-5'>
            {
              products.map((val,idx) =>(
                  <div key={idx}>
                      <img src={val.image} alt=""  className='h-[20rem] w-auto'/>
                      <h4>{val.title}</h4>
                  </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ProductSection