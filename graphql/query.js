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
