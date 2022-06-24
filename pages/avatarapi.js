import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const AvatarApiView = () => {
  const [avatars, setAvatars] = useState(null);

  const getAvatar = async () => {
    const response = await fetch("/api/avatar");
    if (response.ok) {
      const data = await response.json();
      setAvatars(data);
    } else {
      console.log("Error:", response.statusText);
    }
  };

  return (
    <div className="mainSection">
      <Head>
        <title>List Avatar Using API</title>
        <meta name="description" content="List Avatar" />
      </Head>
      <div style={{
        padding: "80px 0 80px 0"
      }}>
        <button onClick={getAvatar}>Fetch Avatar</button>
        <h1>List Avatar:</h1>
        <ul>
          {avatars &&
            avatars.map((avatar) => (
              <li key={avatar._id}>
                <Link
                  href={{
                    pathname: `/avatarapi/${avatar._id}`,
                  }}
                  as={`/avatarapi/${avatar._id}`}
                >
                  <a style={{ color: "blue" }}>{avatar.name}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AvatarApiView;
