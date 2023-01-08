import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleListItemsModal } from '../../../redux/actions/clearListItemsModal'


const ClearListButton = () => {
	const dispatch = useDispatch()
	const selectedList = useSelector(state => state.selectedList)


	const handleToggleClearAllModal = () => {
		dispatch(toggleListItemsModal())
	}
	return (
		<p 
			className={`${selectedList === null ? 'hidden' : 'w-fit ml-auto pb-2.5 italic opacity-90 tracking-wider text-right cursor-pointer hover:opacity-50 hover:underline'}`}
			onClick={() => handleToggleClearAllModal()}
		>
			Clear list
		</p>
	)
}

export default ClearListButton