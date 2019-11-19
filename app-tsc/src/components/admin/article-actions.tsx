
export interface FirebaseMessage  {
    token: String
    notification:{
      title: String,
      body: String
    }
};


export type Action = {
    type: 'UPDATEMESSAGES',
    data:{
        messages: FirebaseMessage[]
    }
}

export function updateMessage(messages: FirebaseMessage[]) : Action {

    return {
        type: 'UPDATEMESSAGES',
        data: {
            messages : messages
        }
    
    };
}
