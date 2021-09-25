import React, { useEffect, useState } from 'react';
import './Main.css';
import ShowEmployees from '../ShowEmployees/ShowEmployees';
import Calculation from '../Calculation/Calculation';

const Main = () => {

    // state 

    const [employees, setEmployees] = useState([]);
    const [calculation, setCalculation] = useState([]);


    useEffect(() => {
        fetch('./dataEmployee.json')
            .then(res => res.json())
            .then(data => setEmployees(data));

    }, []);


    // Show More button handle 

    const handleShowEmployee = (employee) => {
        // console.log(employee);
        const newCalculation = [...calculation, employee];
        // console.log(newCalculation);
        setCalculation(newCalculation);

    };


    return (
        <div>
            <div className="row">
                {/* Employess part starts  */}

                <div className="col-md-9 employee-details">

                    <h2 className="employees-heading">Our Employees</h2>
                    <div className="row">
                        {
                            employees.map(employee => <ShowEmployees
                                // key declaration 
                                key={employee._id}
                                employee={employee}
                                handleShowEmployee={handleShowEmployee}
                            >
                            </ShowEmployees>)
                        }
                    </div>
                </div>

                {/* Employess part ends  */}

                {/* Details & Calculation part starts  */}

                <div className="col-md-3 show-calculation">
                    <h4><i class="fas fa-users"></i> Details & Calculation</h4>


                    <Calculation
                        // key declaration 
                        key={calculation._id}
                        calculation={calculation}></Calculation>


                </div>

                {/* Details & Calculation part ends  */}

            </div>
        </div>
    );
};

export default Main;