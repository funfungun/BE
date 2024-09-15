//place.response.dto.js

export const placeResponseDTO = (data) => {
    return data.map((place) => ({
        name: place.name,
        place_type: place.place_type,
        address1: place.address1,
        address2: place.address2,
        rating: place.rating,
        numberofscore: place.numberofscore,
        review: place.review,
        hour: place.hour,
        phone_number: place.phone_number,
        moreview_link: place.moreview_link,
        homepage_link: place.homepage_link,
    }));
};
