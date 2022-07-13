import { useEffect, useState } from "react";

function getUserApi(props) {
  return fetch("https://api.github.com/users/facebook")
    .then((response) => {
      return response.json();
    });
}

export function GitHubUserApi(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserApi()
      .then((data) => { setData(data); })
      .catch((error) => { setError(error); });
  }, []);

  if (error !== null) {
    return <div>{error.message}</div>;
  }

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <img src={data.avatar_url}  alt="${props.username}avatar" />
        <p>{data.name}</p>
        <p>{data.location}</p>
        <p>{data.bio}</p>
    </div>
  );
}