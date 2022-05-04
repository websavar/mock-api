import { Link } from 'react-router-dom';
import { page404Url } from 'constants/index';
import { Button } from 'mui';

function Page404() {

  return (
    <div className='d-flex flex-column align-items-center justify-content-center h-100 mt-5'>
      <img src={page404Url} alt="page not found" style={{ width: '210px' }} />
      <div className='pt-4 text-center'>
        <h5>This is not the page that you are looking for!</h5>
        <br />
        <Button variant='outlined' component={Link} to={'/'}>
          Back to the Home page
        </Button>
      </div>
    </div>
  );
}

export default Page404;