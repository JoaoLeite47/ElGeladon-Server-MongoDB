import mongoose from 'mongoose';

export const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/paletas-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log(err));
};
