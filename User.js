// app.js or any controller file
const mongoose = require('mongoose');
const User = require('./models/User');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost:27017/blogdb', { useNewUrlParser: true, useUnifiedTopology: true });

async function createSampleData() {
  const user = await User.create({
    name: 'Alice Smith',
    email: 'alice@example.com',
    role: 'editor',
    hashed_password: 'hashed_pw_123'
  });

  await BlogPost.create({
    title: 'My First Blog',
    content: 'This is the content of the blog post.',
    author_id: user._id
  });

  console.log('Sample user and blog post created.');
}

createSampleData();
