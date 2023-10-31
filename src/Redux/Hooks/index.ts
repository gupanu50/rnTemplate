import {useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux';
import {RootState,AppDispatch} from '@/Redux/Store';

export const useAppDispatch = ()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;