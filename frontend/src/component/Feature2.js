import { Player } from "@lottiefiles/react-lottie-player";

const Feature1 = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
       padding: "0 5rem",
        maxWidth: 1500,
        margin: "auto", 
      }}
    >
      <Player
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_ddz8yrig.json"
      ></Player>
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
            marginLeft: "2rem",
            marginBottom: 0,
          }}
        >
          Feature Rich Notes Taker
        </h1>
        <p
          style={{
            fontSize: 20,
            fontFamily: "inherit",
            marginLeft: "2rem",
          }}
        >
          &#8226; We provide you with a feature rich text editor with lecture
          related web suggestions which lets you take notes on the go
          <br />
          &#8226; Get all the classes you’ve registered for just by signing into
          our platform using Google.
        </p>
      </div>
    </div>
  );
};

export default Feature1;
