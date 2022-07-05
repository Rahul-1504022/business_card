import React from "react";
import Button from "./Button";
import About from "./About";
import Interest from "./Interest";

const Body = () => {
    return (
        <div className="container body">
            <h2>MD.Shahriar Mridha Rahul</h2>
            <h4>Full Stack Web Developer</h4>
            <Button />
            <About />
            <Interest />
        </div>
    )
}
export default Body;