import { v4 } from 'uuid';
import type { TabData } from '../types/tab';

type CompanyProps = {
  jobData: TabData[];
  handleInfo: (id: string) => void;
  showInfo: TabData;
};

const Company = (props: CompanyProps) => {
  const { jobData, handleInfo, showInfo } = props;

  return (
    <div className="btn-container">
      {jobData.map((job, index) => (
        <button
          key={v4()}
          className={`job-btn ${showInfo.id === job.id && 'active-btn'}`}
          onClick={() => handleInfo(job.id)}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
};

export default Company;
