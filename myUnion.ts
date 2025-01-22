let score: number | string | boolean = 33;

score = 44;

score = "55";

score = true;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let tejash: User | Admin = { name: "tejash", id: 456 };

tejash = { username: "tejash", id: 789 };

function getDBId(id: number | string) {
  if (typeof id === "string") {
    return id.toLowerCase();
  } else {
    return id;
  }
}

getDBId(5);
getDBId("565");

export {};
