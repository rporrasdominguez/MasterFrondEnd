import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles, createStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props{
    login: string,
    id: number
}


const styles = () => createStyles({

    content:{
        backgroundColor:'#d8d800',
    
      },
    
      typograph:{
        color:'white',
        textAlign:'center',
      }


});

const CardContentComponent = ({ classes, id, login }) => {
    return (
        <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.typograph}>
                id: {id}
            </Typography>
            <Typography component="p" className={classes.typograph}>
                login: {login}
            </Typography>
        </CardContent>
    )

}

   

CardContentComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(CardContentComponent);