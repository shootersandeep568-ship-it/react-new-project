
import React, { useState } from "react";
import img1 from "../componet1/img/1.jpg"
import img2 from "../componet1/img/2.jpg"
import img3 from "../componet1/img/3.jpg"
import img4 from "../componet1/img/4.jpg"
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

function Slider() {
    const Sliderdata = [
        {
            id: 1,
            img: img1,
        },
        {
            id: 2,
            img: img2,
        },
        {
            id: 3,
            img: img3,
        },
        {
            id: 4,
            img: img4,
        }
    ]

    let [SliderState, SetSliderState] = useState(0);
    const handleLeft = () => {
        if (SliderState === 0) {
            SetSliderState(3);
        } else {
            SetSliderState(SliderState - 1);
        }
    };
    const handleRight = () => {
        SetSliderState((SliderState += 1));
        if (SliderState == 4) {
            SetSliderState(0);
        }
    };

    return (
        <div>
            <div className="slider" style={{ height: "400px", display: "flex",position:"relative" }}>
                {Sliderdata.map((item, i) => {
                    return (
                        <>
                            <div className={`${i == SliderState ? "active" : "none"}`}>
                                <img src={item.img} alt="" width={"100%"} />
                                <button className="btn" onClick={handleLeft}><FaAngleLeft /></button>
                                <button className="btn1" onClick={handleRight}><FaChevronRight /></button>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default Slider
