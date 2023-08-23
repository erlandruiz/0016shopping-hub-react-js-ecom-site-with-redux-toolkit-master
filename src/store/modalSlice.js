import { createSlice } from "@reduxjs/toolkit";

const modalSlide = createSlice({
    name: 'modal',
    initialState:{
        data: [],
        isModalVisible:false
    },
    reducers:{
        setModalData(state,action){
            state.data = action.payload;
        },
        setIsModalVisible(state,action){
           state.isModalVisible = action.payload;
        }
    }
});

export const {setModalData, setIsModalVisible} = modalSlide.actions;

export default modalSlide.reducer;