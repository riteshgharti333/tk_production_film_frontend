import { useQuery } from "@tanstack/react-query";
import API from "./api";

// Centralized query options
const queryOptions = {
  retry: false,
  refetchOnWindowFocus: false,
  // staleTime: 5 * 60 * 1000, // 5 minutes
  // gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
};

// SINGLE QUERY HOOKS



// Mobile Banner Hooks
export const useMobileBanners = (options = {}) => {
  return useQuery({
    queryKey: ["mobileBanners"],
    queryFn: API.getMobileBanners,
    ...queryOptions,
    ...options,
  });p
};

// Home Banner Hooks
export const useHomeBanners = (options = {}) => {
  return useQuery({
    queryKey: ["homeBanners"],
    queryFn: API.getHomeBanners,
    ...queryOptions,
    ...options,
  });
};

// Photo Album Hooks
export const usePhotoAlbums = (options = {}) => {
  return useQuery({
    queryKey: ["photoAlbums"],
    queryFn: API.getPhotoAlbums,
    ...queryOptions,
    ...options,
  });
};

// Team Hooks
export const useTeams = (options = {}) => {
  return useQuery({
    queryKey: ["teams"],
    queryFn: API.getTeams,
    ...queryOptions,
    ...options,
  });
};

// Review Hooks
export const useReviews = (options = {}) => {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: API.getReviews,
    ...queryOptions,
    ...options,
  });
};

// Portfolio Hooks
export const usePortfolios = (options = {}) => {
  return useQuery({
    queryKey: ["portfolios"],
    queryFn: API.getPortfolios,
    ...queryOptions,
    ...options,
  });
};