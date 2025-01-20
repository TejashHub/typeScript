type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const users = [
  {
    name: "payal",
    email: "payal@gmail.com",
    isActive: true,
  },
  {
    name: "tejash",
    email: "tejash@gmail.com",
    isActive: true,
  },
];

const createUser = (user: User) => {
  return {
    name: user.name,
    email: user.email,
    isActive: user.isActive,
  };
};

createUser(users[0]);

export {};
