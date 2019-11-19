import { Action } from './article-actions'


const ArticleReducer = (state = {}, action: Action): Action => {

    switch (action.type) {

        case 'UPDATEMESSAGES': {

            return {
                type: 'UPDATEMESSAGES',
                data: {
                    messages : action.data.messages
                }
            };
        }

    }
};

export default ArticleReducer;