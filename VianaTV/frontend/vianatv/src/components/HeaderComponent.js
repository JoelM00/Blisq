import React from 'react'
import { useQuery as UQ, gql } from "@apollo/client";
import { API_URL } from '../config/global';

const QUERY = gql`
 query GetHeader {
  	home {
      data {
      	id
        attributes {
          header {
            id
            logo {
              data {
                attributes {
                  url
                }
              }
            }
            search {
              data {
                attributes {
                  url
                }
              }
            }
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
  if (loading) return console.log("Loading...");
  if (error) return console.log("Error...");

  console.log(data)

  return (
    <header className="header">
        <div className="header-container">
            <div className="header-component">
                <div className="header-logo">
                    <a href="./index.html">
                        <img src={API_URL + data.home.data.attributes.header.logo.data.attributes.url} alt="viana logo"></img>
                    </a>
                </div>
                <div className="header-options">
                    <ul>
                      {
                        data.home.data.attributes.header.options.map(o => (
                          <li><a href={o.url}>{o.name}</a></li>
                        ))
                      }
                    </ul>
                </div>
            </div>
            <div className="header-component">
                <div className="header-live">
                    <a href="./live.html">LIVE</a>
                </div>
                <div className="header-search">
                    <input style={{ backgroundImage: `url()` }} type="text" placeholder="Pesquisa"></input>
                </div>
            </div>
        </div>
    </header>
  )
}
