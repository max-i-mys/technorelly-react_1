import { ListGroup } from 'react-bootstrap'
import useUsers from '../hooks/useUsers'
import User from './User'

export default function UserList() {
	const [users] = useUsers()
	return (
		<>
			{users.length > 0 ? (
				<ListGroup className="list">
					{users.map(person => (
						<User key={person.id} person={person} />
					))}
				</ListGroup>
			) : (
				<span>List is empty</span>
			)}
		</>
	)
}
