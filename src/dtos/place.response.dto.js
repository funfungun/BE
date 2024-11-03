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
        phone_number: place.phone_number,
        moreview_link: place.moreview_link,
        homepage_link: place.homepage_link,
        latitude: place.latitude,
        longitude: place.longitude,
        open_date: place.open_date,
        open_hour: place.open_hour,
        breaking_date: place.breaking_date,
        breaking_hour: place.breaking_hour,
    }));
};
