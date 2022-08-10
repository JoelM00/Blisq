import React from 'react'
import { useQuery as UQ, gql } from "@apollo/client";
import { API_URL } from '../config/global';

const BANNER = gql`
  query GetBanner {
  	home {
      data {
      	id
        attributes {
          banner {
            id
            background {
              data {
                attributes {
                  url
                }
              }
            }
            card {
              title
              date
              time
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            links {
              name
              url
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
      } 
      }
    }
  }
}
`;

export default function siteBanner() {
  const { loading, error, data } = UQ(BANNER);
  if (loading) return console.log("Loading...")
  if (error) return console.log("Error...")

  return (
    <section className="banner" style={{ backgroundImage: `url(${API_URL + data.home.data.attributes.banner.background.data.attributes.url})` }}>
        <div className="banner-top">
            <div className="banner-card">
                <p className="banner-title">{data.home.data.attributes.banner.card.title}</p>
                <div className="banner-infos">
                    <p>{data.home.data.attributes.banner.card.date}</p>
                    <p>{data.home.data.attributes.banner.card.time} min. leitura</p>
                </div>
            </div>
        
        </div>
        <div className="banner-bottom">
            <div className="banner-social">
                <ul>
                  {
                    data.home.data.attributes.banner.links.map(m => (
                      <li><a href={m.url}><img src={API_URL + m.image.data.attributes.url} alt={m.name}></img></a></li>
                    ))
                  }
                </ul>
            </div>
        </div>
    </section>
  )
}
