import React from "react";

const Button = () => {
    return (
        <div className="container" id="button_body">
            <button type="button" style={{ backgroundColor: "white", padding: "20px 50px", borderRadius: "6px" }}>
                <img src="assets/img/mail.jpg" width="15px" height="15px" style={{ marginRight: "10px" }} />
                <a href="#" style={{ textDecoration: "none", fontSize: "17px", color: "black" }}>
                    Email</a>
            </button>

            <button type="button" style={{ backgroundColor: "white", padding: "20px 50px", borderRadius: "6px" }}>
                <img src="assets/img/linkedin.png" width="15px" height="15px" style={{ marginRight: "10px" }} />
                <a href="#" style={{ textDecoration: "none", fontSize: "17px", color: "black" }}>
                    LinkedIn</a>
            </button>
        </div>
    )
}
export default Button;