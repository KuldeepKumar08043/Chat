import { connect } from 'react-redux';
import MessagesListComponent from '../component/messageList/messageList';

export const MessagesList = connect(state => ({
        messages: state.message
    }), {})(MessagesListComponent)