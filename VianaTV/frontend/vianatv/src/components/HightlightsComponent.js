import React from 'react'
import { useQuery as UQ, gql } from "@apollo/client";

const QUERY = gql`
  query GetHeader {
  	home {
      data {
      	id
        attributes {
          header {
            id
            options {
              url
              name
          }
        }
      }
    }
  }
}
`;

export default function siteHeader() {
  const { loading, error, data } = UQ(QUERY);

  return (
    <section className="highlights">
        <div className="highlights-container">
            <div className="highlights-top">
                <h2>Destaques</h2>
                <div className="highlights-buttons">
                    <button className="btn-left"></button>
                    <button className="btn-right"></button>
                </div>
            </div>
            <div className="highlights-bottom">
                <div className="highlights-card">
                    <a href="./regional.html">
                        <img src="./img/highlight-image.jpg" alt=""></img>
                    </a>
                    <div className="highlights-content">
                        <div className="highlights-options">
                            <a href="./regional.html">Regional</a>
                            <p>7 janeiro, 2012</p>
                        </div>
                        <h2>dfagdfgadfgas</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed placeat consequatur facilis voluptas cumque voluptatem odit explicabo incidunt temporibus similique voluptatum aut tempora sint mollitia debitis molestias, labore a!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
