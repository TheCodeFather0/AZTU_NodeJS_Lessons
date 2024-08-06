import multer from "multer";
import path from 'path'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/photos')
      },
      filename: function (req, file, cb) {
        const {username} = req.body
        const ext = path.extname(file.originalname)
        cb(null, username + ext)
      }
})

export const customizedMulter = multer({ storage })
