// jo bhi file aay gi vo isko upload krne me help kre ga


const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

// initialize the upload
const upload = multer({
    storage:storage,
}).fields([
    {name: "frontImage", maxCount:1},
    {name: "audioFile", maxCount:1},
]);

module.exports = upload;