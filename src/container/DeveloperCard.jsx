import React, { useEffect, useState } from "react";

const DeveloperCard = ({ developer }) => {
  const [githubInfo, setUser] = useState({});
  useEffect(() => {
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
        // Handle rate limit exceeded error
        console.error("API rate limit exceeded");
        // You can also check the headers for rate limit information
        console.log(api_call.headers.get("X-RateLimit-Limit"));
        console.log(api_call.headers.get("X-RateLimit-Remaining"));
      }

      const data = await api_call.json();
      return { data };
    };

    fetchUser(developer.github_username).then((res) => setUser(res.data));
  }, [developer.github_username]);

  console.log({ developer, githubInfo });
  return (
    <div className="our-team">
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}></li>
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
      {/* <div className="social">
        <a
          href={`https://www.facebook.com/${developer.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="icon icon-facebook">
            <use xlinkHref="img/sprite.svg#icon-facebook2"></use>
          </svg>
        </a>
        <a
          href={`https://www.twitter.com/${developer.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="icon icon-twitter">
            <use xlinkHref="img/sprite.svg#icon-twitter"></use>
          </svg>
        </a>
        <a
          href={githubInfo.data.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="icon icon-facebook">
            <use xlinkHref="img/sprite.svg#icon-github"></use>
          </svg>
        </a>
      </div> */}
    </div>
  );
};

export default DeveloperCard;
