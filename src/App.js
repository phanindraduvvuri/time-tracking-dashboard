import { useState } from 'react';
import StatCard from './components/StatCard';
import stats from './data.json';
import userImage from './images/image-jeremy.png';



function App() {
  const [currTimeFrame, setCurrTimeFrame] = useState('weekly')

  function getTimeFrame() {
    if (currTimeFrame === 'daily') return 'Yesterday';
    if (currTimeFrame === 'weekly') return 'Last Week';
    if (currTimeFrame === 'monthly') return 'Last Month';

  }

  const cardComponents = stats.map((obj, index) => (
    <StatCard
      title={obj.title}
      currentTime={obj.timeframes[currTimeFrame].current}
      prevTime={obj.timeframes[currTimeFrame].previous}
      timeFrame={getTimeFrame()}
    />
  ))

  return (
    <div className="container">
      <div className="card user-card">
        <div className="user__details">
          <img src={userImage} alt="" className="user__image" />
          <div>
            <p className='dull-text'>Report for</p>
            <p className="user__name">Jeremy Robson</p>
          </div>
        </div>
        <div className="timeframes">
          <ul>
            <li><button className={currTimeFrame === 'daily' && 'active'} onClick={() => setCurrTimeFrame('daily')}>Daily</button></li>
            <li><button className={currTimeFrame === 'weekly' && 'active'} onClick={() => setCurrTimeFrame('weekly')}>Weekly</button></li>
            <li><button className={currTimeFrame === 'monthly' && 'active'} onClick={() => setCurrTimeFrame('monthly')}>Monthly</button></li>
          </ul>
        </div>
      </div>
      {cardComponents}
    </div>
  );
}

export default App;
