import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Reports from 'pages/Reports/reports';
import { getTotalAmount, numberWithCommas } from 'helper/utils';

let filterValues = {
  project: "",
  gateway: "",
  fromDate: "",
  toDate: ""
}

const generatedReport = [
  {
    "name": "Project 1",
    "data": [
      {
        "date": "2021-04-21",
        "gateway": "Gateway 2",
        "transactionId": "6149cf56625a7464b7ec345a",
        "amount": 327.72
      },
      {
        "date": "2021-07-18",
        "gateway": "Gateway 2",
        "transactionId": "6149cf565833d66717b7fd5e",
        "amount": 403.08
      }
    ]
  },
  {
    "name": "Project 2",
    "data": [
      {
        "date": "2021-04-11",
        "gateway": "Gateway 1",
        "transactionId": "6149cf567833e57669e60455",
        "amount": 2663.69
      },
      {
        "date": "2021-07-22",
        "gateway": "Gateway 1",
        "transactionId": "6149cf5632f0bb5b47d428e8",
        "amount": 1779.41
      }
    ]
  }
];

describe('<Reports />', () => {

  test('display noReports component when no report is generated', () => {
    render(
      <Router>
        <Reports generatedReport={[]}
          filterValues={filterValues}
          loading={false} />
      </Router>);

    const noReports = screen.getByText(/no reports/i);
    expect(noReports).toBeInTheDocument();
  });

  test('should display all fetched projects', () => {
    const { container } = render(
      <Router>
        <Reports generatedReport={generatedReport}
          filterValues={filterValues}
          loading={false} />
      </Router>);

    const projectsRows = container.getElementsByClassName('list-item-header');

    expect(projectsRows.length).toBe(generatedReport.length);
  });

  test('should display the total amout', () => {

    const component = render(
      <Router>
        <Reports generatedReport={generatedReport}
          filterValues={filterValues}
          loading={false} />
      </Router>);

    const totalAmounts = numberWithCommas(getTotalAmount(generatedReport));
    const totalAmountsContent = component.getByTestId('total-amounts');

    expect(totalAmountsContent).toHaveTextContent(totalAmounts);
  });
});
