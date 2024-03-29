import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center'>
        <img className='h-8' alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
        <p className='pl-2 text-slate-500 font-bold'>{name}</p>
        <p className='pl-2'>{message}</p>
    </div>
  )
}

export default ChatMessage