import path from 'path'
import {searchDir} from '../routes/searchDir.js'

// Authentication and Authorization Middleware
const auth = function(req, res, next) {
    if (req.session)
      return next();
    else {
      const __dirnameAll = searchDir();
      const filePath = path.join(__dirnameAll, 'static', 'templates', 'index.html');
      res.sendFile(filePath);
    }
};

export default auth;