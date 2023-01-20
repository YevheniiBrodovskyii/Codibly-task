import {
	combineReducers,
	configureStore,
	PreloadedState,
} from '@reduxjs/toolkit'
import productsReducer from './ProductsSlice'

const rootReducer = combineReducers({
	products: productsReducer,
})
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
