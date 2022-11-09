
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzYxNGQ1NDdhMWNmOWRmNzg1NDk5OGUiLCJpYXQiOjE2Njc5OTQxMjZ9.pwrIu2KaLGb5anj9hpqQe9dYaYX8qtIqdp7ZYh827_I'


export const getProduct = createAsyncThunk("products/getProduct", async() => {
    const response = await axios.get('http://localhost:5000/api/products',{
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
    console.log(response);
    return response.data.data;
    
})

const productEntity = createEntityAdapter({
    selectId : (product) => product._id
});

const ProductSlice = createSlice({
    name : 'product',
    initialState : productEntity.getInitialState(),
    extraReducers : {
        [getProduct.fulfilled] : (state, action) => {
            productEntity.setAll(state, action.payload);
        }
    }
})

export const productSelectors = productEntity.getSelectors(state => state.product);
export default ProductSlice.reducer;