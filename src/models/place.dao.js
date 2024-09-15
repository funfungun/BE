//place.dao.js

import { pool } from '../../config/db.config.js';
import { BaseError } from '../../config/error.js';
import { status } from '../../config/response.status.js';
import { getPlaceListByType } from './place.sql.js';

export const getPlaceByType = async (type) => {
    try {
        const conn = await pool.getConnection();
        const query = getPlaceListByType(type); // 테이블명을 동적으로 설정
        const [place] = await conn.query(query);

        conn.release();

        if (place.length === 0) {
            return -1;
        }

        return place;
    } catch (err) {
        throw new BaseError(status.BAD_REQUEST);
    }
};
