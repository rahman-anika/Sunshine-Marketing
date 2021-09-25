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

            {/* Total added employee starts  */}

            <h5>
                Total Added Employee: {calculation.length}
            </h5>

            {/* Total added employee ends  */}

            {/* Total salary starts  */}

            <h5>
                Total Salary: <i class="fas fa-dollar-sign"></i> {totalSalary}
            </h5>

            {/* Total salary ends  */}


            {/* showing employee name after clicking Show More button starts */}

            <ul>
                {
                    calculation.map(employee => <li>{employee.name}</li>)
                }
            </ul>

            {/* showing employee name after clicking Show More button ends */}

        </div>
    );
};

export default Calculation;