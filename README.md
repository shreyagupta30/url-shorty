# URL Shorty
This is a service to shorten long URLs into secure hashURLs to make it easy to share. I built this to learn Graphql and how to use it Django and React. 

Right now, it is a backend service. Implementation with React with in progress. 

## Installation

1. Fork the repository
2. Clone the forked repository
``` bash
git clone https://github.com/shreyagupta30/url-shorty.git
```
3. Change into the cloned repository
4. Activate the virtuL environment
``` bash
pipenv shell
```
*To install pipenv*
```bash
    pip install pipenv
```
5. Run the server
``` bash
python3 manage.py runserver
```
6. You should be able to see the Graphiql online IDE at 
``` localhost:8000/graphql ```

7. You can check the working of the service by making the mutation
``` 
mutation {
  createUrl(fullUrl:"https://github.com/shreyagupta30/url-shorty") {
    url {
      id
      fullUrl
      urlHash
      clicks
      createdAt
    }
  }
}
```
Click the play button to see the Output, something like this:
```
{
    "data: {
     "urls": [
         {
        "id": "1",
        "fullUrl": "https://github.com/shreyagupta30/url-shorty",
        "urlHash": "fb1ac17dee",
        "clicks": 0,
        "createdAt": "2020-08-18T07:11:11.520670+00:00"
      },
     ]
    }
}
```
This will create the changes in the databases.
To fetch the changed URL, run the query

``` 
query {
  urls {
    id
    fullUrl
    urlHash
    clicks
    createdAt
  }
}
```
This is show the above mutation that your created.

Hope this helps, thank you! :D
