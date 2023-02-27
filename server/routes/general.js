import express from 'express'
import getUser from '/Users/ratthathamsiridol/Documents/Fullstack Dev/laabwanon/laabwanon_dashboard/server/controllers/general.js';

const router = express.Router();

router.get("/user/:id", getUser)

export default router;