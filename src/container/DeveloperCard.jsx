import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const DeveloperCard = ({ developer }) => {
  const [githubInfo, setGithubInfo] = useState({});
  useEffect(() => {
    if (!developer.github_username) return;
    const fetchUser = async (user) => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const headers = {
        Authorization: `Bearer ${token}`,
        "x-github-api-version": "2022-11-28",
      };
      const api_call = await fetch(`https://api.github.com/users/${user}`, {
        headers,
      });

      if (api_call.status === 403) {
        console.error("API rate limit exceeded");
        console.log(api_call.headers.get("X-RateLimit-Limit"));
        console.log(api_call.headers.get("X-RateLimit-Remaining"));
      }

      const data = await api_call.json();
      return { data };
    };

    fetchUser(developer.github_username)
      .then((res) => setGithubInfo(res.data))
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, [developer.github_username]);

  return (
    <div className="our-team">
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={`circle-${Date.now()}-${index}`}></li>
        ))}
      </ul>
      <div className="picture">
        <img
          className="img-fluid"
          src={githubInfo.avatar_url}
          alt="User Avatar"
        />
      </div>
      <div className="team-content">
        <h3 className="name">{developer.name}</h3>
        <h4 className="title">{developer.title}</h4>
      </div>
      <div className="github-container">
        <div className="username">
          Username: <span>{githubInfo.login}</span>
        </div>
        <div className="repo">
          Repos: <span>{githubInfo.public_repos}</span>
        </div>
      </div>
    </div>
  );
};

DeveloperCard.propTypes = {
  developer: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    title: PropTypes.string,
    github_username: PropTypes.string,
  }).isRequired,
};

export default DeveloperCard;
