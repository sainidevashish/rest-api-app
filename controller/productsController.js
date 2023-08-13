const product = require("../model");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const customErrorHandler = require('../services/CustomErrorHandler ')
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, fil, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;

    cb(null, uniqueName);
  },
});

const malterHandler = multer({storage, limits:{fileSize: 1000000*5}}).single('image');

const store = async (req, res, next) => {
  // multipart data form
  multerHandler(req,res,(err)={
    if(err){
         return next (customErrorHandler.serverError(err.message));
    }
  })
};

module.exports = store;
