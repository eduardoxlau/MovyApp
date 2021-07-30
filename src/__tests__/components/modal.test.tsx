/* eslint-disable no-undef */
import wait from 'waait';
import { render, fireEvent } from '@testing-library/react';

import { MockedProvider } from '@apollo/client/testing';

import { GET_LISTS } from 'graphql/queries';
import { EDIT_LIST } from 'graphql/mutations';
import Modal from 'components/modal';
import { List } from 'views/trailer';
import ListMock from '__mocks__/lists.mock';

const list: List = ListMock[0];

const mocks = [
  {
    request: {
      query: EDIT_LIST,
      variables: {
        input: {
          id: 8,
          name: "Rafael's list",
          description: 'Description list',
        },
      },
    },
    result: {
      data: {
        updateList: {
          status: 'success',
        },
      },
    },
  },
  {
    request: {
      query: GET_LISTS,
    },
    result: { data: { getLists: [list] } },
    newData: () => ({ data: { getLists: [list] } }),
  },
];

describe('<Modal />', () => {
  it('should render snapshot Modal', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks}>
        <Modal />
      </MockedProvider>
    );
    await wait(0);
    expect(asFragment()).toMatchSnapshot();
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
