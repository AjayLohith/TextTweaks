import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        document.title = 'TextTweaks-Uppercase';
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        document.title = 'TextTweaks-Lowercase';
    };

    const handleRemoveSpaces = () => {
        let newText = text.replace(/\s+/g, " ").trim();
        setText(newText);
        document.title = 'TextTweaks-RemoveSpaces';
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        document.title = 'TextTweaks-Clear';
    };

    const handleRevrse = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        document.title = 'TextTweaks-Reverse';
    };

    const handleLorem = () => {
        let newText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.";
        setText(newText);
        document.title = 'TextTweaks-Lorem';
    };

    
    const handleOnChange = (event) => {
        setText(event.target.value);
        
    };
    
    const [text, setText] = useState('');
    return (
        <>
        <div data-theme={props.mode}>
            <div className="container mx-1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <label htmlFor="exampleFormControlInput1" className="form-label"><b>Text Area</b></label>
            </div>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange} 
                    style={{ 
                        background: props.mode === 'dark' ? '#373A40' : 'white', 
                        color: props.mode === 'dark' ? 'white' : 'black',
                        '&::placeholder': {
                            color: props.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)'
                        }
                    }}
                    placeholder="Enter your text here..."
                    id="exampleFormControlTextarea1" 
                    rows="9"
                ></textarea>
               <p></p>
                <button className="custom-btn mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="custom-btn mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="custom-btn mx-1" onClick={handleRemoveSpaces}>Remove Spaces</button>
                <button className="custom-btn mx-1" onClick={handleClearClick}>Clear</button>
                <button className="custom-btn mx-1" onClick={handleRevrse}>Reverse Text</button>
                <button className="custom-btn mx-1" onClick={handleLorem}>Random Text</button>

            </div>
            <div className="container mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2><b>Text Summary</b></h2>
                <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
            </div>
        </div>
        </>
    );
}