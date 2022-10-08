var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./app/public'));
app.set('view engine', 'ejs');
app.set('views', './app/views');

const { MongoClient } = require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'realEstateDbs';

str = "string";

var billNum = 1001;

/*
app.route('/apparelsCategory').get(function (req, res) {

                res.render('apparelsCat');
});

*/

app.route('/user').get(function (req, res) {

    res.render('login', { username: "hello world" });
});


app.route('/admin').get(function (req, res) {

    res.render('adminlogin', { username: "" });
});



// app.route('/payment').post(function (req, res) {
//     //res.render('apparelsCat');
//     res.render('payment', { products: req.body.products });
// });


app.route('/bookingViewFlat').post(function (req, res) {

    res.render("bookingViewFlat");
});

app.route('/bookingViewApart').post(function (req, res) {

    res.render("bookingViewApart");

});

app.route('/Apartmentdetails').post(function (req, res) {

    res.render("Apartmentdetails");
});
app.route('/Apartmentdetails').get(function (req, res) {

    res.render("Apartmentdetails");
});

app.route('/flatdetails').post(function (req, res) {

    res.render("flatdetails");
});
app.route('/flatdetails').get(function (req, res) {

    res.render("flatdetails");
});
app.route('/bookApartment').post(function (req, res) {

    res.render("Apartmentuserhome");
});

app.route('/bookflat').post(function (req, res) {

    res.render("flatuserhome");
});

app.route('/')

app.route('/register').post(function (req, res) {

    res.render('register');
});

app.route('/registered').post(function (req, res) {
    MongoClient.connect(url, function (err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        db.collection('login').insert({
            fname: req.body.fname, sname: req.body.sname, email: req.body.email,
            userPassword: req.body.userPassword, dob: req.body.dob, gender: req.body.gender, phone: req.body.phone
        }, function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.send("Registration Error");
            }
            else {
                db.close;
                res.render('login', { username: "" });
            }
        });
    });
    //    res.send(req.body);
});

app.route('/adminregister').post(function (req, res) {

    res.render('adminregister');
});


app.route('/adminregistered').post(function (req, res) {
    MongoClient.connect(url, function (err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        db.collection('adminlogin').insert({
            fname: req.body.fname, sname: req.body.sname, email: req.body.email,
            userPassword: req.body.userPassword, dob: req.body.dob, gender: req.body.gender, phone: req.body.phone
        }, function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.send("Registration Error");
            }
            else {
                db.close;
                res.render('adminlogin', { username: "" });
            }
        });
    });
    //    res.send(req.body);
});






app.post('/addBookingFlat', function (req, res) {
    //var prodD = req.body.prods;
    var prodArr = [];
    console.log(req.body);
    //prodArr = JSON.parse(req.body);
    prodArr = req.body;
    console.log("prodArr array from addProduct http post");
    console.log(prodArr);
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('bookingflatdet');

        col.insert(prodArr, { w: 1 }, function (err, result) {

            //col.insert({ pCost: 100, hosName: 'Something' }, { w: 1 }, function (err, result) {
            if (err) {
                console.log('error occured');
                res.json("error occured");
            }
            else {
                db.close;
                res.json("YOUR BOOKING TOWARDS THE PROPERTY  IS SUCCESSFULLY PLACED");
            }
        });
    });
});



app.post('/addBookingApart', function (req, res) {
    //var prodD = req.body.prods;
    var prodArr = [];
    console.log(req.body);
    //prodArr = JSON.parse(req.body);
    prodArr = req.body;
    console.log("prodArr array from addProduct http post");
    console.log(prodArr);
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('bookingapartdet');

        col.insert(prodArr, { w: 1 }, function (err, result) {

            //col.insert({ pCost: 100, hosName: 'Something' }, { w: 1 }, function (err, result) {
            if (err) {
                console.log('error occured');
                res.json("error occured");
            }
            else {
                db.close;
                res.json("YOUR BOOKING TOWARDS THE PROPERTY  IS SUCCESSFULLY PLACED");
            }
        });
    });
});






app.post('/addflatDet', function (req, res) {
    //var prodD = req.body.prods;
    var prodArr = [];
    console.log(req.body);
    //prodArr = JSON.parse(req.body);
    prodArr = req.body;
    console.log("prodArr array from addProduct http post");
    console.log(prodArr);
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('flatdet');

        col.insert(prodArr, { w: 1 }, function (err, result) {

            //col.insert({ pCost: 100, hosName: 'Something' }, { w: 1 }, function (err, result) {
            if (err) {
                console.log('error occured');
                res.json("error occured");
            }
            else {
                db.close;
                res.json("Data Submitted Successfully");
            }
        });
    });
});


