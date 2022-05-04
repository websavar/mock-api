import { useLocation } from 'react-router-dom';
import { ReportsInterface, ChartDataInterface } from 'interfaces';
import { Currency } from 'constants/index';
import { getTotalAmount, getProjectTotalAmount, numberWithCommas } from 'helper/utils';
import { Project, NoReports, Chart } from 'components';

import { CircularProgress } from 'mui';
import './reports.scss';

const Reports: React.FC<ReportsInterface> = ({
  generatedReport,
  filterValues,
  loading
}) => {

  const chartData: ChartDataInterface[] = [];
  for (let i in generatedReport) {
    const newObj: ChartDataInterface = {
      name: generatedReport[i].name,
      value: Number(getProjectTotalAmount(generatedReport[i]).toFixed())
    }
    chartData.push(newObj)
  };

  const showChart: boolean = useLocation().pathname === '/chart' ? true : false;

  return (
    <>
      {generatedReport && !generatedReport.length ?
        <div className='no-reports'>
          <NoReports />
        </div> :

        <div className='row report-cpntainer'>
          <div className={(showChart ? "col-md-6 " : "") + "col-12 g-0"}>
            <div className="projects-container">
              <div className="col-12 fw-bold mb-4">
                {filterValues?.project ? filterValues.project : 'All Projects'} |
                {filterValues?.gateway ? filterValues.gateway : ' All gateways'}
              </div>

              {loading ?
                <>
                  <div className="overlay"></div>
                  <div className='col-12 d-flex justify-content-center'><CircularProgress /></div>
                </> :

                generatedReport!.map(project =>
                  <Project project={project} key={project.name} />
                )
              }
            </div>

          </div>

          <div className={(showChart ? "col-md-6 " : "") + "col-12 pe-0"}>
            {showChart && <Chart data={chartData} />}

            <div className="info-container total-amount" data-testid='total-amounts'>
              TOTAL: {numberWithCommas(getTotalAmount(generatedReport))} {Currency}
            </div>
          </div>

        </div>
      }
    </>
  )
}


export default Reports;