import React from "react";
import { Rating } from "react-simple-star-rating";
import Button from "react-bootstrap/Button";

function MainPage(props) {
  return (
    <div>
      <div style={styles.container}>
        {/* Left Section */}
        <div>
          <div style={styles.cutomerRating}>
            {props.currPerson.rating.toFixed(1)}
          </div>
          <Rating
            style={styles.ratingIcon}
            initialValue={props.currPerson.rating}
            fillColor="#4CAF50"
            allowFraction={true}
            readonly={true}
          />
          <h1 style={styles.name}>{props.currPerson.name}</h1>
          <h2 style={styles.title}>{props.currPerson.post}</h2>
          <p style={styles.paragraph}>{props.currPerson.description}</p>
          <div style={styles.buttonsContainer}>
            <Button variant="primary" style={styles.button}>
              Book a session
            </Button>
          </div>
        </div>

        {/* Right Section */}
        {/* <div style={styles.card}>
          <img
            style={styles.image}
            src={props.currPerson.imageUrl}
            alt="current"
          />
          <Button style={styles.button2}>{props.currPerson.name}</Button>
        </div> */}
      </div>
    </div>
  );
}

const styles = {
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
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "8rem",
    marginLeft: "7rem",
  },
  cutomerRating: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "4rem",
    lineHeight: "100px",
    marginLeft: "1rem",
    letterSpacing: "0.015em",
    color: "#609B6C",
  },
  ratingIcon: {
    textAlign: "left",
    marginTop: "1rem",
    marginBottom: "1rem",
    cursor: "default",
  },
  name: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "3rem",
    lineHeight: "4rem",
    letterSpacing: "0.015em",
    color: "#000000",
    textAlign: "left",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "100",
    fontSize: "2rem",
    lineHeight: "3rem",
    letterSpacing: "0.015em",
    color: "#000000",
    textAlign: "left",
  },
  paragraph: {
    width: "50%",
    maxWidth: "30rem",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "50",
    fontSize: "1rem",
    textAlign: "justify",
    letterSpacing: "0.015em",
    color: "#000000",
    marginTop: "2rem",
    marginBottom: "3rem",
  },
  buttonsContainer: {
    position: "absolute",
    top: "80%",
    // left: '20%',
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "75rem",
  },
  button: {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "#fff",
    borderRadius: "0",
    width: "15rem",
    height: "3rem",
    margin: "10px",
    marginLeft: "0",
    boxShadow: "0px 10px 60px rgba(76, 175, 80, 0.9)",
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
    // left: "75%",
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

export default MainPage;
