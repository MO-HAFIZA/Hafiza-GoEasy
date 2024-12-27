const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const Order = require('./models/foodMode')
const CoffeeOrder = require('./models/coffee')
const Ride = require('./models/rideModel')
const riderRoute = require('./routes/riderRoute')
const driverRoute = require('./routes/driverRoute')
const contractRoute = require('./routes/contract');

const app = express()
require("dotenv").config() // to allow us to read from the env file

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
const smsRoutes = require('./routes/smsRoutes');
app.use('/api', smsRoutes);


const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI

app.get('/', (req, res)=>{
    res.send("Welcome to our APIs")
})

app.use("/api/riders", riderRoute) // => /api/riders/register
app.use("/api/drivers", driverRoute) // => /api/drivers/register


 //---------------------------------------------------------------------------------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// ----------------------------------------------------------------------------------------------------
// API Endpoint to Create a New Order
app.post('/api/orders', async (req, res) => {
    
    const { foodItem, quantity } = req.body;

    // Input validation
    if (!foodItem || !quantity) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    if (quantity <= 0) {
        return res.status(400).json({ message: 'Quantity must be greater than zero.' });
    }

    const newOrder = new Order({ foodItem, quantity});
    try {
        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
        console.error("Error creating order:", error); 
        res.status(500).json({ message: 'Failed to create order', error: error.message });
    }
});

// -----------------------------------------------------------------------------------------------------
// API Endpoint to Create a New Coffee Order
app.post('/api/coffee', async (req, res) => {
    const { flavor, quantity} = req.body;

    // Input validation
    if (!flavor || !quantity) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    if (quantity <= 0) {
        return res.status(400).json({ message: 'Quantity must be greater than zero.' });
    }

    const newCoffeeOrder = new CoffeeOrder({ flavor, quantity });
    try {
        await newCoffeeOrder.save();
        res.status(201).json({ message: 'Coffee order created successfully', order: newCoffeeOrder });
    } catch (error) {
        console.error("Error creating coffee order:", error); // Log the error for debugging
        res.status(500).json({ message: 'Failed to create order', error: error.message });
    }
});

// -----------------------------------------------------------------------------------------------------
// Create a new ride request
app.post("/api/rides", async (req, res) => {
    const { pickupLocation, dropoffLocation} = req.body;
    const newRide = new Ride({ pickupLocation, dropoffLocation});
    
    try {
        await newRide.save();
        res.status(201).json({ message: "Ride request created successfully", ride: newRide });
    } catch (error) {
        res.status(500).json({ message: "Failed to create ride request", error });
    }
});

// -----------------------------------------------------------------------------------------------------

app.use('/api', contractRoute);

// -----------------------------------------------------------------------------------------------------
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Connected"))
.catch((err)=>console.log(err.message)) 