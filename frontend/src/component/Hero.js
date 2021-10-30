import { Player } from "@lottiefiles/react-lottie-player";

const Hero = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          padding: "0 5rem",
        }}
      >
        <Player
          autoplay
          loop
          src="https://assets3.lottiefiles.com/private_files/lf30_JenNba.json"
        />
        <div
          style={{
            position: "relative",
            top: "30%",
            height: "fit-content",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: 100,
              fontFamily: "inherit",
              marginBottom: 0,
              top: "60%",
            }}
          >
            ClassBuddy
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: "inherit",
              marginRight: "2rem",
              marginLeft: "2rem",
            }}
          >
            “Online learning is rapidly becoming one of the most cost-effective
            ways to educate the world’s rapidly expanding workforce.” - Jack
            Messman
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
