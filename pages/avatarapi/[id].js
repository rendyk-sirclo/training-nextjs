import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";

const AvatarApiDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [avatar, setAvatar] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setLoading(true);
      async function getAvatar() {
        const response = await fetch(`/api/avatar/${id}`);
        if (response.ok) {
          const data = await response.json();
          setAvatar(data);
        } else {
          console.log("Error:", response.statusText);
        }
      }
      getAvatar();
      setLoading(false);
    }
  }, [router.isReady]);

  if (isLoading)
    return (
      <div className="mainSection">
        <p style={{ textAlign: "center" }}>Loading...</p>
      </div>
    );
  if (!avatar)
    return (
      <div className="mainSection">
        <p style={{ textAlign: "center" }}>Data not found</p>
      </div>
    );

  return (
    <div className="mainSection">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "0 auto 0 auto",
          padding: "80px 0 80px 0",
          width: "50%",
        }}
      >
        <Head>
          <title>{avatar.name}</title>
          <meta name="description" content={`Data avatar ${avatar.name}`} />
        </Head>

        <Image
          src={avatar.photoUrl}
          alt={avatar.name}
          width={333}
          height={250}
          placeholder="blur"
          blurDataURL={avatar.photoUrl}
        />
        <h1>{avatar.name}</h1>
        <span className="position">{avatar.position}</span>
        <div className="info">
          <span>Gender: {avatar.gender}</span>
          <span>Profession: {avatar.profession}</span>
        </div>

        <style jsx>{`
          h1 {
            margin-bottom: 12px;
          }

          span.position {
            text-align: center;
            max-width: 46ch;
            white-space: break-spaces;
          }

          div.info {
            font-size: 14px;
            margin-top: 18px;
            opacity: 75%;
          }

          div.info > span {
            display: block;
          }
        `}</style>
      </div>
    </div>
  );
};

export default AvatarApiDetail;
