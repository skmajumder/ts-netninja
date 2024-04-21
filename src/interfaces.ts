// * -----------------
// * Interface
// * -----------------

interface Author {
  name: string;
  avatar: string;
}

const author1: Author = {
  name: "John",
  avatar: "./img/mario.jpg",
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const blogPost: Post = {
  title: "TypeScript hero",
  body: "TypeScript is awesome",
  tags: ["TypeScript", "JavaScript", "Tech"],
  create_at: new Date(),
  author: author1,
};

// * -----------------
// * Interface as function argument types
// * -----------------

// * -----------------
// * Interface with array
// * -----------------
