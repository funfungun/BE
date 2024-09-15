//place.service.js

import { BaseError } from '../../config/error.js';
import { status } from '../../config/response.status.js';
import { getPlaceByType } from '../models/place.dao.js';
import { placeResponseDTO } from '../dtos/place.response.dto.js';

export const getPlaceData = async (type) => {
    const placeData = await getPlaceByType(type);

    if (placeData === -1) {
        throw new BaseError(status.BAD_REQUEST);
    }

    return placeResponseDTO(placeData);
};
