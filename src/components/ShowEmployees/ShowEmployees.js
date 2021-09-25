import React from 'react';
import './ShowEmployees.css';

const ShowEmployees = (props) => {

    // console.log(props.employee);
    const { name, gender, age, country, designation, salary, picture } = props.employee || {};

    return (


        <div className="col-md-4">


            <div class="card mb-3 cardStyle">
                <div class="row g-0">
                    <div class="col-md-4 card-body">
                        <img src={picture} className="img-fluid rounded-start employee-img" alt="..." />
                        <h5>
                            <br />
                            <i class="fab fa-facebook"></i> <i class="fab fa-linkedin"></i></h5>

                        <h5>

                            <i class="fas fa-envelope-open"></i> <i class="fab fa-twitter"></i></h5>



                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h4 class="card-title title-text"> <small>{name}</small></h4>
                            <h5 class="card-text title-text"><small> {designation}</small> </h5>
                            <h6 class="card-text"><small>Age: {age}</small> </h6>
                            <h6 class="card-text"><small>Gender: {gender}</small> </h6>
                            <h6 class="card-text"><small>Salary: ${salary} </small> </h6>
                            <h6 class="card-text"><small>Country: {country} </small> </h6>
                            <button onClick={() => props.handleShowEmployee(props.employee)} className="btn-show-more"><i class="far fa-eye"></i> Show More</button>

                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ShowEmployees;