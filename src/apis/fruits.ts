import instance from './instance';
import { FruitsType } from '../types/fruits';

export const getFruits = async () => {
  return await instance.get<FruitsType[]>('/fruits').then(res => res.data);
};
