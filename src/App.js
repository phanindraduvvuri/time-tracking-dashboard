import StatCard from './components/StatCard';
import stats from './data.json';

function App() {
  return (
    <div className="container">
      <StatCard stats={stats} />
    </div>
  );
}

export default App;
