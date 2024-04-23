// * -----------------
// * Union Types
// * -----------------

let userId: string | number;

userId = "HG240788";
userId = 8;

let userEmail: string | null;

userEmail = "user@example.com";
userEmail = null;

// * -----------------
// * Union Types with type aliases
// * -----------------

type Id = string | number;

let anotherId: Id;

anotherId = "100";
anotherId = "HG240789";

// * -----------------
// * Union Types in functions
// * -----------------

function printId(id: Id): void {
  console.log(id);
}

printId(anotherId);
