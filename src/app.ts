import express from 'express';
import cors from 'cors';
import propertyRoutes from './routes/property.routes';
import reviewRoutes from './routes/review.routes';
import authRoutes from './routes/auth.routes';
import favouriteRoutes from './routes/favourite.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/properties', propertyRoutes);
app.use('/reviews', reviewRoutes);
app.use('/auth', authRoutes);
app.use('/favourites', favouriteRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Rent Truth API');
});

export default app;