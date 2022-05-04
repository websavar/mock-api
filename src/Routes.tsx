import { useRoutes } from 'react-router-dom';
import { ReportsInterface } from 'interfaces';

import Reports from "pages/Reports/reports";
import Page404 from "pages/page404";

const Routes: React.FC<ReportsInterface> = ({ generatedReport, filterValues, loading }) => useRoutes([
  {
    path: '/',
    element: <Reports
      generatedReport={generatedReport}
      filterValues={filterValues}
      loading={loading} />
  },
  {
    path: '/reports',
    element: <Reports
      generatedReport={generatedReport}
      filterValues={filterValues}
      loading={loading} />
  },
  {
    path: '/chart',
    element: <Reports
      generatedReport={generatedReport}
      filterValues={filterValues}
      loading={loading} />
  },
  {
    path: '*',
    element: <Page404 />
  },
]);

export default Routes;

