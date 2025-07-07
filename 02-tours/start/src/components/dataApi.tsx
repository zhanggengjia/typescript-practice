import axios from 'axios';
import type { QueryFunctionContext } from '@tanstack/react-query';
import type { Tour } from '../types/tour';

export const getData = async (
  ctx: QueryFunctionContext<['url', string]>
): Promise<Tour[]> => {
  const url = ctx.queryKey[1];
  const { data } = await axios.get<Tour[]>(url);

  return data;
};
