// Insert user
db.users.insertOne({
  name: "Alice Smith",
  email: "alice@example.com",
  role: "editor",
  hashed_password: "hashed_pw_123",
  created_at: new Date()
});

// Insert blog post
const user = db.users.findOne({ email: "alice@example.com" });

db.blog_posts.insertOne({
  title: "My First Blog",
  content: "This is the content of the blog post.",
  author_id: user._id,
  created_at: new Date()
});
