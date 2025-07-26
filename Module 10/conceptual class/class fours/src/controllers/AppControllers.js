const jwtToken = require('jsonwebtoken');
const constants = require('../utility/constants');

const home = (req, res) => {
  const tokenString = req.headers.authorization;
  const token = tokenString.split(' ')[1];
  console.log('token:::', token);

  jwtToken.verify(token, constants.secretKey, (error, decodedData) => {
    if (error) {
      res.status(401).end('Invalid token');
    } else {
      res.status(200).json(decodedData);
    }
  });
};

const signIn = (req, res) => {
  const userData = req.body.data;

  if (
    userData.email === 'tajnur007@gmail.com' &&
    userData.password === '123456'
  ) {
    const payload = {
      name: 'Tajnur',
      email: 'tajnur007@gmail.com',
      role: 'admin'
    };

    const encriptedToken = jwtToken.sign(payload, constants.secretKey);

    res.status(201).json({
      userToken: encriptedToken
    });
  } else {
    res.status(401).end('Unauthorized user');
  }
}

module.exports = {
  home,
  signIn
};