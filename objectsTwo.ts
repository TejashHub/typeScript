type User = {
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  creditNumber?: number;
};

let myUser: User = {
  _id: 1,
  name: "tejash",
  email: "tejash@gmail.com",
  isActive: true,
  creditNumber: 540,
};

myUser.email = "tejash@info.com";
myUser.creditNumber = 500;

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
