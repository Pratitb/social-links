import './App.css';
import Button from './components/Button/Button';
import Person from './components/Person';

function App() {
	return (
		<>
			<div className="card_wrap">
				<Person
					PersonName="pratit bangdiwala"
					PersonLocation="mumbai, india"
					PersonRole="front End web developer"
				/>
				<Button />
			</div>
		</>
	);
}

export default App;
