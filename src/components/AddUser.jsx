import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import useUsers from '../hooks/useUsers'

export default function AddUser() {
	const [valueName, setValueName] = useState(null)
	const [valueSurname, setValueSurname] = useState(null)
	const [, dispatch] = useUsers()
	function handlerAdd(e) {
		e.preventDefault()
		if (valueName && valueSurname) {
			const newUser = {
				name: valueName,
				surname: valueSurname,
				id: Date.now(),
			}
			dispatch({ type: 'ADD', payload: newUser })
		}
		e.target.reset()
	}

	return (
		<>
			<Form onSubmit={handlerAdd} className="mb-3 w-25">
				<Form.Group className="mb-3">
					<Form.Label>Your name</Form.Label>
					<Form.Control
						name="name"
						onChange={e => setValueName(e.target.value)}
						type="text"
						placeholder="Name"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Your surname</Form.Label>
					<Form.Control
						name="surname"
						onChange={e => setValueSurname(e.target.value)}
						type="text"
						placeholder="Surname"
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	)
}
