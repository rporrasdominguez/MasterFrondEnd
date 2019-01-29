import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Input, IconButton} from '@material-ui/core';
import { withStyles, createStyles} from '@material-ui/core/styles';

const styles = () => createStyles({
    header: {
 
   
    },
  });

const InputOrganizationComponent = ({classes,...props}) =>

    <div className={classes.header}>
        
        <Input onChange={props.handleChange}
               placeholder={props.placeholder}
        />

        <IconButton onClick={props.loadMembers}>
            Search
        </IconButton>
    </div>

InputOrganizationComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(InputOrganizationComponent);