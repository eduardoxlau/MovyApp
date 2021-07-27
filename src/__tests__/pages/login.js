/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import wait from 'waait';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { LOGIN } from 'graphql/mutations';
import Login from 'views/login';

const user = { email: 'test@gmail', password: 'password' };

const mocks = [
  {
    request: {
      query: LOGIN,
      variables: { input: user },
    },
    result: { data: { login: { access_token: 'XXXXXX', user } } },
  },
];

describe('<Login />', () => {
  const history = createMemoryHistory();
  it('should render snapshot Login', () => {
    const tree = renderer
      .create(
        <MockedProvider mocks={mocks}>
          <Login />
        </MockedProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should submit form login', async () => {
    const { getByText } = render(
      <Router history={history}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Login />
        </MockedProvider>
      </Router>
    );
    fireEvent.change(document.querySelector('input[name="email"]'), {
      target: { value: user.email },
    });

    fireEvent.change(document.querySelector('input[name="password"]'), {
      target: { value: user.password },
    });
    fireEvent.click(getByText('Iniciar sesión'));
    await wait(200);
    await expect(history.length).toBe(2);
  });
});
