import gql from 'graphql-tag';

export const BlogQuery = gql`
query BlogQuery{
  pagination: { limit: 100 }) 
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
          maxWidth
          NoteColor
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
