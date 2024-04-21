"use strict";
// * -----------------
// * Interface
// * -----------------
const authorOne = {
    name: "John",
    avatar: "./img/mario.jpg",
};
const blogPost = {
    title: "TypeScript hero",
    body: "TypeScript is awesome",
    tags: ["TypeScript", "JavaScript", "Tech"],
    create_at: new Date(),
    author: authorOne,
};
// * -----------------
// * Interface as function argument types
// * -----------------
function createPost(postInfo) {
    console.log("Post created");
    console.log(`Post title: '${postInfo.title}'`);
    console.log(`Post author: '${postInfo.author.name}'`);
}
createPost(blogPost);
// * -----------------
// * Interface with array
// * -----------------
//# sourceMappingURL=interfaces.js.map