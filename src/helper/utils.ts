import { ProjectsInterface, GatewaysInterface, GeneratedReportsInterface, ReportDataInterface } from 'interfaces';

export const networkLogger = (response: any) => {
  if (response?.config?.url) {
    console.log(response?.config?.baseURL + response?.config?.url);
  }
  if (response?.config?.params) {
    console.log({ params: response.config.params });
  }
  if (response?.config?.data) {
    console.log({ data: response.config.data });
  }
  if (response?.data) {
    console.log({ data: response.data });
  }
  console.log({ response });
};

export const numberWithCommas = (n: number): string => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getProjectTotalAmount = (obj: GeneratedReportsInterface) => {
  const totalAmount = obj.data
    .reduce((pre, cur) => pre + cur.amount, 0);
  return parseFloat(totalAmount.toFixed(2));
};

export const getTotalAmount = (obj: GeneratedReportsInterface[]) => {
  const totalAmount = Object.values(obj)
    .reduce((pre, cur) => pre = pre +
      cur.data.reduce((pre, cur) => pre + cur.amount, 0)
      , 0);
  return parseFloat(totalAmount.toFixed(2));
};

export const getProjectId = (projects: ProjectsInterface[], name: string) => {
  if (!name) return '';
  const project = projects?.filter(project => project.name === name);
  if (project) return project[0].projectId;
};

export const getGatewayId = (gateways: GatewaysInterface[], name: string) => {
  if (!name) return '';
  const gateway = gateways?.filter(gateway => gateway.name === name);
  if (gateway) return gateway[0].gatewayId;
};

export const getProjectName = (projects: ProjectsInterface[], id: string) => {
  const project = projects!.filter(project => project.projectId === id);
  return project[0].name;
};

export const getGatewayName = (gateways: GatewaysInterface[], id: string) => {
  const gateway = gateways!.filter(gateway => gateway.gatewayId === id);
  return gateway[0].name;
};

export const sortByName = (array: GeneratedReportsInterface[]) => {
  return array.sort((a, b) => a.name.localeCompare(b.name));
};

export const groupById = (
  projects: ProjectsInterface[],
  gateways: GatewaysInterface[],
  objectArray: ReportDataInterface[]
) => {
  return objectArray.reduce((allReports: GeneratedReportsInterface[], report) => {

    const name: string = getProjectName(projects, report['projectId']);
    let index: number | undefined;
    const formattedReport: GeneratedReportsInterface['data'][0] = {
      date: report.created,
      gateway: getGatewayName(gateways, report.gatewayId),
      transactionId: report.paymentId,
      amount: report.amount
    }

    for (const i in allReports)
      if (allReports[i] && allReports[i]['name'] === name) {
        index = Number(i);
        break;
      }

    if (index === undefined) {
      const newObj: GeneratedReportsInterface = {
        name: name,
        data: [formattedReport]
      }
      allReports.push(newObj);
    } else
      allReports[index]['data'].push(formattedReport);

    return allReports;
  }, [])
};
