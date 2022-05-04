import '@testing-library/jest-dom';
import Footer from 'layout/Footer/footer';
import { screen, render } from '@testing-library/react';

describe('<Footer />', () => {
  let component;
  beforeEach(() => {
    component = <Footer />;
  });

  test('Should find footer Privacy policy', () => {
    render(component);
    const privacy = screen.getByText(/privacy policy/i);

    expect(privacy).toBeInTheDocument();
  });
});