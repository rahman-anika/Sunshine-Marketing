import React, { useEffect, useState } from 'react';
import './Main.css';
import ShowEmployees from '../ShowEmployees/ShowEmployees';
import Calculation from '../Calculation/Calculation';

const Main = () => {

    const [employees, setEmployees] = useState([]);
    const [calculation, setCalculation] = useState([]);


    useEffect(() => {
        fetch('./dataEmployee.json')
            .then(res => res.json())
            .then(data => setEmployees(data));

    }, []);



    const handleShowEmployee = (employee) => {
        // console.log(employee);
        const newCalculation = [...calculation, employee];
        // console.log(newCalculation);
        setCalculation(newCalculation);

    };


    return (
        <div>
            <div className="row">
                <div className="col-md-9 employee-details">

                    <h2 className="employees-heading">Our Employees</h2>
                    <div className="row">
                        {
                            employees.map(employee => <ShowEmployees
                                key={employee._id}
                                employee={employee}
                                handleShowEmployee={handleShowEmployee}
                            >
                            </ShowEmployees>)
                        }
                    </div>
                </div>

                <div className="col-md-3 show-calculation">
                    <h4><i class="fas fa-users"></i> Details & Calculation</h4>


                    <Calculation
                        key={calculation._id}
                        calculation={calculation}></Calculation>


                </div>

            </div>
        </div>
    );
};

export default Main;