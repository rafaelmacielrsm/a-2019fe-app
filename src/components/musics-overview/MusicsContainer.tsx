import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { cancelFetch, performFetch } from '../../datastore/actions';
import { IState } from '../../datastore/reducers';
import Musics from './Musics';

interface ILocalStateProps {
  showOverlay: boolean;
}

const mapStateToProps = ( state: IState ): ILocalStateProps => ({
  showOverlay: state.isFetching,
});

export default connect(mapStateToProps)(Musics);
