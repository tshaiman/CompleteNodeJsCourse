var { MongoClient, ObjectID } = require('mongodb');
var assert = require('assert')

var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    var todos = db.collection('todos');
    var users = db.collection('users');

    /* users.insertMany([{name:"Tomer2",age:34},
    {name:"Efrat",age : 29},
    {name :"Efrat",age : 34}],    
    (err,result) => {
        assert.equal(null,err)
        assert.equal(3,result.ops.length)
        console.log(JSON.stringify(result.ops,undefined,2))
    }) */

    // Find some documents
    /* users.find({}).toArray().then((docs) => {
        assert.equal(err, null);
        console.log("Found the following records : " , docs.length);
        //console.log(JSON.stringify(docs,undefined,2))
        
        docs.forEach((el) => {
           if( true ) {
            users.deleteOne({_id: el._id},(err,res)=>{
                assert.equal(err, null);
                assert.equal(1, res.result.n);
                console.log("Removed the document with the field _id equal to " , el._id);
            })}
        })

        users.deleteOne({_id: new ObjectID("59c7c6f1eb702e23341a7058")}).then((res) => {
            console.log(res.result.n); 
        }); */


    //update single document
    users.findOneAndUpdate({ _id: new ObjectID("59c80a2ef7fe441d0a1f89fa") },
        {
            $set: { name: "Tomer Shaiman" },
            $inc: { age: 21 }
        }, { returnOriginal: false }).then((result) => {
            console.log(result);
        });

    db.close();
});