app.post('/updateFlat', function (req, res) {
    //var prodD = req.body.prods;
    var prodArr = [];
    console.log(req.body);
    //prodArr = JSON.parse(req.body);
    prodArr = req.body;
    prodString = prodArr[0];
    console.log("prodArr array from updateFlat http post");
    console.log(prodString);
    console.log(prodArr[0].pCode);

    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('flatdet');

        col.update({ pCode: prodArr[0].pCode }, prodString, function (err, result) {
            //col.insert({ pCost: 100, hosName: 'Something' }, { w: 1 }, function (err, result) {
            if (err) {
                console.log(err);
                res.json("error occured");
            }
            else {
                console.log(result);
                db.close;
                res.json("Data Updated Successfully");
            }
        });

    });
});



app.post('/getFlat', function (req, res) {
    var prodArr = [];
    prodArr = req.body;
    console.log("prodArr array from getProduct http post");
    console.log(prodArr);
    console.log(prodArr[0].pCode);

    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('flatdet');
        db.collection('flatdet').findOne({ pCode: prodArr[0].pCode }, { projection: { _id: 0 } }, function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.json('Invalid product code');
            }
            else {
                db.close;
                console.log("result");
                console.log(result);
                var r = [];
                r.push(result);

                console.log(r);
                //                console.log(Array.isArray(r));
                s = JSON.stringify(r);

                console.log(s);
                res.json(s);

            }
        });

    });
});




app.post('/deleteFlat', function (req, res) {
    var prodArr = [];
    prodArr = req.body;
    console.log("prodArr array from deleteApart http post");
    console.log(prodArr);
    console.log(prodArr[0].pCode);

    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('flatdet');
        db.collection('flatdet').deleteOne({ pCode: prodArr[0].pCode }, function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.json('Invalid product code');
            }
            else {
                db.close;
                console.log(result);
                res.json("product deleted successfully");
            }
        });

    });
});


app.post('/getProductCategory', function (req, res) {
    var prodArr = [];
    prodArr = req.body;
    console.log("prodArr array from getProductCategory http post");
    console.log(prodArr[0].pCategory);

    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('flatdet');

        db.collection('flatdet').find({ pCategory: prodArr[0].pCategory }, { projection: { _id: 0 } }).toArray(function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.json('Invalid product code');
            }
            else {
                db.close;
                console.log("result");

                // var r = [];
                // r.push(result);

                //console.log(r);
                //console.log(Array.isArray(r));
                s = JSON.stringify(result);


                res.json(s);

            }
        });

    });
});

app.post('/addapartDet', function (req, res) {
    //var prodD = req.body.prods;
    var prodArr = [];
    console.log(req.body);
    //prodArr = JSON.parse(req.body);
    prodArr = req.body;
    console.log("prodArr array from addProduct http post");
    console.log(prodArr);
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('apartdet');

        col.insert(prodArr, { w: 1 }, function (err, result) {

            //col.insert({ pCost: 100, hosName: 'Something' }, { w: 1 }, function (err, result) {
            if (err) {
                console.log('error occured');
                res.json("error occured");
            }
            else {
                db.close;
                res.json("Data Submitted Successfully");
            }
        });
    });
});


app.post('/updateApart', function (req, res) {
    //var prodD = req.body.prods;
    var prodArr = [];
    console.log(req.body);
    //prodArr = JSON.parse(req.body);
    prodArr = req.body;
    prodString = prodArr[0];
    console.log("prodArr array from updateApart http post");
    console.log(prodString);
    console.log(prodArr[0].pCode);
    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('apartdet');

        col.update({ pCode: prodArr[0].pCode }, prodString, function (err, result) {
            //col.insert({ pCost: 100, hosName: 'Something' }, { w: 1 }, function (err, result) {
            if (err) {
                console.log(err);
                res.json("error occured");
            }
            else {
                db.close;
                res.json("Data Updated Successfully");
            }
        });

    });
});



