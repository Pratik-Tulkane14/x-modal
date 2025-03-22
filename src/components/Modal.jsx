import React, { useState } from "react";

const Modal = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (new Date(dob) > new Date()) {
            window.alert(
                "Invalid date of birth. Date of birth cannot be in the future"
            );
        }
        if (typeof phoneNumber !== "string" || phoneNumber.length !== 10) {
            window.alert("Invalid phone number. Please enter a 10-digit number.");
        }
        setName("");
        setEmail("");
        setPhoneNumber("");
        setDob("");
    };
    return (
        <div className="modal">
            <h1>Fill Details</h1>
            <form onSubmit={(e) => handleSubmit(e)} className="modal-content">
                <label>Username:</label>
                <input
                    type="text"
                    id="username"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email Address:</label>
                <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Phone Number:</label>
                <input
                    type="text"
                    id="phone"
                    required
                    minLength={10}
                    maxLength={10}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label>Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Modal;
