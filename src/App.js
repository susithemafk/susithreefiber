import './App.css'; 
import { HashRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; 
import CreatePreview from './components/CreatePreview';

function App() {

	return (
		<div className="App">
			<HashRouter>
				<Routes>

					<Route path = "/" element = {<Homepage />} />
					<Route path = "/preview" element = {<CreatePreview />} />

				</Routes>
			</HashRouter>
		</div>
	)
}

export default App;
