import { connect } from 'react-redux';
import { memberRequest, updateCompany } from '../../actions/memberRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';

const mapStateToProps = (state  :State) => {
  return{
      members: state.memberReducer.members,
      company:state.memberReducer.company
     
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (company: string) => dispatch(memberRequest(company)),
    onChangeCompany: (company: string) => dispatch(updateCompany(company))
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
