/*

fetch('https://raw.githubusercontent.com/younginnovations/internship-challenges/master/programming/petroleum-report/data.json')
      .then(response => response.json())
      .then(json => console.log(json))
   */


//https://stackoverflow.com/questions/67433515/parse-json-and-store-into-sqlite
//https://jsonplaceholder.typicode.com/

var db = require('./SandBox.db')
const apiurl = 'https://jsonplaceholder.typicode.com/todos/1'


      fetch(apiurl)
      .then(response => response.json());

      .then(data => console.log(data))
            .catch(error=>console.log('ERROR'))
       