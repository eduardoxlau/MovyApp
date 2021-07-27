/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import wait from 'waait';
import renderer from 'react-test-renderer';
import { render, fireEvent, act } from '@testing-library/react';

import { MockedProvider } from '@apollo/react-testing';

import { GET_LISTS } from 'graphql/queries';
import { EDIT_LIST } from 'graphql/mutations';
import Modal from 'components/modal';

const list = { id: 1, name: 'test', description: 'test' };
const mocks = [
  {
    request: {
      query: EDIT_LIST,
      variables: { input: list },
    },
    result: { data: { createList: list } },
  },
  {
    request: {
      query: GET_LISTS,
    },
    result: { data: { getLists: [list] } },
  },
];

describe('<Modal />', () => {
  it('should render snapshot Modal', () => {
    const tree = renderer
      .create(
        <MockedProvider mocks={mocks}>
          <Modal />
        </MockedProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should submit form', async () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Modal onClose={onClose} edit list={list} />
      </MockedProvider>
    );
    fireEvent.click(getByText(/Save/i));
    await wait(200);
    expect(onClose).toHaveBeenCalled();
  });
});
