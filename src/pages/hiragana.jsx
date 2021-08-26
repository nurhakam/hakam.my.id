import React, { useState } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import SEO from "../components/SEO";

import "../base.css";
import hiraganaData from "../utils/hiragana";

const Start = styled.button`
  display: block;
  background-color: #8383ce;
  color: white;
  border-radius: 10px;
  border: none;
  margin: 200px auto;
  padding: 20px 10%;
`;

const Container = styled.div`
  display: none;
  flex-direction: column;
  max-width: 900px;
  padding: 1rem 0 2.5rem 0;
  margin: auto;
  text-align: center;
  align-items: center;
`;

const H1 = styled.h1`
  margin: 0;
  padding: 15px 30px;
  line-height: normal;
  background-color: #f73d7a;
  color: white;
  border-radius: 10px;
`;

const Header = styled.div`
  border: 2px solid #f7ce3d;
  width: 60%;
  border-radius: 10px;
  margin-top: 10px;
`;

const Score = styled.p`
  border-radius: 10px;
  margin: 10px 10px 0 0;
  padding: 8px 12px;
  border: 2px solid #25bd25;
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
  padding: 15px 20px;
  margin: 5px;
  border: 2px solid #f7ce3d;
  width: 30px;
  height: 60px;
  border-radius: 10px;
`;

const Char = styled.div`
  display: none;
  margin: auto;
`;

export default function Index() {
  const { hiragana } = hiraganaData;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [onlyOnce, setOnce] = useState(false);

  function shuffle(b) {
    const once = true;
    const a = b;
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setOnce(once);
  }

  function shiragana() {
    if (onlyOnce === false) {
      shuffle(hiragana);
      document.querySelector(".start").style.display = "none";
      document.querySelector(".container").style.display = "flex";
    }
  }

  function validateForm() {
    const x = document.querySelector(".answer").value;
    const y = hiragana[currentQuestion].char;
    const unknown = `unknown${y}`;
    const char = `c${y}`;
    if (x === y && currentQuestion < 45) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      document.querySelector(".answer").value = "";
      document.querySelector(`.${y}`).style.border = "2px solid #25bd25";
      document.querySelector(".result").innerHTML = "Benar!";
      document.querySelector(".result").style.backgroundColor = "#25bd25";
      document.querySelector(`.${y}`).style.display = "block";
      document.querySelector(`.${unknown}`).style.display = "none";
      document.querySelector(`.${char}`).style.display = "block";
    }
    if (x !== y) {
      document.querySelector(".result").innerHTML = "Salah!";
      document.querySelector(".result").style.backgroundColor = "#ff5252";
    }
    if (x === y && currentQuestion === 45) {
      const lastQuestion = currentQuestion;
      const last = hiragana[lastQuestion].char;
      const lastUnknown = `unknown${last}`;
      const lastChar = `c${last}`;
      document.querySelector(".result").style.backgroundColor = "#25bd25";
      document.querySelector(`.${last}`).style.border = "2px solid #25bd25";
      document.querySelector(".result").innerHTML = "Selesai!";
      document.querySelector(".answer").style.display = "none";
      document.querySelector(`.${lastUnknown}`).style.display = "none";
      document.querySelector(`.${lastChar}`).style.display = "block";
      document.querySelector(".reload").style.display = "block";
      document.querySelector(`.${last}`).style.display = "block";
    }
  }

  function reloadCode() {
    const x = document.querySelector(".answer").value;
    const y = hiragana[currentQuestion].char;
    let i;
    const list = document.querySelectorAll(".list");
    const char = document.querySelectorAll(".char");
    const unkn = document.querySelectorAll(".unknown");
    document.querySelector(".answer").style.display = "block";
    document.querySelector(".answer").value = "";
    document.querySelector(".reload").style.display = "none";
    document.querySelector(".result").innerHTML = "Silakan jawab!";
    document.querySelector(".result").style.backgroundColor = "#acacac";
    for (i = 0; i < list.length; i += 1) {
      list[i].style.border = "2px solid #f7ce3d";
      char[i].style.display = "none";
      unkn[i].style.display = "block";
    }
    if (x === y && currentQuestion === 45) {
      const resetQuestion = 0;
      const resetOnce = false;
      setCurrentQuestion(resetQuestion);
      setOnce(resetOnce);
      document.querySelector(".start").style.display = "block";
      document.querySelector(".container").style.display = "none";
    }
  }

  return (
    <>
      <Helmet title="Hiragana Quiz" />
      <SEO />
      <Start className="start" type="button" onClick={() => shiragana()}>
        Start!
      </Start>
      <Container className="container">
        <H1>#HiraganaQuiz</H1>
        <Header>
          <h2>{hiragana[currentQuestion].unicode}</h2>
        </Header>
        <Row>
          <Score>{currentQuestion + 1} / 46</Score>
          <Alert className="result">Silahkan jawab!</Alert>
          <Lv>Lv. 1</Lv>
        </Row>
        <Input
          type="text"
          className="answer"
          autoComplete="off"
          placeholder="type here..."
          onInput={() => validateForm()}
        />
        <Button className="reload" type="button" onClick={() => reloadCode()}>
          Muat ulang
        </Button>
        <Row>
          {hiragana.map((hira) => (
            <Li className={`list ${hira.char}`} key={hira.char}>
              <div>
                {hira.unicode}
                <Char className={`char c${hira.char}`}>{hira.char}</Char>
                <div className={`unknown unknown${hira.char}`}>?</div>
              </div>
            </Li>
          ))}
        </Row>
      </Container>
    </>
  );
}
