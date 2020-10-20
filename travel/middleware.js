const jwt = require("jsonwebtoken");
const secret = "mysecretsshhh";

const withAuth = function (req, res, next) {
  const access = req.cookies.token; // getting the token from the browser

  if (!access) {
    res.status(401).send("No token provided");
  } else {
    jwt.verify(access, secret, function (err) {
      // varifying the jwt token
      if (err) {
        res.status(401).send("Invalid token");
      } else {
        next(); // passing it down to the server  // check token will excecute
      }
    });
  }
};
module.exports = withAuth;
