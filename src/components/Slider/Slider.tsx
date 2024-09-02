import { useState } from "react";
import { Urban } from "../Urban/Urban";
import { Bridge } from "../Bridge/Bridge";
import "./Slider.css";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

export function Slider() {
    const [sliderIndex, setSliderIndex] = useState<number>(0);

    const projects = [
        <Urban />,
        <Bridge />
    ];

    function showNextProject() {
        setSliderIndex(sliderIndex + 1);

        if (sliderIndex === projects.length - 1) {
            setSliderIndex(0);
        }
    }

    function showPreviousProject() {
        setSliderIndex(sliderIndex - 1);

        if (sliderIndex === 0) {
            setSliderIndex(projects.length - 1);
        }
    }

    return (
        <>
            <div className="slider">
                {projects.map((project, index) => <div key={index} style={{ translate: `${-100 * sliderIndex}%`, transition: ".3s" }}>{project}</div>)}
                <button className="arrows right" onClick={showNextProject}><IoIosArrowDroprightCircle /></button>
                <button className="arrows left" onClick={showPreviousProject}><IoIosArrowDropleftCircle /></button>
                {projects.map((_, index) => <button key={index}>{index}</button>)}
            </div>
        </>
    );
}