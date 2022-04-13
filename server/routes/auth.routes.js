const multer = require('multer');
const {registerCandidate,login, get} =require('../controllers/auth.controller')
const router = require('express').Router()
const path = require('path')
const Images = require('../models/images.models')

router.post(
    "/register",
    async (req, res, next) => {
        try {
            const user = await registerCandidate(req.body);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
);
  
router.post(
"/login",
    async (req, res, next) => {
        try {
        const { email, password } = req.body;
        const data = await login(email, password);
        res.status(200).json(data);
        } catch (error) {
        next(error);
        }
    }
);


const imageStorage = multer.diskStorage({
     
    destination: 'images', 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
            + path.extname(file.originalname))
        new Images({
            imageTitle : file.fieldname + '_' + Date.now() 
            + path.extname(file.originalname),
        }).save();
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 100000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
            // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})

// For Single image upload
router.post('/uploadImage', imageUpload.single('images'), (req, res, next) => {
  try {
    console.log('file->', req.file)
    // res.send(req.file)
  } catch (error) {
    next(error)
    
  }
})


router.get(
  "/getimages",
  async (req, res, next) => {
    try {
      const images = await get();
      console.log(images)
      res.status(200).json(images);
    } catch (error) {
      next(error);
    }
  }
);

module.exports= router