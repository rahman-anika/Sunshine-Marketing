import React from 'react';
import './Calculation.css';

const Calculation = (props) => {
    const { calculation } = props || {};
    console.log('Cart: ', calculation);

    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.salary;


    const total = parseFloat(props.calculation.reduce(totalReducer, 0)).toFixed(2);
    const totalSalary = parseFloat(total);



    return (
        <div>
            <h5>
                Total Added Employee: {calculation.length}
            </h5>

            <h5>
                Total Salary: <i class="fas fa-dollar-sign"></i> {totalSalary}
            </h5>



            <ul>
                {
                    calculation.map(employee => <li>{employee.name}</li>)
                }
            </ul>


        </div>
    );
};

export default Calculation;