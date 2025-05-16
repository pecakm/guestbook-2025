export type Message = {
  _id: string;
  content: string;
  name?: string;
  userId?: string;
  createdAt: Date;
};
