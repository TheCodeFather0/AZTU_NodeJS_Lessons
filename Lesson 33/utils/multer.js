import multer, { diskStorage } from "multer";
import path from 'path'

const storage = diskStorage({
    destination:(req,file,cb) => cb(null,'./images'),
    filename:(req,file,cb) => {
        const {ad,soyad} = req.body
        console.log(file);
        const extName = path.extname(file.originalname)
        const fileName = `${ad}-${soyad}${extName}`
        req.body.imagePath = './images/' + fileName;
        cb(null, fileName)
    }
});


const upload = multer({ storage });
export default upload;
