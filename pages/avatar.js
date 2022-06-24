import Link from "next/link";
import avatars from "@data/avatars.json";
import Head from "next/head";

const Avatar = () => {
  return (
    <div className="mainSection">
      <Head>
        <title>List Avatar</title>
        <meta name="description" content="List Avatar" />
      </Head>
      <div style={{
        padding: "80px 0 80px 0"
      }}>
        <h1 style={{marginTop: 0}}>List Avatar:</h1>
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
      </div>
    </div>
  );
};

export default Avatar;
