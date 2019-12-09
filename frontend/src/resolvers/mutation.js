import gql from "graphql-tag";

export const CREATE_IMAGE_MUTATION = gql`
  mutation CREATE_IMAGE_MUTATION ($original:String! $w200: String!) {
    createImage(original: $original, w200: $w200) {
      id
    }
  }
`;