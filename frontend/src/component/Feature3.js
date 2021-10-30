import { Player } from "@lottiefiles/react-lottie-player";

const Feature1 = () => {
  return (
    <div
      style={{
      
        padding: "5rem",
        backgroundColor: "#f9fafc",
      }}
    >
      <div style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          maxWidth: 1200,
          margin: "auto", 
      }}>
      <div
        style={{
          position: "relative",
          top: "45%",
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
          AI Powered Notes Search
        </h1>
        <p
          style={{
            fontSize: 20,
            fontFamily: "inherit",
            marginRight: "2rem",
          }}
        >
          &#8226; Our Platform features an AI based Search using Algolia
          <br />
          &#8226; The AI based search checks for all notes across the platform
          which are closely related to the search query.
        </p>
      </div>
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_ftlw1wbu.json"
      ></Player>
      </div>
    </div>
  );
};

export default Feature1;
