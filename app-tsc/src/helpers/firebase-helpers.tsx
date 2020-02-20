export interface FirebaseMessage {
  token: String;
  notification: {
    title: String;
    body: String;
  };
}

export interface FirebaseStorageError {
  name: String;
  code: String;
  message: String;
}

export type Action = {
  type: "UPDATEMESSAGES";
  data: {
    messages: FirebaseMessage[];
  };
};

export function updateMessage(messages: FirebaseMessage[]): Action {
  return {
    type: "UPDATEMESSAGES",
    data: {
      messages: messages
    }
  };
}

export interface FirebaseResponseType<T> {
  content: T | undefined;
  messageError: string | undefined;
}

export class FirebaseResponseInit<T> {
  content: T | undefined;
  messageError: string | undefined;

  constructor() {
    this.content = undefined;
    this.messageError = undefined;
  }
}
