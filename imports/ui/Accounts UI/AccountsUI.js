import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function AccountsUI(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div >
        <div style={{padding: 20}}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        
                    </Typography>

                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </div>
        <div style={{padding: 20}}>
            <Card className={classes.card}>
                <CardContent>
                <Typography className={classes.title} color="textSecondary">
                    Word of the Day
                </Typography>
                <Typography variant="headline" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography component="p">
                    well meaning and kindly.<br />
                    {'"a benevolent smile"'}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    </div>
  );
}

AccountsUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountsUI);