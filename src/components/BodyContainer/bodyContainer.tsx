import { useState } from 'react';
import Routes from 'Routes';

import { fetchReport } from 'hooks/fetchReport';
import { useFetchProjectsAndGateways } from 'hooks/useFetchProjectsAndGateways';

import { sortByName, getProjectId, getGatewayId, groupById } from 'helper/utils';
import { FilterValuesInterface, FilterObjectInterface, GeneratedReportsInterface } from 'interfaces';
import { Default_Dates } from 'constants/index';

import { ReportsHeader } from 'components';
import MenuButton from 'components/MenuButton/menuButton';

const BodyContainer: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [projects, gateways] = useFetchProjectsAndGateways();
  const [generatedReport, setGeneratedReport] = useState<GeneratedReportsInterface[]>([]);
  const [filterValues, setFilterValues] = useState<FilterValuesInterface>({
    project: '',
    gateway: '',
    fromDate: '',
    toDate: ''
  });

  const changeFilterHandle = (key: string) =>
    (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFilterValues({ ...filterValues, [key]: e.target.value });

  const generateReportHandle = async () => {
    setLoading(true);
    const filterObj: FilterObjectInterface = {
      projectId: getProjectId(projects, filterValues.project),
      gatewayId: getGatewayId(gateways, filterValues.gateway),
      from: filterValues.fromDate ? filterValues.fromDate : Default_Dates.From,
      to: filterValues.toDate ? filterValues.toDate : Default_Dates.To
    };
    const report = await fetchReport(filterObj);
    setLoading(false);

    const generatedReport: GeneratedReportsInterface[] = groupById(projects, gateways, report);
    setGeneratedReport(sortByName(generatedReport));
  }

  return (
    <main className='d-flex flex-column flex-md-row'>
      <div className='icon-menus d-flex flex-row flex-md-column mx-0 mx-md-4 mb-2'>
        <MenuButton type='reports' />
        <MenuButton type='chart' />
      </div>
      <div className='container-fluid'>
        <ReportsHeader
          filterValues={filterValues}
          changeFilterHandle={changeFilterHandle}
          generateReportHandle={generateReportHandle}
          projects={projects}
          gateways={gateways}
          loading={loading}
        />

        <Routes
          generatedReport={generatedReport}
          filterValues={filterValues}
          loading={loading}
        />
      </div>
    </main>
  );
}

export default BodyContainer;