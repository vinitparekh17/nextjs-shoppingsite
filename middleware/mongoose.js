const mongoose = require('mongoose');

const connectDb = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }

    mongoose.connect('mongodb+srv://parekh:Smartyvinit100@webwork.stlpo.mongodb.net/WebWork?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return handler(req, res)
}

export default connectDb;