import React, { useState } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import SEO from "../components/SEO";

import "../base.css";

import hiraganaData from "../utils/hiragana";
import hiraganaData2 from "../utils/hiragana2";

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
  const { hiragana } = hiraganaData;
  const { hiragana2 } = hiraganaData2;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [onlyOnce, setOnce] = useState(false);
  const [level, setLevel] = useState("Lv. 1");
  const [useData, setData] = useState(hiragana);

  function shuffle(array) {
    const once = true;
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setOnce(once);
  }

  function pilihLevel(lvl) {
    setData(lvl);
    shuffle(lvl);
    document.querySelector(".start").style.display = "none";
    document.querySelector(".container").style.display = "flex";
    if (lvl === hiragana && onlyOnce === false ) {
      setLevel("Lv. 1");;
    };
    if (lvl === hiragana2) {
      setLevel("Lv. 2");
    };
  }

  function validateForm() {
    const x = document.querySelector(".answer").value;
    const z = useData[currentQuestion].char;
    const y = useData[currentQuestion].unicode;
    const unknown = `unknown${y}`;
    const char = `char${y}`;
    if (x === z && currentQuestion < 45) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      document.querySelector(".answer").value = "";
      document.querySelector(`.${y}`).style.border = "2px solid #2eb72e";
      document.querySelector(".result").innerHTML = "Benar!";
      document.querySelector(".result").style.backgroundColor = "#2eb72e";
      document.querySelector(`.${y}`).style.display = "block";
      document.querySelector(`.${unknown}`).style.display = "none";
      document.querySelector(`.${char}`).style.display = "block";
    }
    if (x !== z) {
      document.querySelector(".result").innerHTML = "Salah!";
      document.querySelector(".result").style.backgroundColor = "#ff5252";
    }
    if (x === z && currentQuestion === 45) {
      const lastQuestion = currentQuestion;
      const last = useData[lastQuestion].unicode;
      const lastUnknown = `unknown${last}`;
      const lastChar = `char${last}`;
      document.querySelector(".result").style.backgroundColor = "#2eb72e";
      document.querySelector(`.${last}`).style.border = "2px solid #2eb72e";
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
    const y = useData[currentQuestion].char;
    let i;
    const list = document.querySelectorAll(".list");
    const char = document.querySelectorAll(".char");
    const unkn = document.querySelectorAll(".unknown");
    document.querySelector(".answer").style.display = "block";
    document.querySelector(".answer").value = "";
    document.querySelector(".reload").style.display = "none";
    document.querySelector(".result").innerHTML = "";
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
      <Home>
        <H1>#HiraganaQuiz</H1>
        <Start className="start">
          <Level type="button" onClick={() => pilihLevel(hiragana)}>
            Level 1
          </Level>
          <Level type="button" onClick={() => pilihLevel(hiragana2)}>
            Level 2
          </Level>
        </Start>
      </Home>
      <Container className="container">
        <Header>
          <h2>{useData[currentQuestion].unicode}</h2>
        </Header>
        <Row>
          <Score>{currentQuestion + 1} / 46</Score>
          <Alert className="result"></Alert>
          <Lv>{level}</Lv>
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
          {useData.map((hira, index) => (
            <Li className={`list ${hira.unicode}`} key={index}>
              <div>
                <strong>{hira.unicode}</strong>
                <Char className={`char char${hira.unicode}`}>{hira.char}</Char>
                <div className={`unknown unknown${hira.unicode}`}>?</div>
              </div>
            </Li>
          ))}
        </Row>
      </Container>
    </>
  );
}
