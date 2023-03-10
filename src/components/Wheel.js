import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import MainPage from "./MainPage";
import { ArrowDown } from "react-bootstrap-icons";
import { data } from "./data";
import Button from "react-bootstrap/esm/Button";

function Wheel() {
  const [colorEffect, setColorEffect] = useState("#C5F8C7");
  const [btnColourEffect, setbtnColourEffect] = useState("#4CAF50");

  const wheelRef = useRef();
  const centerWheelRef = useRef();
  const [radius, setRadius] = useState(320);
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState([]);
  const [tempTheta, setTempTheta] = useState(0.0);
  const [centerOfWheel, setCenterOfWheel] = useState({
    x: 0.0,
    y: 0.0,
  });
  const [reload, setReload] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(true);

  useEffect(() => {
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

  //For Animations
  const [rotate, setRotate] = useState(false);
  const [showMainPage, setShowMainPage] = useState(true);

  const handleClick = (direction) => {
    setShowMainPage(false);
    setRotate(true);
    setTimeout(() => {
      setCurrPerson(data[curr]);
      setIndex(curr);
      setRotate(false);
      setShowMainPage(true);
    }, 400);

    console.log(colorEffect);
    //changing the backgrounf colour
    if (colorEffect === "#C5F8C7") setColorEffect("#7ABD87");
    else setColorEffect("#C5F8C7");

    if (btnColourEffect === "#609B6C") setbtnColourEffect("#4CAF50");
    else setbtnColourEffect("#609B6C");

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
    setBackgroundColor(!backgroundColor);
    // setCurrPerson(data[curr]);
    // setIndex(curr);
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
      {/* Half Circle Background with Wheel */}
      <div style={{ ...styles.halfCircle, backgroundColor: `${colorEffect}` }}>
        <div style={styles.dottedLine}></div>
        <div ref={wheelRef} style={styles.wheel}>
          {card.map((card, index) => card)}
        </div>
      </div>

      {/* Center Wheel */}
      <div style={styles.centerContainer}>
        {/* Left Wheel Button */}
        <div
          onClick={() => handleClick("left")}
          style={{
            ...styles.button,
            ...styles.left,
            backgroundColor: `${btnColourEffect}`,
          }}
        >
          <ArrowDown style={styles.arrowDown} />
        </div>

        {/* Center Image Section */}
        <div style={styles.card}>
          <img
            ref={centerWheelRef}
            style={{
              ...styles.image,
              transform: `rotate(${rotate ? 180 : 0}deg) scale(${
                rotate ? 0.5 : 1
              })`,
              opacity: rotate ? 0.2 : 1,
              transition: "transform 1s linear, opacity 1s linear",
            }}
            src={currPerson.imageUrl}
            alt="current"
          />
          <Button style={{ ...styles.button2 }}>{currPerson.name}</Button>
        </div>

        {/* Right Wheel Button */}
        <div
          onClick={() => handleClick("right")}
          style={{
            ...styles.button,
            ...styles.right,
            backgroundColor: `${btnColourEffect}`,
          }}
        >
          <ArrowDown style={styles.arrowDown} />
        </div>
      </div>
      <div
        style={{
          opacity: showMainPage ? 1 : 0.5,
          transition: "opacity 0.5s ease-out, transform 0.5s ease-in",
        }}
      >
        <MainPage currPerson={currPerson} color={btnColourEffect} />
      </div>
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
    left: "350px",
    top: "-1000px",
    width: "1500px",
    height: "1500px",
    borderRadius: "50%",
    transition: "background-color 1s ease",
    overflow: "hidden",
  },
  button: {
    position: "absolute",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    top: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    left: "700px",
  },
  right: {
    left: "1400px",
  },
  arrowDown: {
    color: "#FFF",
    fontSize: "26px",
  },
  button2: {
    marginTop: "3rem",
    width: "120%",
    height: "70px",
    color: "#000000",
    fontSize: "30px",
    background: "rgba(0, 162, 7, 0.17)",
    borderRadius: "20px",
    border: "none",
    justifyContent: "center",
    marginLeft: "-1rem",
  },
  card: {
    margin: "0",
    padding: "0",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    position: "absolute",
    top: "500px",
    left: "1100px",
    transform: "translate(-50%, -50%)",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  dottedLine: {
    border: "3px dashed #0C3959",
    height: "640px",
    width: "640px",
    position: "absolute",
    top: "73%",
    right: "30%",
    borderRadius: "50%",
  },
};

export default Wheel;
