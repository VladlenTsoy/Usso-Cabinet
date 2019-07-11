export const FETCH_CONSTRUCTIONS_BY_REGION_ID = "FETCH_CONSTRUCTIONS_BY_REGION_ID";

export const fetchConstructionsByRegionId = (id): void =>
    (dispatch, getState): void =>
        getState().api.instance.get(`/constructions/region/${id}`)
            .then((response): void => dispatch({
                type: FETCH_CONSTRUCTIONS_BY_REGION_ID,
                payload: response.data,
                regionId: id
            }))
            .catch((err): void => err);
