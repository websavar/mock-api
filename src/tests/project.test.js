import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Project } from 'components';
import { getProjectTotalAmount, numberWithCommas } from 'helper/utils';
import { BrowserRouter as Router } from 'react-router-dom';

const project = {
  "name": "Project 1",
  "data": [
    {
      "date": "2021-09-10",
      "gateway": "Gateway 2",
      "transactionId": "6149cf56b561e56a5358f033",
      "amount": 100.10
    },
    {
      "date": "2021-09-16",
      "gateway": "Gateway 1",
      "transactionId": "6149cf564334774f024da96e",
      "amount": 200.2
    },
    {
      "date": "2021-09-12",
      "gateway": "Gateway 2",
      "transactionId": "6149cf56d7ba96e40620e0cd",
      "amount": 3347.65
    }
  ]
};

describe('<Project />', () => {
  let component;
  beforeEach(() => {
    component = render(
      <Router>
        <Project project={project} />
      </Router>);
  });

  test('Should display the project name', () => {
    const projectName = component.getByTestId('project-name');

    expect(projectName).toHaveTextContent(project.name);
  });

  test('Should display the total amout of a project', () => {
    const totalAmount = numberWithCommas(getProjectTotalAmount(project));
    const totalAmountContent = component.getByTestId('total-amount');

    expect(totalAmountContent).toHaveTextContent(totalAmount);
  });

  test('Should display all project objects', () => {
    const { container } = component;
    const firstItemHeader = container.getElementsByClassName('list-item-header')[0];
    fireEvent.click(firstItemHeader);

    const tableRows = container.getElementsByClassName('table-row');

    expect(tableRows.length).toBe(project.data.length);
  });
});

