const add = (a: number, b: number) => a + b;

const addTwo = (a: number): number => a + 2;

const getUpper = (a: string) => a.toLocaleUpperCase();

const getValue = (myVal: number): boolean | string => {
  if (myVal > 5) {
    return true;
  }
  return "200 ok";
};

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

const getHello = (message: string): string => {
  return message;
};

const heros: Array<string> = ["Superman", "Batman", "Wonder Woman"];

heros.map((item: string): string => {
  return `hero name is ${item}`;
});

const myvalues = addTwo(3);

console.log(heros);
console.log(getHello("Good Morninig Dears"));
console.log(myvalues);
console.log(getValue(4));
console.log(add(4, 5));
console.log(getUpper("Hello Worlds"));
console.log(signUp("payal", "pty22112000@gmail.com"));
console.log(signIn("pty22112000@gmail.com"));

export {};
