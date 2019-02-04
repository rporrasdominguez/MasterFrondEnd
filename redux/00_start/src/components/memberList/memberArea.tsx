import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member'

interface Props {
  members: Array<MemberEntity>;
  company: string,
  loadMembers: (company:string) => any;
  onChangeCompany: (company:string) => void;
}

export const MemberAreaComponent = (props : Props) => {
  return (
  <div>
      <input type='text'
             onChange={(e) => props.onChangeCompany(e.target.value)}
             value={props.company}
      />
      <input type="submit"
              value="load"
              className="btn btn-default"
              onClick={() => props.loadMembers(props.company)}
      />
      <MemberTableComponent members={props.members}/>
   
     
  </div>
  );
}
