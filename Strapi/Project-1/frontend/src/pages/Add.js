import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router-dom";


import { API_URL } from "../config/global";


export default function Add() {
    let history = useHistory();

    const [values, setValues] = useState({
        title: "",
        rating: "",
        body: "",
    });
    
    const { title, rating, body } = values;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emptyFieldCheck = Object.values(values).some(
            (element) => element === ""
        );

        
        if (emptyFieldCheck) {
            alert("Preencha todos os campos!")
        }

        var structure = {
            data: values
        }        

        const response = await fetch(`${API_URL}/reviews`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(structure)
        });
        

        if (!response.ok) {
            if (response.status === "403" || response.status === "401") {
                console.log("No token Provided");
                return;
            }
            console.log("Something went wrong");
        } else {
            history.push("/");
        }
    };

    const handleInputChange = async (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    return (
        <div>
            <h2>Add a new review</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" id="title" value={title} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <input name="rating" type="number" id="rating" value={rating} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input name="body" type="text" id="body" value={body} onChange={handleInputChange}/>
                </div>
                <input className="btn" type="submit" value="Add Review" />
            </form>
        </div>
    )
}
