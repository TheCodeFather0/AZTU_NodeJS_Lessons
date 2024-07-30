import multer, { diskStorage } from "multer";
import path from 'path'

const fsPath = './images'
const storage = diskStorage({
    destination:(req,file,cb) => {
        cb(null,fsPath)
    },
    filename:(req,file,cb) => {
        const {ad,soyad} = req.body
        const extName = path.extname(file.originalname)
        const fileName = `${ad}-${soyad}${extName}`
        req.body.imagePath = fsPath + '/' + fileName;
        cb(null, fileName)
    }
});


const upload = multer({ storage });
export default upload;
