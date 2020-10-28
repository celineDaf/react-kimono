export interface Message {
  token: String;
  notification: {
    title: String;
    body: String;
  };
}

export interface StorageError {
  name: String;
  code: String;
  message: String;
}

export interface ResponseType<T> {
  content: T | undefined;
  messageError: string | undefined;
}

export class ResponseInit<T> {
  content: T | undefined;
  messageError: string | undefined;

  constructor() {
    this.content = undefined;
    this.messageError = undefined;
  }
}
