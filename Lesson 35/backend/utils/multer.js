import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);

    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const { username } = req.body;
    const ext = path.extname(file.originalname);
    const fileName = username + ext;
    cb(null, fileName);
  },
})

export const upload = multer({storage})