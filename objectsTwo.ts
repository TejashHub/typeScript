type User = {
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number;
};

let myUser: User = {
  _id: 1,
  name: "tejash",
  email: "tejash@gmail.com",
  isActive: true,
  credcardDetails: 1,
};

myUser.email = "tejash@info.com";

export {};
