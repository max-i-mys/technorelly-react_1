import { useContext } from 'react'
import { UsersContext } from '../contexts/UsersContext'

export default function useUsers() {
	return useContext(UsersContext)
}