import React from 'react';
import PropType from 'prop-types';
import Message from '../message/Message';

const MessageList = ({ messages }) => (
    <section id="messages-list">
        <ul>
            { messages && messages.map(message => (
                <Message key={message.id} {...message} />
            )) }
        </ul>
    </section>
)

MessageList.PropType = {
    messages: PropType.arrayOf(
        PropType.shape({
            id: PropType.number.isRequired,
            message: PropType.string.isRequired,
            author: PropType.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessageList;