export type Message = {
  _id: string;
  content: string;
  name?: string;
  user?: {
    _id: string;
    nickname: string;
  };
  createdAt: Date;
};
