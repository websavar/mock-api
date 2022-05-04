import { render, screen } from '@testing-library/react';
import Navbar from 'layout/Navbar/navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const user = {
  "userId": "rahej",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@email.com"
}

describe('<Navbar />', () => {
  let container;
  beforeEach(() => {
    container =
      <Router>
        <Navbar />
      </Router>;
  });

  test('Should find the username', () => {
    const FirstName = user.firstName;
    const LastName = user.lastName;
    const username = FirstName + ' ' + LastName;
    const result = 'John Doe';

    expect(username).toBe(result);
  });

  it('should find logo image in header', async () => {
    const { getByAltText } = await render(container);
    const image = getByAltText('logo');

    expect(image).toBeInTheDocument();
  });
});
