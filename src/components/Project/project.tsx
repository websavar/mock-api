import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GeneratedReportsInterface } from 'interfaces';
import { Currency, ProjectTableHeader } from 'constants/index';
import { getProjectTotalAmount, numberWithCommas, sortByDate } from 'helper/utils';

import { styled } from '@mui/material/styles';
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Collapse,
  List,
  ListItemButton
} from 'mui';

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': { backgroundColor: '#F1FAFE', },
  'td': { border: 0, padding: '5px', margin: '7px 0' }
}));

const StyledHeaderRow = styled(TableRow)(() => ({
  'th': { border: 0, padding: '7px 5px', margin: '7px 0' }
}));

const Project: React.FC<{ project: GeneratedReportsInterface }> = ({
  project
}): JSX.Element => {

  const [openCollapse, setOpenCollapse] = useState(false);
  const handleClick = () => setOpenCollapse(!openCollapse);

  const showChart: boolean = useLocation().pathname === '/chart' ? true : false;

  sortByDate(project);

  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ p: 0 }} className="list-item-header">
        <div className="col-12">
          <span data-testid='project-name'>{project.name}</span>
          <span data-testid='total-amount'>
            Total: {numberWithCommas(getProjectTotalAmount(project))} {Currency}
          </span>
        </div>
      </ListItemButton>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <div className="col-12 list-item-content">
            <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
              <Table sx={{ minWidth: 500 }} aria-label="project table">
                <TableHead>
                  <StyledHeaderRow>
                    {ProjectTableHeader.map(header =>
                      (!showChart || header.name !== "Gateway") &&
                      <TableCell key={header.name} align={header.align}>
                        {header.name}
                      </TableCell>
                    )}
                  </StyledHeaderRow>
                </TableHead>
                <TableBody>
                  {project.data.map((row) => (
                    <StyledTableRow key={row.transactionId} className='table-row'>
                      <TableCell align="left">{row.date}</TableCell>
                      {!showChart && <TableCell align="center">{row.gateway}</TableCell>}
                      <TableCell align="center">{row.transactionId}</TableCell>
                      <TableCell align="right">{row.amount + Currency} </TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </List>
      </Collapse>
    </>
  )
}

export default Project;