'use strict';

const express = require('express');
const bodyParser = require('body-parser');
//const controllerrestapi = require('./controllerrestapi');
const getAllData = require('./getAllData');
const createDocumentData = require('./createDocument');
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const app = express();
const router = express.Router();

module.exports = function(context, req){
    app.use(bodyParser.json());
    //controllerrestapi(app);

    router.get('/', function(req, res){
        const allResults = getAllData.queryCollection(context);
        allResults.toArray((err, results) => {
            if (err) throw err;
            //console.log(results);
            return res.json({
                stuffs : results,
                error: false
            });
            
        })
    });

    /*router.post('/') */
    app.listen(process.env.port || 3000);
    console.log("Listening to port 3000");
    
}