import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      access_token
      user {
        id
        email
        full_name
        admin
        photo_path
      }
    }
  }
`;
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      full_name
      admin
      photo_path
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      status
    }
  }
`;

export const REMOVE_USER = gql`
  mutation DeleteUser {
    deleteUser {
      status
    }
  }
`;

export const CREATE_LIST = gql`
  mutation CreateList($input: CreateListInput!) {
    createList(input: $input) {
      id
      name
      description
    }
  }
`;

export const EDIT_LIST = gql`
  mutation UpdateList($input: UpdateListInput!) {
    updateList(input: $input) {
      status
    }
  }
`;

export const REMOVE_LIST = gql`
  mutation DeleteList($id: Float!) {
    deleteList(id: $id) {
      status
    }
  }
`;

export const REMOVE_MOVIE_LIST = gql`
  mutation RemoveMovieToList($input: ListMovieInput!) {
    removeMovieToList(input: $input) {
      status
    }
  }
`;

export const ADD_MOVIE_LIST = gql`
  mutation AddMovieToList($input: ListMovieInput!) {
    addMovieToList(input: $input) {
      status
    }
  }
`;

export const SEEN_MOVIE = gql`
  mutation seenMovie($movieId: Float!) {
    seenMovie(movieId: $movieId) {
      status
    }
  }
`;
