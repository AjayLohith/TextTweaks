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
                    className="form-control w-100" 
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
                <div className="d-flex flex-wrap gap-2 button-container">
                    <button className="custom-btn flex-grow-1" onClick={handleUpClick}>Uppercase</button>
                    <button className="custom-btn flex-grow-1" onClick={handleLoClick}>Lowercase</button>
                    <button className="custom-btn flex-grow-1" onClick={handleRemoveSpaces}>Remove Spaces</button>
                    <button className="custom-btn flex-grow-1" onClick={handleClearClick}>Clear</button>
                    <button className="custom-btn flex-grow-1" onClick={handleRevrse}>Reverse</button>
                    <button className="custom-btn flex-grow-1" onClick={handleLorem}>Random Text</button>
                </div>

                {/* Add mobile-friendly styles */}
                <style jsx>{`
                    @media (max-width: 768px) {
                        .button-container {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 8px;
                        }
                        
                        /* Ensure full width on smaller devices */
                        @media (max-width: 576px) {
                            .button-container {
                                grid-template-columns: 1fr;
                            }
                        }
                        
                        .custom-btn {
                            margin-bottom: 8px;
                            width: 100%;
                            padding: 12px 10px;
                            font-size: 0.95rem;
                        }
                        
                        textarea.form-control {
                            min-height: 200px;
                        }
                    }
                `}</style>
            </div>
            <div className="container mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="h4"><b>Text Summary</b></h2>
                <p className="mb-0">{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
            </div>
        </div>
        </>
    );
}