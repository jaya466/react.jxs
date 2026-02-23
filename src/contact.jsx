import "./style.css";
import { useState } from "react";

function Contact() {
    const [inputValue, setInputValue] = useState("");
    const [displayValue, setDisplayValue] = useState("");

    // captures string input (readshow equivalent)
    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    // equivalent to show(): displays the entered string
    function handleShow() {
        setDisplayValue(inputValue);
    }

    return (
        <main>
            <h1>Contact</h1>
            <div className="string-demo">
                <label htmlFor="string-input">Enter a string:</label>
                <input
                    id="string-input"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type something..."
                />
                <button onClick={handleShow}>Show</button>
                {displayValue && (
                    <p className="string-output">You entered: <strong>{displayValue}</strong></p>
                )}
            </div>
        </main>
    );
}

export default Contact;