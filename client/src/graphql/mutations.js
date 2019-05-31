export const CREATE_PIN_MUTATION = `
  mutation CreatePin($title: String!, $content: String!, $image: String!, $latitude: Float!, $longitude: Float!) {
    createPin(input: {
      title: $title,
      content: $content,
      image: $image,
      latitude: $latitude,
      longitude: $longitude
    }) {
      title
      content
      image
      latitude
      longitude
      author {
        _id
        name
        email
        picture
      }
    }
  }
`;

export const DELETE_PIN_MUTATION = `
  mutation($pinId: ID!) {
    deletePin(pinId: $pinId) {
      _id
    }
  }
`;
