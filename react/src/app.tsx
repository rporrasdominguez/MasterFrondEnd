import * as React from 'react';
import {MemberListPage} from './page/memberListPage';


interface Props {
}

export class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

  }

  public render() {
    return ( 
      <>
        <MemberListPage/>
      </>
    );
  }
}

{/* <MembersCardComponent/>  */}