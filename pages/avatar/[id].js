import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

const AvatarDetail = () => {
  const param = useRouter().query;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "16px auto 16px auto",
        width: "50%",
      }}
    >
      <Head>
        <title>{param.name}</title>
        <meta name="description" content={`Data avatar ${param.name}`} />
      </Head>
      <Image
        src={param.photoUrl}
        alt={param.name}
        width={333}
        height={250}
        placeholder="blur"
        blurDataURL={param.photoUrl}
      />
      <h1>{param.name}</h1>
      <span className="position">{param.position}</span>
      <div className="info">
        <span>Gender: {param.gender}</span>
        <span>Profession: {param.profession}</span>
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
  );
}

export default AvatarDetail;