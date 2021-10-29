import { ListGroup, Button } from 'react-bootstrap'
import useUsers from '../hooks/useUsers'

export default function User({ person }) {
	const [, dispatch] = useUsers()
	function handlerDel() {
		if (person.id) {
			dispatch({ type: 'DELETE', payload: person.id })
		}
	}
	return (
		<>
			<ListGroup.Item key={person.id} className="list__user">
				{person.name} {person.surname}
				<Button onClick={handlerDel} variant="danger" className="list__btn">
					&#10799;
				</Button>
			</ListGroup.Item>
		</>
	)
}
