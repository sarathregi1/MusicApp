import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { Accounts } from "meteor/accounts-base";
import RegisterForm from './RegisterForm';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/close';
import MediaQuery from 'react-responsive';
import Flexbox from 'flexbox-react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';


function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    minWidth: 275,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  }
});

class LoginModal extends React.Component {
    login = e => {
        e.preventDefault();        
        Meteor.loginWithPassword(this.name.value, this.password.value, error => {
            if(!error) {
                this.props.client.resetStore();
            }
            console.log(error);
        });
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    state = {
        open: false,
        value: 0
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const { classes, theme } = this.props;

        return (
            <React.Fragment>
                <MediaQuery query="(min-width: 1224px)">
                    <Button onClick={this.handleOpen} style={{ fontFamily: 'Raleway', color: "#FFFFFF", height: 64 }}>Login</Button>
                </MediaQuery>
                <MediaQuery query="(max-width: 1223px)">
                    <Button onClick={this.handleOpen} color="inherit" style={{ fontFamily: 'Raleway', textAlign: 'center', width: 100 + "%" }}>Login</Button>
                </MediaQuery>
                <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                style={{width: 100 + 'vw', height: 100 + 'vh'}}
                >
                    <div style={{width: 100 + 'vw', height: 100 + 'vh'}} className={classes.paper}>
                        <Flexbox flexDirection="column" height="100vh">
                            <Flexbox flexDirection="column" height="90vh">
                                <MediaQuery query="(min-width: 1224px)">
                                    <div style={{ textAlign: "right"}}>
                                        <IconButton style={{ fontFamily: 'Raleway' }} onClick={this.handleClose}>
                                            <CloseIcon/>
                                        </IconButton>
                                    </div>
                                    <Flexbox flexGrow={1}>
                                        <Grid spacing={24} container justify="center" alignItems="center">
                                            <Grid item>
                                                <div>
                                                    <Card className={classes.card}>
                                                        <CardContent style={{padding: 0}}>
                                                            <div className={classes.root}>
                                                                <AppBar position="static" color="default">
                                                                    <Tabs
                                                                        value={this.state.value}
                                                                        onChange={this.handleChange}
                                                                        indicatorColor="primary"
                                                                        textColor="primary"
                                                                        fullWidth
                                                                        style={{ width: 50 + "%", textAlign: "center" }}
                                                                    >
                                                                        <Tab label="Login" />
                                                                        <Tab label="Sign Up" />
                                                                    </Tabs>
                                                                </AppBar>
                                                                <SwipeableViews
                                                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                                                index={this.state.value}
                                                                onChangeIndex={this.handleChangeIndex}
                                                                >
                                                                <TabContainer dir={theme.direction}>
                                                                <form onSubmit={this.login} className={classes.container} noValidate autoComplete="off">    
                                                                    <TextField
                                                                    id="name"
                                                                    label="Name"
                                                                    className={classes.textField}
                                                                    margin="normal"
                                                                    inputRef={input => this.name = input}
                                                                    />
                                                                    <TextField
                                                                    id="password"
                                                                    label="Password"
                                                                    className={classes.textField}
                                                                    type="password"
                                                                    margin="normal"
                                                                    inputRef={input => this.password = input}
                                                                    />
                                                                    {/* <input type="email" ref={input => (this.email = input)} />
                                                                    <input type="password" ref={input => (this.password = input)} /> */}
                                                                    <Button variant="raised" color="primary" type="submit">
                                                                        Login User
                                                                    </Button>
                                                                </form> 
                                                                </TabContainer>
                                                                <TabContainer dir={theme.direction}>
                                                                    <RegisterForm/>
                                                                </TabContainer>
                                                                </SwipeableViews>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </Grid>    
                                        </Grid>
                                    </Flexbox>
                                </MediaQuery>
                                <MediaQuery query="(max-width: 1223px)">
                                    <div className={classes.root}>
                                        <AppBar position="static" color="default">
                                        <Tabs
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            fullWidth
                                        >
                                            <Tab label="Login" />
                                            <Tab label="Sign Up" />
                                        </Tabs>
                                        </AppBar>
                                        <SwipeableViews
                                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                        index={this.state.value}
                                        onChangeIndex={this.handleChangeIndex}
                                        >
                                        <TabContainer dir={theme.direction}>
                                            <form onSubmit={this.login} className={classes.container} noValidate autoComplete="off">    
                                                <TextField
                                                id="name"
                                                label="Name"
                                                className={classes.textField}
                                                margin="normal"
                                                inputRef={input => this.name = input}
                                                />
                                                <TextField
                                                id="password"
                                                label="Password"
                                                className={classes.textField}
                                                type="password"
                                                margin="normal"
                                                inputRef={input => this.password = input}
                                                />
                                                {/* <input type="email" ref={input => (this.email = input)} />
                                                <input type="password" ref={input => (this.password = input)} /> */}
                                                <Button variant="raised" color="primary" type="submit">
                                                    Login User
                                                </Button>
                                            </form>    
                                        </TabContainer>
                                        <TabContainer dir={theme.direction}>
                                            <RegisterForm/>
                                        </TabContainer>
                                        </SwipeableViews>
                                    </div>
                                </MediaQuery>
                            </Flexbox>
                            <Flexbox flexDirection="column" height="10vh">
                                <MediaQuery query="(max-width: 1223px)">
                                    <Button onClick={this.handleClose} style={{ fontFamily: 'Raleway', color: "#000000", height: 100 + "%" }}>Close</Button>
                                </MediaQuery>
                            </Flexbox>
                        </Flexbox>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

LoginModal.propTypes = {
    classes: PropTypes.object.isRequired,
};



const LoginTabWrap = withStyles(styles, { withTheme: true })(LoginModal);

// We need an intermediary variable for handling the recursive nesting.
const LoginModalWrapped = withStyles(styles)(LoginTabWrap);

export default LoginModalWrapped;