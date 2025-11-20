import './App.css';
import ReactiveSide from './components/reactiveSide/reactiveSide';
import DayScheduleSide from './components/dayScheduleSide/dayScheduleSide';

function App() {
	return (
		<div className="app">
			<ReactiveSide />
			<DayScheduleSide />
		</div>
	);
}

export default App;
