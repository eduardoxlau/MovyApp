/* eslint-disable no-undef */
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

// eslint-disable-next-line import/no-unresolved
import moviesMock from '__mocks__/movies';
import Card from 'components/card';

describe('<Card />', () => {
  it('should render snapshot card wide', () => {
    const tree = renderer
      .create(<Card item={moviesMock[0]} type="wide" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render snapshot card large', () => {
    const tree = renderer
      .create(<Card item={moviesMock[0]} type="large" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
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
