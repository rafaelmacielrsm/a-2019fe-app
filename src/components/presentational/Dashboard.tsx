import React from 'react';
import Loader from '../ui/Loader';

class Dashboard extends React.PureComponent<IDashboardprops> {
  public render() {
    return (
      <div>
        <Loader />
        {this.props.tempLabel}
      </div>
    );
  }
}

export default Dashboard;

export interface IDashboardprops {
  showOverlay: boolean,
  tempLabel?: string,
  fetchSomething: () => void
}
