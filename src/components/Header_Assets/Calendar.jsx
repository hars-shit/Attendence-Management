import React from "react";
import '/home/harshit/Desktop/React/attendence-management/src/style/Calendar.css';
const Calendar=()=>{
    return(
        <>
        <div className="Container">
       <form action="">
        <label id="Text-Heading" htmlFor="SelectYear">
            Select Year for Viewing the Attendance 
        </label><br />
        <input type="date" />
       </form>
     
        </div>
        </>
    )
}
export default Calendar;