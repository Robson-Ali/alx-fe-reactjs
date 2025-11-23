import axios from "axios";

/**
 * Advanced GitHub User Search
 * Uses GitHub Search API:
 *  https://api.github.com/search/users?q=
 */

async function searchUsers(username, location, minRepos, page = 1) {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(
      query.trim()
    )}&page=${page}&per_page=10`
  );

  const users = response.data.items;

  // Fetch additional details for each user (location, repos, etc.)
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const detail = await axios.get(`https://api.github.com/users/${user.login}`);
      return { ...user, ...detail.data };
    })
  );

  return {
    items: detailedUsers,
    total_count: response.data.total_count,
  };
}

export default searchUsers;
