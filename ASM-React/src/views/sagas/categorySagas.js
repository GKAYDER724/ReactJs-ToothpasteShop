// import { call, put, takeEvery } from 'redux-saga/effects'
// import axios from 'axios'
// import {
//   fetchCategoriesSuccess,
//   fetchCategoriesFailure,
//   deleteCategorySuccess,
//   deleteCategoryFailure,
// } from '../actions/categoryActions'

// function* fetchCategories() {
//   try {
//     const response = yield call(axios.get, 'http://localhost:3000/api/categories')
//     yield put(fetchCategoriesSuccess(response.data))
//   } catch (error) {
//     yield put(fetchCategoriesFailure(error.message))
//   }
// }

// function* deleteCategory(action) {
//   try {
//     yield call(axios.delete, `http://localhost:3000/api/categories/${action.payload}`)
//     yield put(deleteCategorySuccess(action.payload))
//   } catch (error) {
//     yield put(deleteCategoryFailure(error.message))
//   }
// }

// function* watchCategoryActions() {
//   yield takeEvery('FETCH_CATEGORIES_REQUEST', fetchCategories)
//   yield takeEvery('DELETE_CATEGORY_REQUEST', deleteCategory)
// } 
// export default watchCategoryActions
