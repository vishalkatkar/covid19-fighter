import React from "react";
import logo from '../assets/images/loding.gif'

export const DataLoader = () => {
    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
            justifyContent: 'center'
        }}>
            <div style={{
                height: "100%",
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src={logo} alt="loading..." width={40} height={40} />
            </div>
        </div>
    );
};

export const validationRegex = {
    mobile: /^[6-9]\d{9}$/,
    pincode: /^[1-9][0-9]{5}$/,
    nameRegex: /^[A-Za-z .]{1,128}$/,
};