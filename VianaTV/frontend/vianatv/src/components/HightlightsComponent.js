import { useQuery as UQ, gql } from "@apollo/client";
import { API_URL } from '../config/global';

const QUERY = gql`
  query GetHeader {
  	home {
      data {
        attributes {
          highlights {
          	titulo 
          	image {
              data {
                attributes {
                  url
              	}
            	}
          	}
            card {
              title
              description
              date
              image {
                data {
                	attributes {
                  	url
              		}
            		}
              }
              button {
                url
                name
              }
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

  return (
    <section className="highlights">
        <div className="highlights-container">
            <div className="highlights-top">
                <h2>{data.home.data.attributes.highlights.titulo}</h2>
                <div className="highlights-buttons">
                    <button className="btn-left"> <img src={API_URL + data.home.data.attributes.highlights.image.data.attributes.url} alt=""></img></button>
                    <button className="btn-right"><img src={API_URL + data.home.data.attributes.highlights.image.data.attributes.url} alt=""></img></button>
                </div>
            </div>
            <div className="highlights-bottom">
              {
                data.home.data.attributes.highlights.card.map(c => (
                  <div className="highlights-card">
                    <a href="./regional.html">
                        <img src={API_URL + c.image.data.attributes.url} alt=""></img>
                    </a>
                    <div className="highlights-content">
                        <div className="highlights-options">
                            <a href={c.button.url}>{c.button.name}</a>
                            <p>{c.date}</p>
                        </div>
                        <h2>{c.title}</h2>
                        <p>{c.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
    </section>
  )
}
