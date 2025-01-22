interface UserSchema {
  readonly _id: string;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
  isAdmin: boolean;
  startTrail(): string;
}

interface Admin extends UserSchema {
  role: "admin" | "hr" | "employee";
}

const User: Admin = {
  _id: "001",
  name: "Tejash",
  email: "TejashYadav@info.com",
  phone: "9909110659",
  isActive: true,
  isAdmin: false,
  startTrail: () => "Trail Started!!!!",
  role: "admin",
};

console.log(User.email);

User.email = "nitash@info.com";

export {};
