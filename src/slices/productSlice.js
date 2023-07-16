import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    items:[],
    status:null
}

export const fetchProducts=createAsyncThunk(
    "products/fetchProducts",
    async()=>{
        try {
            const res=await axios.get("http://Localhost:9000/stickers");
            return res.data;

        } catch (error) {
            console.log(error)
            
        }
    }
)
const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchProducts.pending]:(state,action)=>{
            state.status="pending"

        },
        [fetchProducts.fulfilled]:(state,action)=>{
            state.items=action.payload;
            state.status="success"
        },
        [fetchProducts.rejected]:(state,action)=>{
            state.status="rejected"
        }
    }
})

export default productSlice.reducer;
