import { applyMiddleware, createStore, compose, combineReducers } from "redux"
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import logger from "redux-logger"
import thunk from "redux-thunk"

export const history = createHistory()

// Configure the middlewares
let middlewares = [thunk, routerMiddleware(history), logger]

if (process.env.NODE_ENV !== 'production') {
	middlewares = [...middlewares, logger]
}

// export the store that will be use across all the pages
export const store = createStore(combineReducers({
	routing: routerReducer
}), applyMiddleware(...middlewares))