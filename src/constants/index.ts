import { IHeader } from 'interfaces';

export const LogoUrl: string = require('assets/images/logo.svg').default;
export const page404Url: string = require('assets/images/p404.svg').default;
export const noReportsUrl: string = require('assets/images/no-reports.svg').default;

export const Default_Dates = {
  From: '2021-01-01',
  To: '2021-12-31',
}

export const Currency = 'USD';

export const ProjectTableHeader: IHeader[] = [
  {
    name: 'Date',
    align: 'left'
  }, {
    name: 'Gateway',
    align: 'center'
  }, {
    name: 'Transition ID',
    align: 'center'
  }, {
    name: 'Amount',
    align: 'right'
  }
];