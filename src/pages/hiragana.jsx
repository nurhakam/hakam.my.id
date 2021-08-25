import React, { useState }  from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import SEO from "../components/SEO"

import "../base.css";
import hiraganaData from "../utils/hiragana";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  padding: 2.5rem;
  margin: auto;
  text-align: center;
  align-items: center;
`;

const Header = styled.div`
  background-color: #f7ce3d;
  color: white;
  width: 100%;
  border-radius: 10px;
`;

const Score = styled.p`
  background-color: #59d759;
  color: white;
  border-radius: 10px;
  margin: 10px 10px 10px 0px;
  padding: 8px 12px;
`;

const Alert = styled.div`
  background-color: #acacac;
  color: white;
  width: 150px;
  padding: 8px;
  border-radius: 10px;
  margin: auto;
`;

const Input = styled.input`
  margin: 20px;
  padding: 8px 14px;
  margin: 8px 0;
  box-sizing: border-box;
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

const Li = styled.li`
  list-style-type: none;
  padding: 15px 20px;
  margin: 15px;
  border: 2px solid #f7ce3d;
`;

export default function Index () {
  const {hiragana} = hiraganaData;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
    
  }
  function shiragana() {
    if (currentQuestion === 0) {
      shuffle(hiragana);
    }
  }

  shiragana()


  function validateForm() {
    const x = document.querySelector(".answer").value;
    const y = hiragana[currentQuestion].char;
    if (x === y && currentQuestion < 45) {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        document.querySelector(".answer").value = "";
        document.querySelector(`.${y}`).style.border= "2px solid #59d759";
        document.querySelector(".result").innerHTML = "Benar!";
        document.querySelector(".result").style.backgroundColor = "#59d759";
    }
    if (x !== y) {
      document.querySelector(".result").innerHTML = "Salah!";
      document.querySelector(".result").style.backgroundColor = "#ff5252";
    }
    if (x === y && currentQuestion === 45) {
      const lastQuestion = currentQuestion;
      const last = hiragana[lastQuestion].char;
      document.querySelector(".result").style.backgroundColor = "#59d759";
      document.querySelector(`.${last}`).style.border = "2px solid #59d759";
      document.querySelector(".result").innerHTML = "Selesai!";
      document.querySelector(".answer").style.display = "none";
      document.querySelector(".reload").style.display = "block";
    }
  }

  function reloadCode() {
    const x = document.querySelector(".answer").value;
    const y = hiragana[currentQuestion].char;
    let i;
    const list = document.querySelectorAll(".list");
    document.querySelector(".answer").style.display = "block";
    document.querySelector(".answer").value = "";
    document.querySelector(".reload").style.display = "none";
    document.querySelector(".result").innerHTML = "Silakan jawab!";
    document.querySelector(".result").style.backgroundColor = "#acacac";
    for (i = 0; i < list.length; i++) {
      list[i].style.border = "2px solid #f7ce3d";
    }
    if (x === y && currentQuestion === 45) {
        const resetQuestion = 0;
        setCurrentQuestion(resetQuestion);
    }
  }

  return (
    <>
      <Helmet title="Hiragana Quiz" />
      <SEO />
      <Container>
          <Header>
          <h2>{hiragana[currentQuestion].unicode}</h2>
          </Header>
          <Row>
          <Score>{currentQuestion + 1} / 46</Score>
          <Alert className="result">
            Silahkan jawab!
          </Alert>
          </Row>
          <Input type="text" className="answer" autoComplete="off" onInput={() => validateForm()}/>
          <Button className="reload" type="button" onClick={() => reloadCode()}>Muat ulang</Button>
          <Row>
            {hiragana.map((hira) => 
              <Li className={`list ${hira.char}`} key={hira.char}>
                {hira.unicode}
              </Li>
            )}
          </Row>
      </Container>
    </>
  );
}