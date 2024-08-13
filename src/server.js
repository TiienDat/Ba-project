require('dotenv').config();
const cors = require('cors')
const express = require('express')
const routerAPI = require('./routes/web')
const configViewEngine = require('./config/viewEngine');
const { getHome } = require('./controllers/homeControllers');
const { default: mongoose } = require('mongoose');


const MONGOURL = process.env.MONGO_DB_URL


const app = express();
const port = process.env.PORT || 8888;

//config cors
app.use(cors())

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app);

app.use('/',routerAPI)
app.use('/',getHome)



mongoose.connect(MONGOURL).then(()=>{
    console.log('db is connected')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
}).catch((err)=>{
    console.log(err)
})



