// place.route.js
import { placeSelect } from '../controllers/place.controller.js';

import express from 'express';

export const placeRouter = express.Router();

placeRouter.get('/:type', placeSelect);
