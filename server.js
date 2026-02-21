const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const foodRoutes = require('./routes/foodRoutes.js');

//dot env configuration
dotenv.config();

//DB Connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
//URL => http://localhost:8080

app.use('/api/v1/auth', authRoutes);

app.use('/api/v1/user', userRoutes);

app.use('/api/v1/restaurant', restaurantRoutes);

app.use('/api/v1/category', categoryRoutes);

app.use('/api/v1/food', foodRoutes);


app.get('/', (req,res) => {
    return res
    .status(200)
    .send("<h1>WELCOME TO FOOD SERVER API PROJECT</h1>");
});


//PORT
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
    console.log(`Node Server Running on PORT-${PORT}`.black.bgMagenta);
})