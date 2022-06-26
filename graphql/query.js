import gql from 'graphql-tag';

export const BlogQuery = gql`
query BlogQuery{
  blogs (pagination: {limit: 100 } ) {
    data{
      id
      attributes{
        BlogTitle
        Blog
        BlogText
        Note
        NoteText
        NoteColor
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
