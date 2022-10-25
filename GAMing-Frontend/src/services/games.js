import api from "./apiConfig";

export const getMessages = async () => {
  try {
    const response = await api.get("allMessages");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUsers = async () => {
  try {
    const response = await api.get("UserProfile");
    return response.data;
  } catch (error) {
    throw error;
  }
};