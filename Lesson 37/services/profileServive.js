export const profileService = (req, res) => {
  res.render('profile',{user:req.user})
};
