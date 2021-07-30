/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import { render, fireEvent } from '@testing-library/react';

import moviesMock from '__mocks__/movies.mock';
import Card, { ItemInterface } from 'components/card';

const movie: ItemInterface = moviesMock[0];

describe('<Card />', () => {
  it('should render snapshot card wide', () => {
    const { asFragment } = render(<Card item={movie} type="wide" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render snapshot card large', () => {
    const { asFragment } = render(<Card item={movie} type="large" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should handler when clicked card', () => {
    const onSelected = jest.fn();
    const { getByTestId } = render(
      <Card item={moviesMock[0]} onSelected={onSelected} />
    );
    const card = getByTestId('card');
    fireEvent.click(card);
    expect(onSelected).toHaveBeenCalled();
  });
  it('should show up triangle icon when card is selected', () => {
    const { getByTestId } = render(
      <Card item={moviesMock[0]} idSelected={moviesMock[0].id} border />
    );
    const image = getByTestId('border-active');

    expect(image).toBeInTheDocument();
  });
});
