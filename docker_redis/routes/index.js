import express from 'express';

import property from './property/property.js';

let router = express.Router();

router.use('/property', property);

export default router;