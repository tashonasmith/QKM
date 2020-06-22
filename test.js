bcrypt = require('bcrypt');

var pw = bcrypt.hash("blah123", 10, (err, hash) => {
    console.log(hash);
});