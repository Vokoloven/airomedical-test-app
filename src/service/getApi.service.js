import { axiosInstance } from './axiosInstance';

export const getApiData = async (params) => {
    try {
        const response = await axiosInstance.get('beers?', { params });

        const { data } = response;

        return data;
    } catch (error) {
        console.log(error);
    }
};
