import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState } from './reducers';
import type { ThunkDispatch } from 'redux-thunk';
import type { AnyAction } from 'redux';

export const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
