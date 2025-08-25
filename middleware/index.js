const express = require('express');
const middleware = require('./middleware');
const app = express();
 const reqfilter = require('./middleware');


app.use(reqfilter);

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});

app.get('/user', (req, res) => {
    res.send('Welcome to the user page');
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

// only on single route 

// const express = require('express');
// const app = express();

// const reqfilter = (req, res, next) => {
//     if (!req.query.age) {
//         res.send("Please enter the age");
//     } else if (req.query.age < 18) {
//         res.send("You cannot access this page");
//     } else {
//         next();
//     }
// };

// app.get('/', (req, res) => {
//     res.send('Welcome to the home page');
// });

// // Apply middleware only to /user
// app.get('/user', reqfilter, (req, res) => {
//     res.send('Welcome to the user page');
// });

// app.listen(5000, () => {
//     console.log("Server running on http://localhost:5000");
// });
