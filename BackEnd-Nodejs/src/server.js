const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/categoryRoutes');
const userRoutes = require('./routes/userRoutes')
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/user');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB success!');
}).catch((error) => {
  console.error('Connection error', error);
});

// Use CORS middleware
app.use(cors());

// Use the post routes
app.use('/api', productRoutes);
app.use('/api', authRoutes);
app.use('/api', categoryRoutes)
app.use('/api', userRoutes)

// tài khoản tồn tại khi đăng ký
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kiểm tra xem người dùng đã tồn tại hay chưa
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Tài khoản đã tồn tại.' });
    }

    // Tạo người dùng mới
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'Đăng ký thành công!' });
  } catch (err) {
    console.error('Lỗi trong quá trình đăng ký:', err);
    res.status(500).json({ message: 'Lỗi hệ thống, vui lòng thử lại sau.' });
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
console.log('MONGODB_URI:', process.env.MONGODB_URI);



// app.get('/', (req, res) => {
//   res.send('Server is working!');
// });
// app.get('/api/test', (req, res) => {
//   res.send('API is working!');
// });
