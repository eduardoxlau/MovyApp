/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import wait from 'waait';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { render, fireEvent } from '@testing-library/react';

import {
  REMOVE_MOVIE_LIST,
  ADD_MOVIE_LIST,
  SEEN_MOVIE,
} from 'graphql/mutations';
import movies from '__mocks__/movies.mock';
import lists from '__mocks__/lists.mock';
import { GET_MOVIE, GET_LISTS, GET_MOVIES_SEEN } from 'graphql/queries';
import Trailer from 'views/trailer';

let queryCalled = false;

const mocks = [
  {
    request: {
      query: REMOVE_MOVIE_LIST,
    },
    result: { data: { status: 'success' } },
  },
  {
    request: {
      query: ADD_MOVIE_LIST,
      variables: { input: { listId: 8, movieId: 143 } },
    },
    result: { data: { status: 'success' } },
  },
  {
    request: {
      query: SEEN_MOVIE,
      variables: { movieId: 143 },
    },
    result: {
      data: { status: 'success' },
    },
  },
  {
    request: {
      query: GET_MOVIE,
      variables: {
        id: 1,
      },
    },
    result: { data: { getMovie: movies[0] } },
  },
  {
    request: {
      query: GET_LISTS,
    },
    newData: () => {
      if (queryCalled) {
        const newList = lists;
        newList[0].movies = [movies[0]];
        return { data: { getLists: newList } };
      }
      return { data: { getLists: lists } };
    },
  },
  {
    request: {
      query: GET_MOVIES_SEEN,
    },
    result: { data: { getMoviesSeen: movies } },
  },
];

describe('<Home />', () => {
  const history = createMemoryHistory({ initialEntries: ['/trailer/1'] });

  it('should render snapshot Home', async () => {
    const { asFragment } = render(
      <MockedProvider
        mocks={mocks}
        defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
      >
        <Router history={history}>
          <Route path="/trailer/:id">
            <Trailer />
          </Route>
        </Router>
      </MockedProvider>
    );
    await wait(0);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should allow watch video iframe', async () => {
    const { getByTestId } = render(
      <MockedProvider
        mocks={mocks}
        defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
      >
        <Router history={history}>
          <Route path="/trailer/:id">
            <Trailer />
          </Route>
        </Router>
      </MockedProvider>
    );
    await wait(0);
    const video = getByTestId('play-video');
    fireEvent.click(video);
    await wait(200);
    expect(video).not.toBeVisible();
  });
  it('should add movie to list', async () => {
    const { getAllByTestId, getByText } = render(
      <MockedProvider
        mocks={mocks}
        defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
      >
        <Router history={history}>
          <Route path="/trailer/:id">
            <Trailer />
          </Route>
        </Router>
      </MockedProvider>
    );
    await wait(0);
    const movie = getAllByTestId('user-list')[0];
    fireEvent.click(movie);
    queryCalled = true;
    await wait(200);
    const removeButton = getByText('Remove to list');
    expect(removeButton).toBeVisible();
  });
});
