const app = require('./app');
const dotenv = require('dotenv');
var cloudinary = require('cloudinary');
const connectDatabase = require('./config/database');
//handle uncaught exceptions
process.on('uncaughtException',(err)=>{
    console.log(`ERROR:${err.message}`);
    console.log('Shutting down the server due to Uncaught Exception');
    process.exit(1)
})

//config
dotenv.config({path:"backend/config/config.env"});
//connect to database
connectDatabase();
//cloudinary config

          
cloudinary.config({ 
  cloud_name: 'dvgwyn2jv', 
  api_key: '279643717662695', 
  api_secret: 'qYplFk9zuadWVnrWE_xUDN-T104' 
});
          

  




const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working
    on http://localhost:${process.env.PORT}`);
})
//unhandled promise rejection
process.on('unhandledRejection',err=>{
    console.log(`ERROR:${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(()=>{
        process.exit(1)
    })
})