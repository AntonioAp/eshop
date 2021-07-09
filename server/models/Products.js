const productSchema = new Schema({
    id: {
        type:Number,
        required:true,
        unique:true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },  
    description: {
        type: String,
    required: true
    },
    category: {
        type: String
    },
    image: {
        type: String,
        validate: {
            validator: function(text) {
                return text.indexOf('https://') === 0;
            },
            message: 'la URL de la imagen debe empezar por https://'
        }
    },
    registerDate: {
        type: Date,
        required: true,
        default: new Date()
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;