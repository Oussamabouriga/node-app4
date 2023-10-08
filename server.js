import express from 'express' ; 
import mongoose from 'mongoose';
import gameRoutes from './routes/Game.js'

const port = process.env.PORT || 9090
const app = express()
const databaseName = "workshop4sim3"

mongoose.set('debug',true) ;
mongoose.Promise = global.Promise ; 
mongoose
        .connect(`mongodb://localhost:27017/${databaseName}`)
        .then(() =>{
            console.log(`connected to ${databaseName}`)
        })
        .catch(err =>{
            console.log(err);
        });

app.use(express.json) 
app.use('/game',gameRoutes)

app.listen(port ,() => {
    console.log(`server running at http://localhost:${port}`);

})