import api from 'api';
import { ReportDataInterface, FilterObjectInterface } from 'interfaces';
import { queryClient } from 'App';

const fetchData = async ({ queryKey }: { queryKey: any }) => {
  const filterObj = queryKey[1];
  const report: ReportDataInterface[] = await api.getReport(filterObj);
  return report;
}

export const fetchReport = async (filterObj: FilterObjectInterface) => {
  return queryClient.fetchQuery(['report', filterObj], fetchData);
}