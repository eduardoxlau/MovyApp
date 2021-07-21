import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser {
    getUser {
      id
      email
      full_name
      admin
      lists {
        description
        movies {
          id
          title
        }
      }
    }
  }
`;
export const GET_MOVIES = gql`
  query GetMovies {
    getMovies(limit: 20) {
      items {
        id
        title
        overview
        card_url
        poster_url
        backdrop_url
        stars
        genres {
          name
        }
      }
    }
  }
`;

export const GET_MOVIES_PAGINATE = gql`
  query GetMovies($page: Float, $limit: Float) {
    getMovies(page: $page, limit: $limit) {
      meta {
        totalPages
        currentPage
      }
      items {
        id
        title
        overview
        card_url
        poster_url
        backdrop_url
        stars
        genres {
          name
        }
      }
    }
  }
`;

export const GET_LISTS = gql`
  query GetLists {
    getLists {
      name
      movies {
        id
        title
        card_url
      }
    }
  }
`;