app.post('/getApart', function (req, res) {
    var prodArr = [];
    prodArr = req.body;
    console.log("prodArr array from getProduct http post");
    console.log(prodArr);
    console.log(prodArr[0].pCode);

    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('apartdet');
        db.collection('apartdet').findOne({ pCode: prodArr[0].pCode }, { projection: { _id: 0 } }, function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.json('Invalid product code');
            }
            else {
                db.close;
                console.log("result");
                console.log(result);
                var r = [];
                r.push(result);

                console.log(r);
                //                console.log(Array.isArray(r));
                s = JSON.stringify(r);

                console.log(s);
                res.json(s);

            }
        });

    });
});




app.post('/deleteApart', function (req, res) {
    var prodArr = [];
    prodArr = req.body;
    console.log("prodArr array from deleteAparment http post");
    console.log(prodArr);
    console.log(prodArr[0].pCode);

    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('apartdet');
        db.collection('apartdet').deleteOne({ pCode: prodArr[0].pCode }, function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.json('Invalid product code');
            }
            else {
                db.close;
                console.log(result);
                res.json("product deleted successfully");
            }
        });

    });
});




app.post('/getapartProductCategory', function (req, res) {
    var prodArr = [];
    prodArr = req.body;
    console.log("prodArr array from getapartProductCategory http post");
    console.log(prodArr);
    console.log(prodArr[0].pCategory);

    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('apartdet');

        db.collection('apartdet').find({ pCategory: prodArr[0].pCategory }, { projection: { _id: 0 } }).toArray(function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.json('Invalid product code');
            }
            else {
                db.close;
                console.log("result");
                console.log(result);

                // var r = [];
                // r.push(result);

                //console.log(r);
                //console.log(Array.isArray(r));
                s = JSON.stringify(result);

                console.log(s);

                res.json(s);

            }
        });

    });
});



app.route('/adminapparels').post(function (req, res) {

    MongoClient.connect(url, function (err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
        //console.log(req.body.userid);
        //console.log(req.body.username);
        //uid=req.body.userid;
        const db = client.db(dbName);
        db.collection('adminlogin').findOne({ email: req.body.email, userPassword: req.body.userPassword }, function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.send("Invalid Login");
            }
            else {
                db.close;
                res.render('adminhome');
            }
        });
    });
});


app.route('/apparels').post(function (req, res) {

    MongoClient.connect(url, function (err, client) {

        assert.equal(null, err);
        console.log("Connected successfully to server");
        //console.log(req.body.userid);
        //console.log(req.body.username);
        //uid=req.body.userid;
        const db = client.db(dbName);
        db.collection('login').findOne({ email: req.body.email, userPassword: req.body.userPassword }, function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.send("Invalid Login");
            }
            else {
                db.close;
                res.render('userhome');
            }
        });
    });
});


app.route('/userhome2').post(function (req, res) {

    res.render('userhome');
});


app.route('/booking').post(function (req, res) {

    res.render('booking', { products: req.body.products });
});

app.route('/bookingApart').post(function (req, res) {

    res.render('bookingApart', { products: req.body.products });
});

app.route('/payment').post(function (req, res) {
    console.log(req.body.products);
    res.render('payment', { products: req.body.products });
});



app.post('/getFlatBooking', function (req, res) {

    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('bookingflatdet');
        db.collection('bookingflatdet').find({}, { projection: { _id: 0 } }).toArray(function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.json('Invalid product code');
            }
            else {
                db.close;
                console.log("result");
                console.log(result);

                // var r = [];
                // r.push(result);

                //console.log(r);
                //console.log(Array.isArray(r));
                s = JSON.stringify(result);

                console.log(s);

                res.json(s);

            }
        });

    });
});


app.post('/getApartBooking', function (req, res) {

    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var col = db.collection('bookingapartdet');
        db.collection('bookingapartdet').find({}, { projection: { _id: 0 } }).toArray(function (err, result) {
            if (err) throw err;

            if (!result) {
                db.close;
                res.json('Invalid product code');
            }
            else {
                db.close;
                console.log("result");
                console.log(result);

                // var r = [];
                // r.push(result);

                //console.log(r);
                //console.log(Array.isArray(r));
                s = JSON.stringify(result);

                console.log(s);

                res.json(s);

            }
        });

    });
});



app.route('/homepage').post(function (req, res) {
    res.render('apparelsCat');
});





var exp = app.listen(port, function () {
    console.log('your project is ready to run');
});

//exp.close;
