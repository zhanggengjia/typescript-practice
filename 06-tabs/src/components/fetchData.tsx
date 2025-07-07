import axios from 'axios';
import type { QueryFunctionContext } from '@tanstack/react-query';
import type { TabData } from '../types/tab';

export const fetchData = async (
  ctx: QueryFunctionContext<['url', string]>
): Promise<TabData[]> => {
  const url = ctx.queryKey[1];
  const { data } = await axios.get<TabData[]>(url);

  return data;
};
