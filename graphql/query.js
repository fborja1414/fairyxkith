import gql from 'graphql-tag';

export const BlogQuery = gql`
query BlogQuery{
    blogs {
      data{
        id
        attributes{
          BlogTitle
          Blog
          Note
          StartingImage{
          data{
            id
            attributes{
              url
            }
          }
        }
      
      
        }
      }
  }
  }
  `