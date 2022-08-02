import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  } 
`

export default function SiteHeader() {
  const { loading, error, data } = useQuery(CATEGORIES)

  if (loading) return <p>Loading categories...</p>
  if (error) return <p>Error fetching categories</p>

  console.log(data)

  return (
    <nav className='categories'>
        <span>Filter reviews by category:</span>
        {data.categories.data.map(c => (
            <Link key={c.id} to={`/category/${c.id}`}>
            {c.attributes.name}
            </Link>
        ))}
    </nav>
  )
}
