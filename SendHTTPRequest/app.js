
const sqlite3 = require('sqlite3').verbose
let sql;

//Connect to DB
const db =new sqlite3.database('./JASON.db', sqlite3.OPEN_READWRITE, (err)=>{
  if(err) return console.error(err.message);

})


//Connect to table


//Drop table

