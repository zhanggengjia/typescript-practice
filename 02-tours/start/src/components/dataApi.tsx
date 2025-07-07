import axios from 'axios';
import type { QueryFunctionContext } from '@tanstack/react-query';
import type { Tour } from '../types/tour';

export const getData = async (
  ctx: QueryFunctionContext<[string]>
): Promise<Tour[]> => {
  const url = ctx.queryKey[0];
  const { data } = await axios.get(url);
  return data;
};
