import React, { useState } from "react";
import {TbArrowsUpDown} from 'react-icons/tb'
import '/home/harshit/Desktop/React/attendence-management/src/style/Calendar.css';
const Calendar=()=>{
    const [showYear,setShowYear]=useState(false);
    const handleClickbtn=()=>{
        console.log('happy')
        setShowYear(!showYear);
    }
    return(
        <>
        <div className="Container">
       <form action="">
        <label id="Text-Heading" htmlFor="SelectYear">
            Select Year for Viewing the Attendance 
        </label><br />
        <div className="selection-box">
        <button onClick={handleClickbtn} id="select-year" >  Select Year  <TbArrowsUpDown className="inside-btn-icon"/>
        </button>

        {/* show element on click  */}
        {
            showYear &&(
                <div className="year-chart">
                    <div>
                        
                <button>YEAR 2022</button>
                <button>YEAR 2023</button>
                <button>YEAR 2024</button>
                <button>YEAR 2025</button>
                <button>YEAR 2026</button>
                    </div>
                </div>
            )
        }
       
        </div>
       
       </form>
     
        </div>
        </>
    )
}
export default Calendar;