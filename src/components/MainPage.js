import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Button from "react-bootstrap/Button";


function MainPage(props) {

  return (
    <div>
      <div style={styles.container}>
        {/* Left Section */}
        <div>
          <div style={{...styles.cutomerRating, color: `${props.color}` }}>
            {props.currPerson.rating.toFixed(1)}
          </div>
          <Rating
            style={styles.ratingIcon}
            initialValue={props.currPerson.rating}
            fillColor={props.color}
            allowFraction={true}
            readonly={true}
          />
          <h1 style={styles.name}>{props.currPerson.name}</h1>
          <h2 style={styles.title}>{props.currPerson.post}</h2>
          <p style={styles.paragraph}>{props.currPerson.description}</p>
          <div style={styles.buttonsContainer}>
            <Button variant="primary" style={{...styles.button, backgroundColor: `${props.color}`}}>
              Book a session
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
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
  },
  ratingIcon: {
    textAlign: "left",
    marginTop: "1rem",
    marginBottom: "1rem",
    cursor: "default",
  },
  name: {
    // fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "40px",
    lineHeight: "4rem",
    letterSpacing: "0.015em",
    color: "#000000",
    textAlign: "left",
  },
  title: {
    // fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
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
    fontWeight: "400",
    fontSize: "20px",
    textAlign: "justify",
    letterSpacing: "0.015em",
    color: "#000000",
    marginTop: "2rem",
    marginBottom: "3rem",
  },
  buttonsContainer: {
    position: "absolute",
    top: "660px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "75rem",
  },
  button: {
    border: "none",
    color: "#fff",
    borderRadius: "0",
    width: "15rem",
    height: "3rem",
    margin: "10px",
    marginLeft: "0",
    boxShadow: "0px 10px 60px rgba(76, 175, 80, 0.9)",
  }
};

export default MainPage;
