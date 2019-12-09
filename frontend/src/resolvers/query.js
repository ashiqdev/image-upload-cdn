import gql from 'graphql-tag';

export const GET_IMAGE_QUERY = gql `
  query GET_IMAGE_QUERY($id: ID!) {
    getImage(id: $id) {
      original
      w200
    }
  }

`;

export const GET_IMAGES_QUERY = gql `
  query GET_IMAGES_QUERY {
    getImages {
      original
      w200
    }
  }
`;