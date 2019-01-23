import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { cancelFetch, performFetch } from '../../datastore/actions';
import { IState } from '../../datastore/reducers';
import Dashboard from '../presentational/Dashboard';

interface ILocalStateProps {
  showOverlay: boolean;
}

const mapStateToProps = ( state: IState ): ILocalStateProps => ({
  showOverlay: state.isFetching,
});

const mapDispathToProps = ( dispatch: Dispatch ) => ({
  fetchSomething: () => dispatch(cancelFetch()),
});

export default connect(mapStateToProps, mapDispathToProps)(Dashboard);
