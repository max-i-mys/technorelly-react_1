import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import UsersProvider from './contexts/UsersContext'
console.log('mmmmm')
ReactDOM.render(
	<React.StrictMode>
		<UsersProvider>
			<App />
		</UsersProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
