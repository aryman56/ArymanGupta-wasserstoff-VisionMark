const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({msg: "Unauthorized. Please add valid token"});
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token,'8e4398c1694a79ab9b2dce3373041a4d71fbeb8b6b9c3106f8c9f1728b1f869d')
    const { id, name } = decoded
    req.user = { id, name }
    next()
  } catch (error) {
    return res.status(401).json({msg: "Unauthorized. Please add valid token"});
  }
}

module.exports = authenticationMiddleware