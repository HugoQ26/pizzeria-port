import { connect } from 'react-redux';
import Waiter from './Waiter';
import {
  getAll,
  fetchFromAPI,
  changeTableStatus,
  getLoadingState,
} from '../../../redux/tablesRedux';

const mapStateToProps = state => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeTableStatus: (status, id) => dispatch(changeTableStatus(status, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
