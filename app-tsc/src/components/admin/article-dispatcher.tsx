import { updateMessage } from './article-actions'

export const mapDispatchToProps = (dispatch): {updateMessage} => {
    return {
        updateMessage: (messages) => dispatch(updateMessage(messages))
    };
};