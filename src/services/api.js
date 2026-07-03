import axiosInstance from "../utils/axios";

// Mobile Banner APIs
export const getMobileBanners = async () => {
  const { data } = await axiosInstance.get("/mobile/all-mobile-banners");
  return data.homeBanner;
};

// Home Banner APIs
export const getHomeBanners = async () => {
  const { data } = await axiosInstance.get("/home-banner/all-home-banners");
  return data.homeBanner;
};

// Photo Album APIs
export const getPhotoAlbums = async () => {
  const { data } = await axiosInstance.get("/photoAlbum/all-photo-album");
  return data.photoAlbum;
};

// Team APIs
export const getTeams = async () => {
  const { data } = await axiosInstance.get("/team/all-teams");
  return data.teams;
};

// Review APIs
export const getReviews = async () => {
  const { data } = await axiosInstance.get("/review/all-reviews");
  return data.reviews;
};

// Portfolio APIs
export const getPortfolios = async () => {
  const { data } = await axiosInstance.get("/portfolio/all-portfolios");
  return data.portfolios;
};

// Export all APIs as a single object
const API = {
  getMobileBanners,
  getHomeBanners,
  getPhotoAlbums,
  getTeams,
  getReviews,
  getPortfolios,
};

export default API;
