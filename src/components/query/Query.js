import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

class fullUrl extends React.Component {
  
  QUERY_URL = gql`
  query {
      urls {
        id
        fullUrl
        urlHash
        clicks
        createdAt
      }
  }`;
  

  render(
  fullURL= (prop) =>{
    const { data, loading } = useQuery(
      this.QUERY_URL, {
        pollInterval: 500 
      }
    );
    
    if (loading) return <p> Loading... </p>;
    <>
    return data.users.map(({ id, fullUrl, urlHash, createdAt, clicks }) => (
      <div key={id}>
        <p>
          History - {id}
          Full Url = {fullUrl}
          Shortened url = http://localhost:8000/{urlHash}
          Created at: {createdAt} 
          Number of clicks: {clicks}
        </p>
      </div>
    ));
    </>
    }
  )
};

export default fullURL;