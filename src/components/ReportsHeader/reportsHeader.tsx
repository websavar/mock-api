import { ReportsHeaderInterface } from 'interfaces';
import { Default_Dates } from 'constants/index';
import { DropdownList } from 'components';
import { CircularProgress, TextField, Button } from 'mui';
import './reportsHeader.scss';

const ReportsHeader: React.FC<ReportsHeaderInterface> = ({
  filterValues,
  changeFilterHandle,
  generateReportHandle,
  projects, gateways,
  loading
}) => {
  return (
    <div className='row reports-header'>
      <div className='col-12 col-lg-4 g-0'>
        <h2>Reports</h2>
        <h4>Easily generate a report of your transactions</h4>
      </div>

      <div className="col-12 col-lg-8 d-flex justify-content-lg-end mt-3 mt-lg-0 g-0 flex-wrap flex-md-nowrap">
        {(!projects.length || !gateways.length) ?
          <div className='col-12 d-flex justify-content-center'>
            <CircularProgress />
          </div> :
          <>
            <DropdownList
              value={filterValues.project}
              list={projects.map(project => project.name)!}
              onChangeValue={changeFilterHandle('project')}
              defaultValue='All projects'
              name='projects'
            />
            <DropdownList
              value={filterValues.gateway}
              list={gateways.map(gateway => gateway.name)!}
              onChangeValue={changeFilterHandle('gateway')}
              defaultValue='All gateways'
              name='gateways'
            />
            <TextField
              className='date-picker'
              type='date'
              label='From date'
              value={filterValues.fromDate}
              onChange={changeFilterHandle('fromDate')}
              inputProps={{ min: Default_Dates.From }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              className='date-picker'
              type='date'
              label='To date'
              value={filterValues.toDate}
              onChange={changeFilterHandle('toDate')}
              inputProps={{ max: Default_Dates.To }}
              InputLabelProps={{ shrink: true }}
            />
            <Button
              variant='contained'
              id='generate-report'
              color='primary'
              size='small'
              onClick={generateReportHandle}
              disabled={loading}
            >
              Generate report
            </Button>
          </>
        }
      </div>
    </div>
  )
}

export default ReportsHeader;
