// FileName: App.js

import React, { useState, useEffect } from "react";
import "./SciCalc.css"
import * as math from "mathjs";

function Scicalc() {
    const [expression, setExpression] = useState("");
    const [screenVal, setScreenVal] = useState("");
    const [customVariables, setCustomVariables] = useState({});
    // Default mode is "rad"
    const [mode, setMode] = useState("rad");

    function handleChange(e) {
        setExpression(e.target.value);
    }

    function handleClick(input) {
        setExpression((prevExpression) => prevExpression + input);
    }

    function calculate() {
        try {
            const allVariables = {
                ...customVariables,
                pi: Math.PI,
                e: Math.E,
                // Add factorial function
                fact: math.factorial,
                sin: mode === "rad" ? Math.sin : math.sin,
                cos: mode === "rad" ? Math.cos : math.cos,
                tan: mode === "rad" ? Math.tan : math.tan,
                asin: mode === "rad" ? Math.asin : math.asin,
                acos: mode === "rad" ? Math.acos : math.acos,
                atan: mode === "rad" ? Math.atan : math.atan,
            };

            const result = math.evaluate(expression, allVariables);
            if (typeof result === "number" && !isNaN(result)) {
                setScreenVal(Number(result).toFixed(2));
            } else {
                setScreenVal("Error: Invalid expression");
            }
        } catch (error) {
            setScreenVal("Error: Invalid expression");
        }
    }

    function clearScreen() {
        setExpression("");
        setScreenVal("");
    }

    function backspace() {
        const newExpression = expression.slice(0, -1);
        setExpression(newExpression);
    }

    function toggleMode() {
        // Toggle between "rad" and "deg" modes
        setMode(mode === "rad" ? "deg" : "rad");
    }

    useEffect(() => {
        const element = document.getElementById("calc");
        if (element) {
            dragElement(element);
        }
    }, []);

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    return (
        <>
            <div id="calc">
                <div id="calcheader">
                    <h1>Scientific Calculator</h1>
                    <div className="input-section">
                        <input
                            className="screen"
                            type="text"
                            value={expression}
                            onChange={handleChange}
                        />
                        <div className="output">Output: {screenVal}</div>
                    </div>
                    <div className="button-section">
                        <div className="numeric-pad">
                            {["1", "2", "3", "4", "5",
                                "6", "7", "8", "9", "0"].map(
                                (input) => (
                                    <button className={"Buttons"}key={input}
                                            onClick={() =>
                                                handleClick(input)}
                                    >
                                        {input}
                                    </button>
                                )
                            )}
                            <button className={"Buttons"}onClick={() =>
                                handleClick(".")}>.</button>
                        </div>
                        <div className="operators">
                            {[
                                "+",
                                "-",
                                "*",
                                "/",
                                "^",
                                "sqrt(",
                                "sin(",
                                "cos(",
                                "tan(",
                                "cbrt(",
                                "asin(",
                                "acos(",
                                "atan(",
                                // Add open parenthesis
                                "(",
                                // Add close parenthesis
                                ")",
                            ].map((input) => (
                                <button className={"Buttons"}key={input}
                                        onClick={() =>
                                            handleClick(input)}>
                                    {input}
                                </button>
                            ))}

                            <button className={"Buttons"}onClick={() =>
                                handleClick("pi")}>Pi</button>
                            <button className={"Buttons"}onClick={() =>
                                handleClick("fact(")}>Factorial</button>
                        </div>
                        <div className="control-buttons">
                            <button className="clear-button"
                                    onClick={clearScreen}>
                                C
                            </button>
                            <button className="equals-button"
                                    onClick={calculate}>
                                =
                            </button>
                            <button className="backspace-button"
                                    onClick={backspace}>
                                del
                            </button>
                        </div>
                    </div>
                <div className="variables"></div>
                </div>
            </div>
        </>
    );
}

export default Scicalc;