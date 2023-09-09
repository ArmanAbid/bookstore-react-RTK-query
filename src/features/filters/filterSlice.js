const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    search:"",
    filter: "all"
}

const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        searchFilter: (state,action) =>{
            state.search = action.payload
        },
        featuredFilter: (state,action) =>{
            state.filter = action.payload
        }
    }
})

export default filterSlice.reducer;
export const {searchFilter,featuredFilter} = filterSlice.actions;