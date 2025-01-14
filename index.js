const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

 
const app = express();
const cors = require('cors');
 
require('dotenv').config();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173/',],
  credentials: true
}));

 
const uri = `mongodb+srv://${process.env.USER_BD}:${process.env.PASS_BD}@cluster0.j0ovfoc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
 


app.get('/', (req, res) => {
  res.send('cozy-stay is sitting')
})

app.listen(port, () => {
  console.log(`  cozy-stay is sitting on port ${port}`);
})





git branch -M main
git remote add origin https://github.com/abduljolil/cozy-stay-backend.git
git push -u origin main
