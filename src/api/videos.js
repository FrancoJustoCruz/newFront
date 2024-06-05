import axios from './axios';

export const getVideosRequest = async () => axios.get('/videos');

export const postVideo = async (data) => axios.post('/videos', data);

export const updateVideoRequest = async (id, data) => axios.put(`/videos/${id}`, data);

export const deleteVideoRequest = async (id) => axios.delete(`/videos/${id}`);

export const getVideoRequest = async (id) => axios.get(`/videos/${id}`);