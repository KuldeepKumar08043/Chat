import React from 'react';
import PropType from 'prop-types';

const Message = ({ message, author }) => (
    <p>
        <i>{author}</i> : { message }
    </p>
)

Message.PropType = {
    message: PropType.string.isRequired,
    author: PropType.string.isRequired
}

export default Message;