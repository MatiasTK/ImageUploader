import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

const storage = multer.diskStorage({
  destination: `${process.cwd()}/public/uploads`,
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const uploadImage = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 25 } /* 25Mb */,
}).single('image');

router.post('/api/uploads', (req, res) => {
  uploadImage(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.send(err);
    }

    console.log(req.file);
    return res.json({ id: req.file?.filename });
  });
});

export default router;
