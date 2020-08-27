import React from 'react';
import fakeData from '../../fakeData';
import './School.css'
import { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart'


const School = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);
    
    const handleAddCourse = (course) => {
        console.log('clicked', course);
        const newCart = [...cart, course];
        setCart(newCart);
        console.log(cart);
    }

    return (
        <div className="container-fluid school-container">
           <div className="course-container">
               <div className="row">                   
                    {
                        courses.map(crs=>(
                            <div className="col-md-4">
                            <Course course={crs} handleAddCourse = {handleAddCourse}></Course>
                        </div>)                       
                        )
                    }                  
               </div>               
           </div>
           <div className="cart-container">
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default School;