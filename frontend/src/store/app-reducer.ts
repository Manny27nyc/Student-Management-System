// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { combineReducers } from '@reduxjs/toolkit';
import { api } from '../api';
import { authReducer } from '@/domains/auth/slice';

export const appReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer
});
