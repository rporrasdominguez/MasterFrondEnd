import * as React from 'react';
import { MembersCardComponent } from './components';


interface Props {
}

export class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

  }

  public render() {
    return ( 
      <>
       <MembersCardComponent/> 
      </>
    );
  }
}

