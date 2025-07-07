import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { v4 } from 'uuid';
import type { TabData } from '../types/tab';

const Info = ({ showInfo }: { showInfo: TabData }) => {
  const { title, company, dates, duties } = showInfo;

  return (
    <div>
      <h3>{title}</h3>
      <p className="job-company">{company}</p>
      <p className="job-date">{dates}</p>

      {duties.map((duty) => (
        <div key={v4()} className="job-desc">
          <span className="job-icon">
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
          <p>{duty}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
