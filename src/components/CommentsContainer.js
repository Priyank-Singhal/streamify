import React from 'react'

const CommentsContainer = () => {
    const commentsData = [
        {
            name: "Maya",
            text: "Lorem ipsum bla bla bla bla",
            replies: []
        },
        {
            name: "Priyank",
            text: "Lorem ipsum bla bla bla bla",
            replies: [
                {
                    name: "Moh",
                    text: "Lorem ipsum bla bla bla bla",
                    replies: [
                        {
                            name: "Maya",
                            text: "Lorem ipsum bla bla bla bla",
                            replies: [
                                {
                                    name: "Maya",
                                    text: "Lorem ipsum bla bla bla bla",
                                    replies: [
                                        {
                                            name: "Maya",
                                            text: "Lorem ipsum bla bla bla bla",
                                            replies: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Maya",
            text: "Lorem ipsum bla bla bla bla",
            replies: [
                {
                    name: "Maya",
                    text: "Lorem ipsum bla bla bla bla",
                    replies: []
                },
                {
                    name: "Maya",
                    text: "Lorem ipsum bla bla bla bla",
                    replies: []
                }
            ]
        },
        {
            name: "Priyank",
            text: "Lorem ipsum bla bla bla bla",
            replies: [
                {
                    name: "Moh",
                    text: "Lorem ipsum bla bla bla bla",
                    replies: [
                        {
                            name: "Maya",
                            text: "Lorem ipsum bla bla bla bla",
                            replies: [
                                {
                                    name: "Maya",
                                    text: "Lorem ipsum bla bla bla bla",
                                    replies: [
                                        {
                                            name: "Maya",
                                            text: "Lorem ipsum bla bla bla bla",
                                            replies: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ]

    const Comment = ({ data }) => {
        const { name, text, replies } = data;
        return (
            <div className='flex bg-gray-100 p-2 rounded-lg shadow-sm my-2'>
                <img className='h-10 w-10' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
                <div className='px-3'>
                    <p className='font-bold'>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        )
    }

    const CommentsList = ({ comments }) => {
        return comments.map((comment, ind) => (
            <div key={ind}>
                <Comment data={comment} />
                <div className='pl-3 ml-4 border-l border-l-black'>
                    <CommentsList comments={comment.replies} />
                </div>
            </div>
        ))
    }
    return (
        <div className='m-5 p-2'>
            <h1 className='font-bold text-2xl'>Comments: </h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer