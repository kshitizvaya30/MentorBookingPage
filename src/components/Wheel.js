import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import MainPage from "./MainPage";
import { ArrowDown } from "react-bootstrap-icons";
import { data } from "./data";
import Button from "react-bootstrap/esm/Button";

function Wheel() {
  const wheelRef = useRef();
  const [radius, setRadius] = useState(320);
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState([]);
  const [tempTheta, setTempTheta] = useState(0.0);
  const [centerOfWheel, setCenterOfWheel] = useState({
    x: 0.0,
    y: 0.0,
  });
  const [reload, setReload] = useState(false);

  useEffect(() => {
    console.log(data);
    setReload(true);
    setCenterOfWheel((prevState) => ({
      ...prevState,
      x: parseFloat(wheelRef.current.style.width) / 2,
      y: parseFloat(wheelRef.current.style.height) / 2,
    }));

    setCard([]);
    for (let i = 0; i < 8; i++) {
      setCard((prevCards) => [
        ...prevCards,
        <Card
          pic={data[i].imageUrl}
          theta={(Math.PI / 4) * i}
          radius={radius}
          center={centerOfWheel}
          key={`card_${i}`}
        />,
      ]);
    }
  }, [reload]);

  const [currPerson, setCurrPerson] = useState(data[index]);

  const handleClick = (direction) => {
    let curr = index;
    let newTheta = tempTheta;
    if (direction === "right") {
      curr = (index + 1) % 8;
      newTheta -= 45;
    } else {
      if (index <= 0) {
        curr = ((index - 1) % 8) + 8;
      } else {
        curr = (index - 1) % 8;
      }
      newTheta += 45;
    }
    setCurrPerson(data[curr]);
    setIndex(curr);
    setTempTheta(newTheta);
    wheelRef.current.style.transitionDuration = `1s`;
    wheelRef.current.style.transitionDelay = `0.0s`;
    wheelRef.current.style.transform = `translate(-50%, -50%) rotate(${newTheta}deg)`;

    //maintain image Equillibrium
    for (let i = 0; i < wheelRef.current.children.length; i++) {
      wheelRef.current.children[i].style.transitionDuration = `1s`;
      wheelRef.current.children[i].style.transitionDelay = `0.0s`;
      wheelRef.current.children[
        i
      ].style.transform = `translate(-50%, -50%) rotate(${-1 * newTheta}deg)`;
    }
  };

  return (
    <div>
      {/* Left Arrow Button for Wheel */}
      <div style={{ ...styles.button, ...styles.left }}>
        <ArrowDown
          style={styles.arrowDown}
          onClick={() => handleClick("left")}
        />
      </div>

      {/* Half Circle Background with Wheel */}
      <div style={styles.halfCircle}>
        <div ref={wheelRef} style={styles.wheel}>
          {card.map((card, index) => card)}
        </div>
      </div>

      {/* Center Image Section */}
      <div style={styles.card}>
        <img style={styles.image} src={currPerson.imageUrl} alt="current" />
        <Button style={styles.button2}>{currPerson.name}</Button>
      </div>

      {/* Right Arrow Button for Wheel */}
      <div style={{ ...styles.button, ...styles.right }}>
        <ArrowDown
          style={styles.arrowDown}
          onClick={() => handleClick("right")}
        />
      </div>
      <MainPage currPerson={currPerson} />
    </div>
  );
}

const styles = {
  wheel: {
    margin: "0",
    padding: "0",
    position: "absolute",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    top: "95%",
    right: "45%",
    transform: "translate(-50%, -50%)",
  },
  halfCircle: {
    position: "absolute",
    left: "400px",
    top: "-1000px",
    width: "1500px",
    height: "1500px",
    backgroundColor: "#C5F8C7",
    borderRadius: "50%",
    overflow: "hidden",
  },
  button: {
    position: "absolute",
    height: "50px",
    width: "50px",
    backgroundColor: "#4CAF50",
    borderRadius: "50%",
    top: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    right: "40%",
  },
  right: {
    right: "5%",
  },
  arrowDown: {
    color: "#FFF",
    fontSize: "26px",
  },
  button2: {
    width: "100%",
    color: "#000000",
    fontSize: "30px",
    background: "rgba(0, 162, 7, 0.17)",
    borderRadius: "20px",
    border: "none",
    marginTop: "3rem",
  },
  card: {
    margin: "0",
    padding: "0",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    position: "absolute",
    top: "60%",
    right: "10%",
    transition: "opacity 0.5s ease-in-out",
    transform: "translate(-50%, -50%)",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    transition: "opacity 0.5s ease-in-out",
  },
};

export default Wheel;
