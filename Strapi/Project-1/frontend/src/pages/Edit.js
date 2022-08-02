import React from 'react'
import { useState } from "react";
import { useHistory,useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import { API_URL } from "../config/global";

const REVIEW = gql`
query GetReview($id: ID!) {
  review(id: $id) {
    data {
      id
      attributes {
        title
        rating
        body
      }
    }
  }
}
`

export default function Edit() {
    let history = useHistory();

    const { id } = useParams()

    const [values, setValues] = useState({
        title: "",
        rating: 0,
        body: "",
    });

    const {loading, error, data} = useQuery(REVIEW, {
      variables: {id: id}
    })
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    

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

        const response = await fetch(`${API_URL}/reviews/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(structure)
        });
        

        if (!response.ok) {
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
            <h2>Edit review</h2>
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
                <input className="btn" type="submit" value="Edit review" />
            </form>
        </div>
    )
}
