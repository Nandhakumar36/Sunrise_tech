const jsonwebtoken = require('jsonwebtoken');

const { JWT_KEY } = process.env;

function issueToken(data) {
    return jsonwebtoken.sign(data, "2343sunrise73245Project2347");
}

module.exports.issueToken = issueToken;
