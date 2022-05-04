import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { NoReports } from 'components';

describe('<NoReports />', () => {
  let component;
  beforeEach(() => {
    component = <NoReports />;
  });

  it('should provide expected style for image background', async () => {
    const { getByAltText } = await render(component);
    const image = getByAltText('no-reports');

    expect(image).toHaveAttribute('style', 'max-width: 400px; width: 100%;')
  });
});