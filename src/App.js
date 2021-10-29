import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddUser from './components/AddUser'
import UserList from './components/UserList'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<AddUser />
			</header>
			<main className="App-main">
				<UserList />
			</main>
		</div>
	)
}

export default App
