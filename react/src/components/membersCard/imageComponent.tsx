import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 80,
    height: 80,
  },
};

const ImageAvatars = ({classes, image}) => {

    return (
        <Grid container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src={image} className={classes.bigAvatar} />
        </Grid>
    );


}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);