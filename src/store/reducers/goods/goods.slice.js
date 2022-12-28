import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const name = 'goods';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });


function createInitialState() {
  return {
      list: []
  }
}

export const goodsActions = { ...slice.actions, ...extraActions };
export const goodsReducer = slice.reducer;


function createExtraActions() {
  const baseUrl = `http://jsonplaceholder.typicode.com`;

  return {
      getAll: getAll()
  };    

  function getAll() {
      return createAsyncThunk(
        baseUrl,
          async (data) => {
            const response = await fetch(`${baseUrl}/posts`)
            const movies = await response.json();
            return movies
          }
      );
  }
}

function createExtraReducers() {
  return {
      ...getAll()
  };

  function getAll() {
      var { pending, fulfilled, rejected } = extraActions.getAll;
      //Этапы записи в стор
      return {
          [pending]: (state) => {
            //загрузка
              state.list = { loading: true };
          },
          [fulfilled]: (state, action) => {
              //записал
              state.list = action.payload;
          },
          [rejected]: (state, action) => {
               //ошибка
              state.list = { error: action.error };
          }
      };
  }
}