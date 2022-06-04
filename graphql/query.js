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
          NoteText
          BlogText
          BlogDate
          position
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
