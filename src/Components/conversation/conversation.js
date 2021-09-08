import React from 'react'
import './conversation.css'

const conversation = () => {
    return (
        <div className="conversation">
            <div className="messages">
                
            </div>
            <div className="conversation1">
                <form>
                    <input type="text" placeholder="Enter the message" />
                    <input type="submit" value="send"/>
                </form>
            </div>
        </div>
    )
}

export default conversation
