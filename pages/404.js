import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Custom404 = () => {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (!countdown) return;
    const timeout = setTimeout(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [countdown]);

  useEffect(() => {
    if (!countdown) {
      router.push("/")
    }
  }, [countdown])

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <span style={{ fontSize: "48px", fontWeight: 700 }}>Custom 404</span>
      <span style={{ fontSize: "18px", opacity: "60%" }}>Redirect to home after {countdown}s</span>
      <style jsx>{`
        span {
          display: block;
        }
      `}</style>
    </div>
  );
}

export default Custom404;