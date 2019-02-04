import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member'

interface Props {
  members: Array<MemberEntity>;
  company: string,
  loadMembers: () => any;
  onChangeCompany: () => void;
}

export const MemberAreaComponent = (props : Props) => {
  return (
  <div>
      <input type='text'
      />
      <input type="submit"
              value="load"
              className="btn btn-default"
              onClick={() => props.loadMembers()}
      />
      <MemberTableComponent members={props.members}/>
   
     
  </div>
  );
}
