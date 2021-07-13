require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.JSGETTINGSTARTED;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
    // perform actions on the collection object
    client.close();
});