import Link from "next/link";
import avatars from "@data/avatars.json";
import Head from "next/head";

const Avatar = () => {
  return (
    <>
      <Head>
        <title>List Avatar</title>
        <meta name="description" content="List Avatar" />
      </Head>
      <h1>List Avatar:</h1>
      <ul>
        {avatars.map((avatar) => (
          <li key={avatar._id}>
            <Link
              href={{
                pathname: `/avatar/${avatar._id}`,
                query: {
                  name: avatar.name,
                  photoUrl: avatar.photoUrl,
                  position: avatar.position,
                  gender: avatar.gender,
                  profession: avatar.profession,
                },
              }}
              as={`/avatar/${avatar._id}`}
            >
              <a style={{ color: "blue" }}>{avatar.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Avatar;
