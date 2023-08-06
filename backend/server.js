const express = require("express");
const cors = require("cors");


const app = express();
var corsOption = {
    origin: "https://localhost:8081"
};

app.use(cors(corsOption));

// parse request of content-type - application/json
app.use(express.json());

// parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

// simple route 
app.get("/", (req, res) => {
    res.json ({message : "this is the jb app "});
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for request 
const PORT = process.env.PORT || 8080;
app.listen( PORT, () =>  {
    console.log(`Up and running on port ${PORT}.`);
});

const db =require("./app/models");


// for dev 
const Role = db.role;

db.sequelize.sync({force:true}).then(() => {
    console.log('Drop and resync DB');
    initial();
})

function initial() {
    Role.create({
        id: 1,
        name: "user"
      });
     
      Role.create({
        id: 2,
        name: "admin"
      });
}

// for prod just use the below and insert the rows manually 
// const db = require("./app/models");
//db.sequelize.sync();