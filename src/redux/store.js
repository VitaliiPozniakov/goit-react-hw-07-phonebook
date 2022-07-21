import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contacts-reducer';
import {contactApi} from './contactApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import filterReducer from './contacts-reducer'

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// //   logger,
// ];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };


// export const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, contactsReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

export const store = configureStore({
  reducer: {
  filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), contactApi.middleware],
    // getDefaultMiddleware().concat(contactApi.middleware),

    devTools: process.env.NODE_ENV === 'development',
})

setupListeners(store.dispatch)
// export const persistor = persistStore(store);



























// import { configureStore, combineReducers  } from '@reduxjs/toolkit'
// // import { combineReducers } from 'redux'
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist' 
// import storage from 'redux-persist/lib/storage' 
// // import {contactsReducer, filterReducer} from './contacts-reducer'
// import contactsReducer from './contacts-reducer'



// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter']
//   }

// export const store = configureStore({ 
//     reducer: {
//         contacts: persistReducer(contactsPersistConfig, contactsReducer) ,
//     }  ,
//     devTools: process.env.NODE_ENV === 'development',

//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })


// // const persistConfig = {
// //     key: 'contacts',
// //     storage,
// //   }


// //   const rootReducer = combineReducers ({
// //     contacts:  contactsReducer,
// //     // filter: filterReducer
// // })

// //   const persistedReducer = persistReducer(persistConfig, rootReducer)


// // const store = configureStore({ 
// //     reducer: persistedReducer  ,
// //     devTools: process.env.NODE_ENV === 'development',

// //     middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({
// //       serializableCheck: {
// //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //       },
// //     }),
// // })

// export const persistor = persistStore(store)

// // const storeToExport = {
// //     store, persistor
// // }

// // export default storeToExport


// // export default {store, persistor}

