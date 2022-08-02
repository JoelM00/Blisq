import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from "@apollo/client";
import ReactMarkdown from 'react-markdown' 
import { useHistory, Link } from "react-router-dom";

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
        categories {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
`

export default function ReviewDetails() {
  let history = useHistory();

  const { id } = useParams()
  const {loading, error, data} = useQuery(REVIEW, {
    variables: {id: id}
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/reviews/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.log("Something went wrong");
    } else {
        history.push("/");
    }
  }

  return (
    <div className='review-container'>
      <div className="review-card">
        <div className="rating">{data.review.data.attributes.rating}</div>
        <h2>{data.review.data.attributes.title}</h2>
        
        {
          data.review.data.attributes.categories.data.map(c => (
            <small key={c.id}>{c.attributes.name}</small>
          ))
        }

        <ReactMarkdown> 
          {data.review.data.attributes.body}
        </ReactMarkdown>

        <img src="" alt="" />

      </div>
      <div className='buttons-container'>
        <div className="delete-btn">
          <button className="" onClick={handleDelete}>Delete</button>
        </div>
        <div className="edit-btn">
          <Link to={`/edit/${id}`}>Edit</Link>
        </div>
      </div>
    </div>
  )
}
