/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import wait from 'waait';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter, Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import movies from '__mocks__/movies.mock';
import { GET_LISTS, GET_MOVIES, GET_MOVIES_SEEN } from 'graphql/queries';
import Home from 'views/home';

const mocks = [
  {
    request: {
      query: GET_LISTS,
    },
    result: { data: { getlists: [] } },
  },
  {
    request: {
      query: GET_MOVIES,
    },
    result: { data: { getMovies: { items: movies } } },
  },
  {
    request: {
      query: GET_MOVIES_SEEN,
    },
    result: { data: { getMoviesSeen: movies } },
  },
];

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

describe('<Home />', () => {
  const history = createMemoryHistory();
  it('should render snapshot Home', async () => {
    const { asFragment } = render(
      <MockedProvider
        mocks={mocks}
        defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
      >
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </MockedProvider>
    );
    await wait(0);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should redirect when clicked card', async () => {
    const { getAllByTestId } = render(
      <MockedProvider
        mocks={mocks}
        defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
      >
        <Router history={history}>
          <Home />
        </Router>
      </MockedProvider>
    );
    await wait(0);
    const card = getAllByTestId('card')[0];
    fireEvent.click(card);
    await wait(200);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe(`/trailer/${movies[0].id}`);
  });
});
