import CustomParticles from "./Layout/CustomParticles";
import Typed from "react-typed";

function Home() {
  return (
    <div
      id="Home"
      className=" bg-dark d-flex align-items-center justify-content-center"
      style={{ minHeight: "375px" }}
    >
      <CustomParticles />

      <Typed
        strings={[
          ` <h2 > Hi, it's me Richard      <h2> 
         
              <h5>I am a fullstack ingeneer !</h5>
            `,
        ]}
        typeSpeed={30}
        showCursor={false}
        className=" fst-italic fs-1  text-start text-light"
      />
    </div>
  );
}
export default Home;
