import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function GPACalculator(){

    const [gradePoints1, setGradePoints1] = useState();
    const [gradePoints2, setGradePoints2] = useState();
    const [gradePoints3, setGradePoints3] = useState();
    const [gradePoints4, setGradePoints4] = useState();
    const [gradePoints5, setGradePoints5] = useState();
    const [gradePoints6, setGradePoints6] = useState();

    const [credits1, setCredits1] = useState();
    const [credits2, setCredits2] = useState();
    const [credits3, setCredits3] = useState();
    const [credits4, setCredits4] = useState();
    const [credits5, setCredits5] = useState();
    const [credits6, setCredits6] = useState();
    
    
    let grades = [
        gradePoints1,
        gradePoints2,
        gradePoints3,
        gradePoints4,
        gradePoints5,
        gradePoints6,
    ]
    
    let credits = [
        credits1,
        credits2,
        credits3,
        credits4,
        credits5,
        credits6
    ]


    function GPACalculation(grades, credits){
        let gpa = 0;
        let values = []
        let valueCount = 0
        for(let i = 0; i < credits.length; i++){
            values[i] = gpa[i]*credits[i]
        }
        for(let j = 0; j < values.length; j++){
            valueCount += values[j]
        }
        gpa = valueCount / grades.length;

        return gpa;
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
            <h5>Guide</h5>
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
                <input onChange={(e) => setGradePoints1(e.target.value)} className="input-sm" type="number" placeholder="Grade"/>
                <input onChange={(e) => setCredits1(e.target.value)} className="input-sm" type="number" placeholder="Credits"/>
                </div>
                <div className="py-2">
                <label>Class 2 &nbsp;</label>
                <input onChange={(e) => setGradePoints2(e.target.value)} className="input-sm" type="number" placeholder="Grade"/>
                <input onChange={(e) => setCredits2(e.target.value)} className="input-sm" type="number" placeholder="Credits"/>
                </div>
                <div className="py-2">
                <label>Class 3 &nbsp;</label>
                <input onChange={(e) => setGradePoints3(e.target.value)} className="input-sm" type="number" placeholder="Grade"/>
                <input onChange={(e) => setCredits3(e.target.value)} className="input-sm" type="number" placeholder="Credits"/>
                </div>
                <div className="py-2">
                <label>Class 4 &nbsp;</label>
                <input onChange={(e) => setGradePoints4(e.target.value)} className="input-sm" type="number" placeholder="Grade"/>
                <input onChange={(e) => setCredits4(e.target.value)} className="input-sm" type="number" placeholder="Credits"/>
                </div>
                <div className="py-2">
                <label>Class 5 &nbsp;</label>
                <input onChange={(e) => setGradePoints5(e.target.value)} className="input-sm" type="number" placeholder="Grade"/>
                <input onChange={(e) => setCredits5(e.target.value)} className="input-sm" type="number" placeholder="Credits"/>
                </div>
                <div className="py-2">
                <label>Class 6 &nbsp;</label>
                <input onChange={(e) => setGradePoints6(e.target.value)} className="input-sm" type="number" placeholder="Grade"/>
                <input onChange={(e) => setCredits6(e.target.value)} className="input-sm" type="number" placeholder="Credits"/>
                </div>
            </form>

            <div className="py-3 h3 justify-content-center text-center">Cumulative GPA: {GPACalculation(grades, credits)} </div>
        </div> 

        
        </>
    );
}

export default GPACalculator;