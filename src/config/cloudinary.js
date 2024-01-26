const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dukog3sq3', 
    api_key: '576516171252963',
    api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary;