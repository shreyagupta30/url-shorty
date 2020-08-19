import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_URL = gql`
query {
    urls {
      id
      fullUrl
      urlHash
      clicks
      createdAt
    }
}`;

const fullURL=() =>{
  
  const { data, loading } = useQuery(
    QUERY_URL, {
      pollInterval: 500 
    }
  );
  
  if (loading) return <p> Loading... </p>;
   
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
}

export default fullURL;