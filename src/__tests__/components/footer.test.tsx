/* eslint-disable no-undef */
import { render } from '@testing-library/react';

import Footer from 'components/footer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({ pathname: '/' }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('<Footer />', () => {
  it('should render snapshot footer', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
