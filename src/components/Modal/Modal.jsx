import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, StyledModal } from './styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <StyledModal>{this.props.children}</StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
