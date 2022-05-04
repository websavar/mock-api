import { Link, useLocation } from 'react-router-dom';
import { IconButton, PieChartIcon, TableRowsIcon } from 'mui';

const MenuButton: React.FC<{ type: string }> = ({ type }) => {
  const showChart: boolean = useLocation().pathname === '/chart' ? true : false;

  return (
    <IconButton
      aria-label="menu button"
      color={(showChart && type === 'reports') || (!showChart && type === 'chart') ? "info" : "primary"}
      component={Link}
      to={`/${type}`}
    >
      {type === 'reports' ? <TableRowsIcon /> :
        type === 'chart' && <PieChartIcon />}
    </IconButton>
  )
}

export default MenuButton;