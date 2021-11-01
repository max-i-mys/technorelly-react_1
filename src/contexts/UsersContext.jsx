import { createContext, useEffect, useReducer } from 'react'
export const UsersContext = createContext()

export default function UsersProvider({ children }) {
	useEffect(() => {
		if (!localStorage.getItem('users')) {
			localStorage.setItem('users', JSON.stringify([]))
		}

		const dataUsers = JSON.parse(localStorage.getItem('users'))
		dispatchUsers({ type: 'INITIAL', payload: dataUsers })
	}, [])

	const [users, dispatchUsers] = useReducer(reducer, [])

	function reducer(state, action) {
		switch (action.type) {
		case 'INITIAL':
			return action.payload
		case 'ADD': {
			const newUsers = [...state, action.payload]
			localStorage.setItem('users', JSON.stringify(newUsers))
			return newUsers
		}
		case 'DELETE': {
			const newUsers = [...state]
			const currentIndex = newUsers.findIndex(person => person.id === action.payload)
			newUsers.splice(currentIndex, 1)
			if (currentIndex !== -1) {
				newUsers.splice(currentIndex, 1)
			}
			localStorage.setItem('users', JSON.stringify(newUsers))
			return newUsers
		}
		default:
			throw new Error(`Wrong action type: ${action.type}`)
		}
	}
	return <UsersContext.Provider value={[users, dispatchUsers]}>{children}</UsersContext.Provider>
}
