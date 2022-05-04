import { getTotalAmount } from 'helper/utils';
import { ReportsInterface } from 'interfaces';
import { Currency } from 'constants/index';
import { Project, NoReports } from 'components';
import Chart from 'components/Chart/chart';

import { CircularProgress } from 'mui';
import './reports.scss';

const Reports: React.FC<ReportsInterface> = ({
  generatedReport,
  filterValues,
  loading
}) => {
  return (
    <>
      {!generatedReport.length ?
        <div className='no-reports'>
          <NoReports />
        </div> :

        <>
          <div className="row projects-container">
            <div className="col-12 fw-bold mb-4">
              {filterValues.project ? filterValues.project : 'All Projects'} |
              {filterValues.gateway ? filterValues.gateway : ' All gateways'}
            </div>

            {loading ?
              <>
                <div className="overlay"></div>
                <div className='col-12 d-flex justify-content-center'> <CircularProgress /> </div>
              </> :

              generatedReport.map(project =>
                <Project project={project} key={project.name} />
              )
            }
          </div>

          <div className="row total-amount">
            TOTAL: {getTotalAmount(generatedReport) + Currency}
          </div>

          {/* <Chart data={generatedReport} /> */}
        </>
      }
    </>
  )
}


export default Reports;