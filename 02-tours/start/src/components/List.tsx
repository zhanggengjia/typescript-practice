import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState, type ReactElement } from 'react';
import { getData } from './dataApi';
import Card from './Card';
import Loading from './Loading';
import type { Tour } from '../types/tour';
import type { ListProps } from '../types/listProps';

const List = ({ url }: ListProps): ReactElement => {
  const [tourList, setTourList] = useState<Tour[]>([]);

  const { data, isLoading, isError, refetch } = useQuery<
    Tour[],
    Error,
    Tour[],
    [string]
  >({
    queryKey: [url],
    queryFn: getData,
  });

  useEffect(() => {
    if (data) setTourList(data);
  }, [data]);

  const handleDelete = (id: string) => {
    setTourList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRefresh = async () => {
    const result = await refetch();
    if (result.data) setTourList(result.data);
    console.log('refetch data...');
  };

  if (isLoading) return <Loading />;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <div className={!tourList.length ? 'tours-empty' : 'tours'}>
      {tourList.map((tour) => (
        <Card key={tour.id} {...tour} handleDelete={handleDelete} />
      ))}
      {!tourList.length && (
        <button className="btn" onClick={handleRefresh}>
          refresh
        </button>
      )}
    </div>
  );
};

export default List;
