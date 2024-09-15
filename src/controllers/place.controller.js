// place.controller.js

import { status } from '../../config/response.status.js';
import { response } from '../../config/response.js';
import { getPlaceData } from '../services/place.service.js';

export const placeSelect = async (req, res, next) => {
    try {
        const type = req.params.type || req.query.type; // path variable 또는 query string 처리
        const data = await getPlaceData(type); // 해당 타입의 데이터를 가져옴
        res.send(response(status.SUCCESS, data));
    } catch (err) {
        next(err); // 에러 처리 미들웨어로 전달
    }
};
