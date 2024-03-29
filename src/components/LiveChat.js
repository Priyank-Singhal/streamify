import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../data/Comments';

const LiveChat = () => {

    const [liveChatMessage, setLiveChatMessage] = useState("");
    const LiveMessages = useSelector(store => store.chat.messages)
    const dispatch = useDispatch();

    useEffect(() => {
        const timeInterval = setInterval(() => {
            // API Polling
            dispatch(addMessage({ name: generateRandomName(), message: makeRandomMessage(15) }))
            console.log("API Polling")
        }, 1200)

        return () => clearInterval(timeInterval)
    }, [])

    return (
        <div className='border border-black w-full p-3 ml-2 h-[700px]'>
            <h1 className='font-bold text-lg pb-2 px-3 border-b-4 mb-2'>Live Chat</h1>
            <div className='flex flex-col-reverse h-[590px] max-h-full overflow-y-scroll'>
                {LiveMessages.map((msg, ind) => <ChatMessage key={ind} name={msg.name} message={msg.message} />)}
            </div>
            <form
                className='p-2 flex -ml-3'
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    className='border border-gray-500 w-[100%] mx-1 py-0.5 rounded-lg px-2'
                    type='text'
                    placeholder='Chat....'
                    onChange={(e) => {
                        setLiveChatMessage(e.target.value)
                    }}
                    value={liveChatMessage}
                />
                <button
                    className='px-5 ml-2 py-0.5 bg-gray-100 rounded-md shadow-sm border border-gray-200'
                    onClick={() => {
                        dispatch(addMessage({ name: "Priyank", message: liveChatMessage }))
                        setLiveChatMessage("");
                    }}
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default LiveChat