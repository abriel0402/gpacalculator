import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function GPACalculator(){

    const [gradePoints1, setGradePoints1] = useState(0);
    const [gradePoints2, setGradePoints2] = useState(0);
    const [gradePoints3, setGradePoints3] = useState(0);
    const [gradePoints4, setGradePoints4] = useState(0);
    const [gradePoints5, setGradePoints5] = useState(0);
    const [gradePoints6, setGradePoints6] = useState(0);

    let grades = [
        gradePoints1,
        gradePoints2,
        gradePoints3,
        gradePoints4,
        gradePoints5,
        gradePoints6,
    ]

    function GPACalculation(){

        
    }


    return(
        <>
        <header className="h1 py-4 row justify-content-center text-center">
            GPA Calculator
        </header>
        <div className="pt-2 pb-5 justify-content-center text-center">
            <h5>How to use</h5>
            <p>1.) Enter your grade</p>
            <p>2.) Enter class credits</p>
            <li>A = 4.0</li>
            <li>B+ = 3.5</li>
            <li>B = 3.0</li>
            <li>C+ = 2.5</li>
            <li>C = 2.0</li>
            <li>D = 1.5</li>
            <li>F = 1.0</li>
            

        </div>
        <div>
            <form className="justify-content-center text-center">
                <div className="py-2">
                <label>Class 1 &nbsp;</label>
                <input onChange={(e) => setGradePoints1()} className="input-sm" type="number" placeholder="Grade"/>
                <input className="input-sm" type="number" placeholder="Credits"/>
                </div>
                <div className="py-2">
                <label>Class 2 &nbsp;</label>
                <input className="input-sm" type="number" placeholder="Grade"/>
                <input className="input-sm" type="number" placeholder="Credits"/>
                </div>
                <div className="py-2">
                <label>Class 3 &nbsp;</label>
                <input className="input-sm" type="number" placeholder="Grade"/>
                <input className="input-sm" type="number" placeholder="Credits"/>
                </div>
                <div className="py-2">
                <label>Class 4 &nbsp;</label>
                <input className="input-sm" type="number" placeholder="Grade"/>
                <input className="input-sm" type="number" placeholder="Credits"/>
                </div>
                <div className="py-2">
                <label>Class 5 &nbsp;</label>
                <input className="input-sm" type="number" placeholder="Grade"/>
                <input className="input-sm" type="number" placeholder="Credits"/>
                </div>
                <div className="py-2">
                <label>Class 6 &nbsp;</label>
                <input className="input-sm" type="number" placeholder="Grade"/>
                <input className="input-sm" type="number" placeholder="Credits"/>
                </div>
            </form>

            <div className="h3 justify-content-center text-center">Cumulative GPA: {1} </div>
        </div> 

        
        </>
    );
}

export default GPACalculator;