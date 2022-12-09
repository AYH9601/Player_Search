import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : "user",
    initialState : "son"
})

let car = createSlice({
    name : "car",
    initialState : ["chevrolet", "RedBull", "tesla"]
})


let items = createSlice({
    name : "items",
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ]
})


export default configureStore({
    reducer: {
        user : user.reducer,
        car : car.reducer,
        items : items.reducer
    }
}) 