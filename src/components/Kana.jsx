import React, { useState } from "react";
import styled from "styled-components";

import "../base.css";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
  text-align: center;
  align-items: center;
`;

const Start = styled.div`
  margin: 10% auto;
`;

const H1 = styled.h1`
  margin: 0;
  padding: 30px 60px;
  line-height: normal;
  background-color: #f73d7a;
  color: white;
  border-radius: 0 0 10px 10px;
`;

const Level = styled.button`
  display: block;
  background-color: #8383ce;
  color: white;
  border-radius: 10px;
  border: none;
  margin: 20px auto;
  padding: 20px 100px;
`;

const Container = styled.div`
  display: none;
  flex-direction: column;
  max-width: 900px;
  padding: 0 0 2.5rem 0;
  margin: auto;
  text-align: center;
  align-items: center;
`;

const Header = styled.div`
  border: 2px solid #ffc700;
  width: 60%;
  border-radius: 10px;
  margin-top: 10px;
  background: #ffc700;
  color: white;
`;

const Score = styled.p`
  border-radius: 10px;
  margin: 10px 10px 0 0;
  padding: 8px 12px;
  border: 2px solid #2eb72e;
  background: #2eb72e;
  color: white;
`;

const Alert = styled.div`
  background-color: #5b5b5b;
  color: white;
  width: 150px;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 10px 0 0;
`;

const Lv = styled.div`
  width: 50px;
  padding: 8px;
  border-radius: 10px;
  margin: 10px 10px 0 0;
  border: 2px solid #f73d7a;
  background: #f73d7a;
  color: white;
`;

const Input = styled.input`
  margin: 20px;
  padding: 8px 14px;
  margin: 15px 0;
  min-width: 200px;
  width: 30%;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Button = styled.button`
  display: none;
  background-color: #8383ce;
  color: white;
  border-radius: 10px;
  border: none;
  margin: 10px;
  padding: 8px 12px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Li = styled.div`
  padding: 10px 20px;
  margin: 5px;
  border: 2px solid #f7ce3d;
  width: 40px;
  height: 55px;
  border-radius: 10px;
`;

const Char = styled.div`
  display: none;
  margin: auto;
`;

export default function Kana({ data }) {
  const [onlyOnce, setOnce] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Shuffle data
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setOnce(true);
  }

  function start() {
    shuffle(data);
    document.querySelector(".start").style.display = "none";
    document.querySelector(".container").style.display = "flex";
  }

  console.log(currentQuestion)

  function validateForm() {
    const x = document.querySelector(".input").value;
    const z = data[currentQuestion].node.spelling;
    const item = `item-${currentQuestion}`;
    const questionMark = `questionMark-${currentQuestion}`;
    const answer = `answer-${currentQuestion}`;
    if (x === z && currentQuestion < data.length - 1) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      document.querySelector(".input").value = "";
      document.querySelector(`.${item}`).style.border = "2px solid #2eb72e";
      document.querySelector(".result").innerHTML = "Benar!";
      document.querySelector(".result").style.backgroundColor = "#2eb72e";
      document.querySelector(`.${questionMark}`).style.display = "none"; //remove the question mark
      document.querySelector(`.${answer}`).style.display = "block"; //display the answer
    }
    if (x === z && currentQuestion === data.length) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      document.querySelector(`.${item}`).style.border = "2px solid #2eb72e";
      document.querySelector(".input").style.display = "none";
      document.querySelector(".result").innerHTML = "Selesai!";
      document.querySelector(".reload").style.display = "block";
    }
    if (x !== z) {
      document.querySelector(".result").innerHTML = "Salah!";
      document.querySelector(".result").style.backgroundColor = "#ff5252";
    }
  }

  function reloadCode() {
    setCurrentQuestion(0);
    setOnce(false);
    let i;
    const item = document.querySelectorAll(".item");
    const answer = document.querySelectorAll(".answer");
    const questionMark = document.querySelectorAll(".questionMark");
    for (i = 0; i < item.length; i += 1) {
      item[i].style.border = "2px solid #f7ce3d";
      answer[i].style.display = "none";
      questionMark[i].style.display = "block";
    }
    document.querySelector(".input").style.display = "block";
    document.querySelector(".reload").style.display = "none";
    document.querySelector(".result").innerHTML = "";
    document.querySelector(".result").style.backgroundColor = "#acacac";
    document.querySelector(".start").style.display = "block";
    document.querySelector(".container").style.display = "none";
  }

  return (
    <>
      <Home>
      <H1>#KanaQuiz</H1>
        <Start className="start">
          <Level type="button" onClick={() => start()}>
            Start
          </Level>
        </Start>
      </Home>
      <Container className="container">
        <Header>
          <h2>{data[currentQuestion].node.hiragana}</h2>
        </Header>
        <Row>
          <Score>{currentQuestion} / {data.length}</Score>
          <Alert className="result"></Alert>
          <Lv>Lv. 1</Lv>
          </Row>
        <Input
          type="text"
          className="input"
          autoComplete="off"
          placeholder="type here..."
          onInput={() => validateForm()}
        />
        <Button className="reload" type="button" onClick={() => reloadCode()}>
          Muat ulang
        </Button>
        <Row>
          {data.map((kana, index) => (
            <Li className={`item item-${index}`} key={index}>
              <div>
                <strong>{kana.node.hiragana}</strong>
                <Char className={`answer answer-${index}`}>{kana.node.spelling}</Char>
                <div className={`questionMark questionMark-${index}`}>?</div>
              </div>
            </Li>
          ))}
        </Row>
        </Container>
    </>
  );
}
