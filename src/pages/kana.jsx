import React, { useState } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import SEO from "../components/SEO";

import "../base.css";

import kana from "../utils/kana";

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

export default function Index() {
  const { gojuuon, dakuon, handakuon, youon } = kana;
  const extended = [...dakuon, ...handakuon, ...youon];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [onlyOnce, setOnce] = useState(false);
  const [level, setLevel] = useState("Lv. 1");
  const [useData, setData] = useState(gojuuon);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setOnce(true);
  }

  function pilihLevel(dataSet, lvl) {
    setData(dataSet);
    shuffle(dataSet);
    document.querySelector(".start").style.display = "none";
    document.querySelector(".container").style.display = "flex";
    if (dataSet === gojuuon) {
      setLevel("Lv. 1");
      document.querySelector(".katakanaHeader").style.display = "none";
      document.querySelector(".katakanaRow").style.display = "none";
      document.querySelector(".hiraganaHeader").style.display = "block";
      document.querySelector(".hiraganaRow").style.display = "flex";
    };
    if (dataSet === extended) {
      setLevel("Lv. 2");
      document.querySelector(".katakanaHeader").style.display = "none";
      document.querySelector(".katakanaRow").style.display = "none";
      document.querySelector(".hiraganaHeader").style.display = "block";
      document.querySelector(".hiraganaRow").style.display = "flex";
    };
    if (dataSet === gojuuon && lvl === "lvl3") {
      setLevel("Lv. 3");
      document.querySelector(".hiraganaHeader").style.display = "none";
      document.querySelector(".hiraganaRow").style.display = "none";
      document.querySelector(".katakanaHeader").style.display = "block";
      document.querySelector(".katakanaRow").style.display = "flex";
    };
    if (dataSet === extended && lvl === "lvl4") {
      setLevel("Lv. 4");
      document.querySelector(".hiraganaHeader").style.display = "none";
      document.querySelector(".hiraganaRow").style.display = "none";
      document.querySelector(".katakanaHeader").style.display = "block";
      document.querySelector(".katakanaRow").style.display = "flex";
    };
  }

  function validateForm() {
    const x = document.querySelector(".input").value;
    const z = useData[currentQuestion].spelling;
    const item = `item-${currentQuestion}`;
    const questionMark = `questionMark-${currentQuestion}`;
    const answer = `answer-${currentQuestion}`;
    if (x === z && currentQuestion <= useData.length) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      document.querySelector(".input").value = "";
      document.querySelector(`.${item}`).style.border = "2px solid #2eb72e";
      document.querySelector(".result").innerHTML = "Benar!";
      document.querySelector(".result").style.backgroundColor = "#2eb72e";
      document.querySelector(`.${questionMark}`).style.display = "none"; //remove the question mark
      document.querySelector(`.${answer}`).style.display = "block"; //display the answer
    }
    if (x !== z) {
      document.querySelector(".result").innerHTML = "Salah!";
      document.querySelector(".result").style.backgroundColor = "#ff5252";
    }
    if (x === z && currentQuestion === useData.length) {
      document.querySelector(".input").style.display = "none";
      document.querySelector(".result").innerHTML = "Selesai!";
      document.querySelector(".reload").style.display = "block";
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
      <Helmet title="Kana Quiz" />
      <SEO />
      <Home>
        <H1>#KanaQuiz</H1>
        <Start className="start">
          <Level type="button" onClick={() => pilihLevel(gojuuon, "lvl1")}>
            Level 1 (Hiragana Standar)
          </Level>
          <Level type="button" onClick={() => pilihLevel(extended, "lvl2")}>
            Level 2 (Hiragana Extended)
          </Level>
          <Level type="button" onClick={() => pilihLevel(gojuuon, "lvl3")}>
            Level 3 (Katakana Standar)
          </Level>
          <Level type="button" onClick={() => pilihLevel(extended, "lvl4")}>
            Level 4 (Katakana Extended)
          </Level>
        </Start>
      </Home>
      <Container className="container">
        <Header className="hiraganaHeader">
          <h2>{useData[currentQuestion].hiragana}</h2>
        </Header>
        <Header className="katakanaHeader">
          <h2>{useData[currentQuestion].katakana}</h2>
        </Header>
        <Row>
          <Score>{currentQuestion + 1} / {useData.length}</Score>
          <Alert className="result"></Alert>
          <Lv>{level}</Lv>
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
        <Row className="hiraganaRow">
          {useData.map((kana, index) => (
            <Li className={`item item-${index}`} key={index}>
              <div>
                <strong>{kana.hiragana}</strong>
                <Char className={`answer answer-${index}`}>{kana.spelling}</Char>
                <div className={`questionMark questionMark-${index}`}>?</div>
              </div>
            </Li>
          ))}
        </Row>
        <Row className="katakanaRow">
          {useData.map((kana, index) => (
            <Li className={`item item-${index}`} key={index}>
              <div>
                <strong>{kana.katakana}</strong>
                <Char className={`answer answer-${index}`}>{kana.spelling}</Char>
                <div className={`questionMark questionMark-${index}`}>?</div>
              </div>
            </Li>
          ))}
        </Row>
      </Container>
    </>
  );
}
