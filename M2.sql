-- Insert a user
INSERT INTO users (name, email, role, hashed_password)
VALUES ('Alice Smith', 'alice@example.com', 'editor', 'hashed_pw_123');

-- Insert a blog post by the above user
INSERT INTO blog_posts (title, content, author_id)
VALUES ('My First Blog', 'This is the content of the blog post.', 1);
