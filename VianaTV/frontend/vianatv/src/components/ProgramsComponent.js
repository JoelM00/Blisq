import React from 'react'
import { useQuery as UQ, gql } from "@apollo/client";
import { API_URL } from '../config/global';

const BANNER = gql`
  query GetPrograms {
  	home {
      data {
      	id
        attributes {
          
        }
      }
    }
  }
`;

export default function sitePrograms() {
  const { loading, error, data } = UQ(BANNER);
  if (loading) return console.log("Loading...")
  if (error) return console.log("Error...")

  console.log(data)

  return (
    <section class="programs">
      <div class="programs-container">
        <div class="programs-top">
          <h2>Programas de Autor</h2>
          <div class="programs-buttons">
            <button class="btn-left"></button>
            <button class="btn-right"></button>
          </div>
        </div>
        <div class="programs-bottom">
          <div class="programs-card">
            <a href="./regional.html">
              <img src="./img/highlight-image.jpg" alt=""></img>
            </a>
            <div class="programs-content">
              <h2>dfagdfgadfgas</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed placeat consequatur facilis voluptas cumque voluptatem odit explicabo incidunt temporibus similique voluptatum aut tempora sint mollitia debitis molestias, labore a!</p>
              <div>
                <p>Mais Episódios</p>
              </div>
            </div>
          </div>
        </div>
        <div class="programs-news">
            <h2>Novos Episódios</h2>
            <div class="programs-list">
              <div class="programs-item">
                  <h3>Espaço Deco Episódio 1</h3>
                  <p>
                      <span class="programs-author">Espaço Deco</span> - <span class="programs-time">30min</span>
                  </p>
              </div>
            </div>
          </div>
      </div>
  </section>
  )
}
