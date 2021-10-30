import { Player } from "@lottiefiles/react-lottie-player";

const Feature1 = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
        padding: "0 5rem",
        backgroundColor: "#f9fafc",
        // maxWidth: 1200,
        // margin: "auto",
      }}
    >
      <div
        style={{
          position: "relative",
          top: "35%",
          height: "fit-content",
        }}
      >
        <h1
          style={{
            fontSize: 38,
            fontFamily: "inherit",
            marginRight: "2rem",
            marginBottom: 0,
          }}
        >
          Seemless Integration with Google Classroom
        </h1>
        <p
          style={{
            fontSize: 20,
            fontFamily: "inherit",
            marginRight: "2rem",
          }}
        >
          We Make In Easier and Hassle Free for you to integrate the courses you
          registered for on Google Classroom
        </p>
      </div>
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/private_files/lf30_AGoC3n.json"
      ></Player>
    </div>
  );
};

export default Feature1;
