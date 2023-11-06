// Authentication and Authorization Middleware
const auth = function(req, res, next) {
    if (req.session)
      return next();
    else
      return res.status(301).redirect("/codenet");
};

export default auth;