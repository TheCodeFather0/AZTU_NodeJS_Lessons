import { categoryModel, userModel } from "../model/models.js";

export const profileService = async(req, res) => {
  const {_id} = req.user
  const {token} = req.params
  const user = await userModel.findById(_id)
  const categories = await categoryModel.find()
  console.log(req.params);
  
  res.render('profile',{user,categories,token})
};
