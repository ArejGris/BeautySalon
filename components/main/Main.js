import "./main.css";
import Image from "next/image";
export default function Main() {
  return (
    <div className="main">
      <div className="img">
      <Image
        src="/philosophy-pic-800x691.png"
        width={1000}
        height={1000}
        className="img"
      />
        </div>
      <div className="the-content">
        <h1>Philosophy</h1>
        <h6>NATURAL RESULTS WITHOUT OBVIOUS SIGNS OF SURGERY</h6>
        <p>
          We are passionate about giving our patients the most natural looking
          results with the shortest possible recovery times. Our focus for every
          patient is attention to detail,technical excellence, superior medical
          knowledge, an artistic eye, and compassionate care. As someone who was
          trained during the modern era and as a certified board member, my goal
          is to use the most advanced techniques available to restore and
          rejuvenate your body and face. We will tailor our techniques to your
          specific requirements. We will make you our priority, and your results
          matter to us.
        </p>
      </div>
    </div>
  );
}
