const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res
      .status(403)
      .json({ error: "Akses ditolak. Anda tidak memiliki izin." });
  }
  next();
};

module.exports = authorize;
