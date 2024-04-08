import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const user = useLoaderData();

  /*
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/OnkarJagatp2001")
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  */

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github userid : {user.login}
      <img
        src={user.avatar_url}
        alt="git_picture"
        width={300}
        className="rounded-br-lg ..."
      ></img>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/OnkarJagatp2001");
  return response.json();
};
