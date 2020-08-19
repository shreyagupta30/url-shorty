import React from 'react';
import { useQuery, useMutation } from 'react-apollo';
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
const  CreateURL= gql`
mutation {
    createUrl($fullUrl: String!) {
      url (Enter Long URL: @fullUrl) { 
        id
        fullUrl
        urlHash
        clicks
        createdAt
      }
    }
  }`;

export function CreateURL() {  

    let inputfullUrl;  
    const [CreateURL, { data }  ] = useMutation(FULL_URL);  
    return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          SHORTEN_URL({ variables: {
            fullUrl: inputfullUrl.value,
        } });        
        
        inputfullUrl.value = '';
        window.location.reload();      }}
      style = {{ marginTop: '2em', marginBottom: '2em' }}
     >     <label>Name: </label>
     <input
       ref={node => {
         inputName = node;
       }}
       style={{ marginRight: '1em' }}
     />     <label>Last Name: </label>
     <input
       ref={node => {
         inputLastName = node;
       }}
       style={{ marginRight: '1em' }}
     />
     
     <button type="submit" style={{ cursor: 'pointer' }}>Shorten</button>
    </form>
   </div>
  );}

export function URLInfo() {
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