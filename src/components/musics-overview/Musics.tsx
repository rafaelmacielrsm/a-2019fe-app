import React from 'react';
import Loader from '../ui/Loader';

export interface IMusicsProps {
  showOverlay: boolean
}

interface IMusicsState {
  hasLoaded: boolean
}

class Musics extends React.PureComponent<IMusicsProps, IMusicsState> {
  constructor( props: IMusicsProps ) {
    super( props );
    this.state = {
      hasLoaded: false,
    };

    this.onDataFetchComplete = this.onDataFetchComplete.bind( this );
  }

  public render() {
    return (
      <section>
        {this.props.showOverlay ? <Loader /> : null}
      </section>
    );
  }

  private onDataFetchComplete(): void {
    this.setState({ hasLoaded: true });
  }
}

export default Musics;
