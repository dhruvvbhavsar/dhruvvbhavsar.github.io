import React, { useEffect, useState } from "react";
import "./Cal.css";
import s from './snap.wav'

function Cal() {
  const sound = new Audio(s);
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")
  const ops = ["/","*","-","+","."]

  function doSomething(val) {
    if (
      ops.includes(val) && calc === '' ||
      ops.includes(val) && ops.includes(calc.slice(-1))
    ) {return;}
    sound.play()
    setCalc(calc + val)

    if(!ops.includes(val)) {
      setResult(eval(calc + val).toString())
    }
    
  }

  function walla() {
    sound.play()
    setCalc(result)
    setResult("")
  }

  function disappear() {
    sound.play()
    setCalc("")
    setResult("")
  }



  return (
    <>
    <div className="bg">
      <div className="calbox">
        <div className="screen_box">
          <p>{calc || 0}</p>
        </div>
        <div className="button_box">
          <button className="grid-item item-1" onClick={() => {disappear()}}>
            <p>AC</p>
          </button>
          <button className="grid-item item-2" onClick={() => {doSomething("/")}}>
            <p>/</p>
          </button>
          <button className="grid-item item-3" onClick={() => {doSomething("*")}}>
            <p>*</p>
          </button>
          <button className="grid-item item-4" onClick={() => {doSomething("-")}}>
            <p>-</p>
          </button>
          <button className="grid-item item-5" onClick={() => {doSomething("7")}}>
            <p>7</p>
          </button>
          <button className="grid-item item-6" onClick={() => {doSomething("8")}}>
            <p>8</p>
          </button>
          <button className="grid-item item-7" onClick={() => {doSomething("9")}}>
            <p>9</p>
          </button>
          <button className="grid-item item-8" onClick={() => {doSomething("+")}}>
            <p>+</p>
          </button>
          <button className="grid-item item-9" onClick={() => {doSomething("4")}}>
            <p>4</p>
          </button>
          <button className="grid-item item-10" onClick={() => {doSomething("5")}}>
            <p>5</p>
          </button>
          <button className="grid-item item-11" onClick={() => {doSomething("6")}}>
            <p>6</p>
          </button>
          <button className="grid-item item-12" onClick={() => {doSomething("1")}}>
            <p>1</p>
          </button>
          <button className="grid-item item-13" onClick={() => {walla()}}>
            <p>=</p>
          </button>
          <button className="grid-item item-14" onClick={() => {doSomething("2")}}>
            <p>2</p>
          </button>
          <button className="grid-item item-15" onClick={() => {doSomething("3")}}>
            <p>3</p>
          </button>
          <button className="grid-item item-16" onClick={() => {doSomething("0")}}>
            <p>0</p>
          </button>
          <button className="grid-item item-17" onClick={() => {doSomething(".")}}>
            <p>.</p>
          </button>
        </div>
      </div>
      <h4>Designed by Dhruv Bhavsar😎</h4>
    </div>
    
    </>
  );
}

export default Cal;
