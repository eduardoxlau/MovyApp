/* eslint-disable no-undef */
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Notification from 'components/notification';

describe('<Notification />', () => {
  it('should render snapshot Notification', () => {
    const tree = renderer.create(<Notification />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should appear Notification', () => {
    render(<Notification message="text" />);
    expect(document.querySelector('h1')).toBeVisible();
  });
  it('shouldn"t appear Notification', () => {
    jest.useFakeTimers();
    render(<Notification />);
    jest.runAllTimers();
    expect(document.querySelector('.hidden')).toBeInTheDocument();
  });
});
