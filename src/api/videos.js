import axios from './axios';

export const getVideosRequest = async () => axios.get('/videos');

export const postVideo = async (data) => axios.post('/videos', data);

export const updateVideoRequest = async (id, data) => axios.put(`/videos/${id}`, data);

export const deleteVideoRequest = async (id) => axios.delete(`/videos/${id}`);

export const getVideoRequest = async (id) => axios.get(`/videos/${id}`);

export const getAllUserVideosRequest = async () => {
    try {
        const response = await axios.get('/api/videos/user');
        return response;
    } catch (error) {
        console.error('Error fetching user videos', error);
        throw error;
    }
};