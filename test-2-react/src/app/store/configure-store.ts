import { configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';

import { ignoredActions } from './ignored-serializable-actions';
import reducer from './root-reducer';
import rootSaga from './root-saga';
import { UserState } from '@/entities/user/model';

type MyPersistConfig<T> = PersistConfig<T> & { whitelist: (keyof T)[] };

const sagaMiddleware = createSagaMiddleware();

const userPersistConfig: MyPersistConfig<UserState> = {
  key: 'user',
  storage,
  whitelist: ['email'],
};

const reducers = {
  ...reducer,
  user: persistReducer(userPersistConfig, reducer.user),
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
