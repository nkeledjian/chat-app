import React from 'React';
import PropTypes from 'Prop-types';

const MessagesList = ({messages}) => (
    <section id="messages-list">
        <ul>
            {MessagesList.map(message => (
                <Messages
                    key={message.id}
                    {...message}
                />
            ))}
        </ul>
    </section>
)

MessagesList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessagesList;