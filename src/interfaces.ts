// * -----------------
// * Interface
// * -----------------

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = {
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
  author: authorOne,
};

// * -----------------
// * Interface as function argument types
// * -----------------

function createPost(postInfo: Post): void {
  console.log("Post created");

  console.log(`Post title: '${postInfo.title}'`);
  console.log(`Post author: '${postInfo.author.name}'`);
}

createPost(blogPost);

// * -----------------
// * Interface with array
// * -----------------
