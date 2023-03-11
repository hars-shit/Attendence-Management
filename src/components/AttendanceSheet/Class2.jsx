import React, { useState } from "react";
import '/home/harshit/Desktop/React/attendence-management/src/style/Class.css';
import {DataOfStudent} from "/home/harshit/Desktop/React/attendence-management/src/DataOfStudent.js"
export function Class2(){

    // for changing bg color of button present
    const [changecolorBlue,setChangeColorBlue]=useState(false); 
    const handleClickBtn1 =()=>{
        setChangeColorBlue(!changecolorBlue);
        setChangeColorPink(false);
        setChangeColorRed(false);
    }
     // for changing bg color of button absent
    const [changecolorRed,setChangeColorRed]=useState(false); 
    const handleClickBtn2 =()=>{
        setChangeColorRed(!changecolorRed);
        setChangeColorBlue(false);
        setChangeColorPink(false);
    }
     // for changing bg color of button leave
    const [changecolorPink,setChangeColorPink]=useState(false); 
    const handleClickBtn3 =()=>{
        setChangeColorPink(!changecolorPink);
        setChangeColorBlue(false);
        setChangeColorRed(false);
    }
    console.log(DataOfStudent)
    return(
        <div className="mainDiv">
        
   {
   DataOfStudent.map((item,i)=>{
    return(
    <div key={i} className="StdDataContainer">
        <div id="imageOfStd">
            <img src={item.image} alt="" />
        </div>

        {/* displaying name roll number -> */}
        <div className="introOfStd">
        <h6>Name : {item.Name}</h6>
        <p>ROll No. : {item.RollNo}</p>
        <p>Mobile No. : {item.MobileNo}</p>
        </div>


        <div className="buttonStd">
        <button onClick={handleClickBtn1} key={i} className={` present std ${(changecolorBlue===true)? 'bg-blue':'bg-white'} `}  >P</button>
        <button onClick={handleClickBtn2} className={` absent std ${(changecolorRed===true)? 'bg-red':'bg-white'} `} >A</button>
        <button onClick={handleClickBtn3} className={` leave std ${(changecolorPink===true)? 'bg-pink':'bg-white'} `} >L</button>

        </div>
    </div>
    )
   })
   }
        </div>
    )
}
