import { useState } from "react";
import "./styles.css";

// jsx - javascript extended  - className - class
// useState - hook react provides
export default function App() {
  return (
    <div className="App">
      {/* <button onClick={() => setLike(like + 1)}>👍</button> */}
      {/* <p>{like}</p>  */}

      <LikeCounter name={"Samsung"} />
      <LikeCounter name={"Apple"} />
      <LikeCounter name={"Moto"} />
      <LikeCounter name={"Mi"} />
    </div>
  );
}

// {} - interpolation - subsition
// props - poperties

function LikeCounter(props) {
  const [like, setLike] = useState(0);
  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
    </div>
  );
}

// function isMagor(age) {
//   // let age = 20;
//   if (age >= 18) {
//     console.log("Major");
//   } else {
//     console.log("Minor");
//   }
// }

// isMagor(20)
// isMagor(10)
// isMagor(15)
