import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import { MenuItem } from 'material-ui';
import Lightbox from "react-image-lightbox";
import { render } from "react-dom";
import AccountFunc from './AccountFunc';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

const Galimages = [
  "/2018-02-23.png",
  "/2018-02-23 (1).png",
  "/2018-02-27.png"
];

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
};

class MobileDrawer extends React.Component {
  state = {
    bottom: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { classes } = this.props;
    const { photoIndex, isOpen } = this.state;
    return (
      <div>
        <IconButton onClick={this.toggleDrawer('bottom', true)} style={{ color: '#FFFFFF' }}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="bottom" open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
          <div tabIndex={0} role="button">
            <MenuItem>
              <Button disableRipple color="inherit" href='/' style={{ fontFamily: 'Raleway', width: 100 + "%" }}>Home</Button>
            </MenuItem>
            <MenuItem>
              <Button disableRipple color="inherit" href='/Blog' style={{ fontFamily: 'Raleway', width: 100 + "%" }}>Blog</Button>
            </MenuItem>
            <MenuItem>
              <Button disableRipple type="button" onClick={() => this.setState({ isOpen: true })} style={{ fontFamily: 'Raleway', width: 100 + "%" }}>Gallery</Button>
            </MenuItem>
            <MenuItem>
              <Button disableRipple color="inherit" href='/Account' style={{ fontFamily: 'Raleway', width: 100 + "%" }}>Account</Button>
            </MenuItem>
            <MenuItem>
              <AccountFunc />
            </MenuItem>
          </div>
        </Drawer>
        {isOpen && (
            <Lightbox
                mainSrc={Galimages[photoIndex]}
                nextSrc={Galimages[(photoIndex + 1) % Galimages.length]}
                prevSrc={Galimages[(photoIndex + Galimages.length - 1) % Galimages.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + Galimages.length - 1) % Galimages.length
                })
                }
                onMoveNextRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + 1) % Galimages.length
                })
                }
            />
        )}
      </div>
    );
  }
}

MobileDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MobileDrawer);