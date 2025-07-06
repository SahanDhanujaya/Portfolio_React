import ShinyText from "../../animations/texts/shinyText/ShinyText";
import "./name.css";

function Name() {
  return (
    <div className="text-9xl font-bold font-londrina-outline text-center text-white min-w-full min-h-screen flex items-center justify-center absolute top-0 left-0 name">
      {/* <h1 className='text-[15vw] font-black text-transparent [text-stroke:2px_white]'>DHANUX</h1> */}

      <ShinyText
        text="DHANUX"
        disabled={false}
        speed={1}
        className="custom-class"
      />
    </div>
  );
}

export default Name;
