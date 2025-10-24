function cors(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (request.method === 'OPTIONS') {
    return response.sendStatus(200);
  }

  return next();
}

module.exports = cors;
