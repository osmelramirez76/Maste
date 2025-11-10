const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error('❌ MONGO_URI no está definida en .env');
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('✅ MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // detiene la app si no hay conexión
    }
};

module.exports = connectToDb;
