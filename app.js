const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
// const multer = require('multer')

// const helpers = require('./helper/helpers')
const app = express();

const hbs = expressHbs.create({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: __dirname + "/views/layouts"
        // helpers: helpers
})

app.engine("hbs", hbs.engine)
app.set('view engine', 'hbs');

// //setting up multer for handling file uploads
// const storage = multer.diskStorage({
//     destination: (req,file,cb) =>{
//         cb(null, 'uploads'); //uploads file to the upload directory
//     },
//     filename: (req,file,cb) => {
//         cb(null, filename.filenamehere) 
//     }
// })

// const upload = multer({storage});

//setting the static folder, which routes in all the file in the folder
app.use("/static", express.static(__dirname + "/public"));
//routes
const frontendController = require('./routes/frontend/index')
const backendController = require('./routes/backend');


// //load router modules
//app.use("/backend", backendController);
app.use('/', frontendController)

//defines the port
const port = 6969;

//listen the operationa and runs the port
app.listen(port, () => console.log(`Server is running in http://localhost:${port}`));