const add = (a: number, b: number) => a + b;

const getUpper = (a: string) => a.toLocaleUpperCase();

const signUp = (name: string, email: string, isPaid: boolean = false) => {
  return {
    name,
    email,
    isPaid,
  };
};

const signIn = (email: string) => {
  return {
    email,
  };
};

console.log(add(4, 5));
console.log(getUpper("Hello Worlds"));
console.log(signUp("payal", "pty22112000@gmail.com"));
console.log(signIn("pty22112000@gmail.com"));
export {};
