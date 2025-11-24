import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchAdvancedUsers = async (username, location, minRepos) => {
  const query = [
    username ? `${username} in:login` : "",
    location ? `location:${location}` : "",
    minRepos ? `repos:>=${minRepos}` : "",
  ].join(" ");

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
