import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import InputOrganizationComponent from './inputOrganizationComponent';
import MediaCard from './mediaCardComponent';
import{ Link, RouteComponentProps,withRouter} from 'react-router-dom'
import {} from 'core-js';

interface Props extends RouteComponentProps{
 
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members: Array<MemberEntity>,
  company: string, 
}




// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersCardComponent extends React.Component<Props, State> {


  state :State= { members: [],
                  company: 'lemoncode',
                };
  

  loadMembers = () => {
    memberAPI.getAllMembers(this.state.company).then((members) =>
      this.setState({ members: members })
    );
  }

  handleChange = (e) => this.setState({company: e.target.value,});

  public render() {

    return (
        <>
        <div style={{display:'flex',
                     flexDirection:'row',
                     justifyContent:'space-between', 
                     backgroundColor:'#d9d900'}}
        >
          <h1> Members Page</h1>
          <InputOrganizationComponent loadMembers={this.loadMembers}
            handleChange={this.handleChange}
            placeholder={this.state.company}
          />
        </div>
           

        <div style={{ display: 'flex', 
                      flexWrap: 'wrap',
                      }}>
          {this.state.members.map((member: MemberEntity) =>
            <>

              <MediaCard key={member.id}
                image={member.avatar_url}
                id={member.id}
                login={member.login}

              />
            </>
          )
          }
        </div>
            

        </>
        
    );
  }
}



