import { useState, useEffect, type ReactElement } from 'react';
import { fetchData } from './components/fetchData';
import { useQuery } from '@tanstack/react-query';
import Company from './components/Company';
import Info from './components/Info';
import type { TabData } from './types/tab';

const url = 'https://www.course-api.com/react-tabs-project';

function App(): ReactElement {
  const [jobData, setJobData] = useState<TabData[]>([]);
  const [showInfo, setShowInfo] = useState<TabData | undefined>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['url', url],
    queryFn: fetchData,
  });

  useEffect(() => {
    console.log(data);
    if (data) {
      setJobData(data);
      setShowInfo(data[0]);
    }
  }, [data]);

  const handleInfo = (selectId: string) => {
    const showData = jobData.find((item) => item.id === selectId);
    setShowInfo(showData);
  };

  if (isLoading) {
    return (
      <main className="loading-container">
        <div className="loading"></div>
      </main>
    );
  } else if (isError) {
    console.log('something wrong');
    return <h1>Cannot fetch data</h1>;
  }

  return (
    <main>
      <div className="jobs-center">
        {showInfo?.id && (
          <>
            <Company
              jobData={jobData}
              handleInfo={handleInfo}
              showInfo={showInfo}
            />
            <Info showInfo={showInfo} />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
