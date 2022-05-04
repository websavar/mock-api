import { noReportsUrl } from 'constants/index';

const NoReports = () => {
  return (
    <>
      <h2>No reports</h2>
      <h4 className='mb-5'>
        Currently you have no data for the reports to be generated.<br />
        Once you start generating traffic through the Balance application <br />
        the reports will be shown.
      </h4>
      <img
        style={{ maxWidth: '400px', width: '100%' }}
        src={noReportsUrl}
        alt="no-reports" />
    </>
  );
};

export default NoReports;

