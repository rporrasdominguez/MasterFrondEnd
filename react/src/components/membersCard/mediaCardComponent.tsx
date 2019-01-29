import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles, createStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import ImageComponent from './imageComponent';
import CardContentComponent from './cardContentComponent';

const styles = () => createStyles({
  card: {
    width: 345,
    border:'1px solid black',
    margin:'1em auto',

  },
  button:{
    margin:'0 auto',
  }
});


const MediaCard = ({classes,image,id,login}) => 

    <Card className={classes.card} key={id}>
      <CardActionArea>
        
        <ImageComponent image={image}/>
        
        <CardContentComponent id={id}
                              login={login}/>

      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary" className={classes.button}>
          Consultar
        </Button> */}
      </CardActions>
    </Card>


MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);